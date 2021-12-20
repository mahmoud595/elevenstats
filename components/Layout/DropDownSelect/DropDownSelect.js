import Select, { components } from "react-select";
import { defaultTheme } from "react-select";
import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import theme from "../../../src/theme";
import { Option } from "./Option/Option";

const { colors } = defaultTheme;

const selectStyles = {
  control: (provided) => ({
    ...provided,

    width: "95%",

    margin: "1em 0.8em 1em 0.6em",
    borderColor: "#D1D5DB",
    color: "#D1D5DB",
    boxShadow: theme.palette.info.main,
    fontSize: "1em",
    minHeight: "3.9em",
    "&:hover": {
      borderColor: "transparent",
    },
    "& svg": {
      color: "#D1D5DB",
      width: "100%",
      height: "100%",
    },
  }),
  container: () => ({
    height: "70%",
  }),
  menu: () => ({
    height: "100%",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#D1D5DB",
  }),
  valueContainer: (base) => ({
    ...base,
    fontSize: "1.1em",
    padding: "0.2em 0.8em",
    color: theme.palette.info.main,
  }),
  indicatorsContainer: (base) => ({
    ...base,
    width: "2.4em",
    height: "3.2em",
    alignSelf: "center",
  }),
  input: (base) => ({
    color: "#6B7281",
    "& input": {
      fontWeight: "700",
    },
  }),
  menuList: (base) => ({
    ...base,

    height: "100%",
    "scrollbar-width": "thin !important",
    "scrollbar-color": "#92C13E transparent !important",

    "&::-webkit-scrollbar": {
      width: "0.6em",
      "@media (max-width: 960px)": {
        width: "1em",
      },
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "5px",
      background: "transparent",
      margin: "0.4rem 0",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      background: "#92C13E",
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.5)",
      "&:hover": {
        background: "#ADD666",
      },
    },
  }),
  option: (base) => ({
    ...base,
    cursor: "pointer",
    padding: "0 1em",
    backgroundColor: "inherit",
    color: "inherit",
    fontSize: "1em",
    "@media (max-width: 960px)": {
      fontSize: "0.7em",
    },
    "@media (max-width: 780px)": {
      fontSize: "0.6em",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
  }),
};
const useStyles = makeStyles((theme) => ({
  menuContainer: {
    background: "#FFFFFF",
    borderRadius: 4,
    boxShadow: "0 0px 3px #BF8FBA",
    marginTop: 8,
    position: "absolute",
    zIndex: 2,

    // height: "37.9em",
    flex: 1,
    width: "26em",
    "@media (max-width: 960px)": {
      // height: "50em",
      width: "30em",
    },
    "@media (max-width: 780px)": {
      // height: "50em",
      width: "25em",
    },
  },
  menuHeaderStyle: {
    // backgroundColor: "red",
    color: "#61BDE5",
    margin: " 0.5em 0 0.4em 0.9em",
  },

  clickedOption: {
    backgroundColor: "#F5F5F5",
  },
}));

const DropDownSelect = ({
  target,
  msg,
  dashboard,
  dashboardComp,
  type,
  options,
  search,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [valueArr, setValueArr] = useState([]);
  // const [type, setType] = useState("league");
  const toggleOpen = (e) => {
    setIsOpen((state) => !state);
  };
  const onSelectChange = (val) => {
    const newValueArr = [...valueArr];
    if (dashboard) {
      const filteredArr = newValueArr.filter((option) => {
        return option.label !== val.label;
      });
      filteredArr.push(val);
      setValueArr(filteredArr);
    } else {
      toggleOpen();
      setValue(val);
    }
  };
  const clickHandler = (e) => {
    setType(e.target.innerText.toLowerCase());
  };
  return (
    <Dropdown
      dashboard={dashboard}
      isOpen={isOpen}
      dashboardComp={dashboardComp}
      type={type}
      onClose={toggleOpen}
      clickHandler={clickHandler}
      target={
        <Grid
          item
          container
          onClick={(e) => toggleOpen(e)}
          // isselected={isOpen}
          alignItems="center"
        >
          {target}
        </Grid>
      }
    >
      <Select
        autoFocus
        backspaceRemovesValue={false}
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,

          Option: (props) => Option(props, valueArr, dashboard),
          MenuList: (props) => MenuList(props, msg, type, dashboard, search),
          Control: (props) => (search ? Control(props) : null),
        }}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}
        menuIsOpen
        onChange={onSelectChange}
        closeMenuOnSelect={false}
        options={options}
        placeholder={dashboard ? `CHOOSE ${type}` : "SEARCH"}
        styles={selectStyles}
        tabSelectsValue={false}
        value={value}
        name="option"
      />
    </Dropdown>
  );
};

export default DropDownSelect;

const Menu = (props) => {
  const classes = useStyles();

  return <div className={classes.menuContainer} style={{}} {...props} />;
};
const Blanket = (props) => (
  <div
    style={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: "fixed",
      zIndex: 1,
    }}
    {...props}
  />
);
const Dropdown = ({
  children,
  isOpen,
  target,
  onClose,
  dashboard,
  dashboardComp,
}) => (
  <div style={{ position: "relative" }}>
    {target}

    {isOpen ? (
      <Menu>
        {dashboard && dashboardComp} {children}{" "}
      </Menu>
    ) : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
const Svg = (p) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...p}
  />
);
const DropdownIndicator = () => (
  <div style={{ color: colors.neutral20, height: 24, width: 32 }}>
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  </div>
);

const MenuList = (props, msg, type, dashboard, search) => {
  const classes = useStyles();

  return (
    <>
      {msg && (
        <div className={classes.menuHeaderStyle}>
          <Typography variant="caption">
            {msg} {dashboard && type}
          </Typography>
        </div>
      )}
      <components.MenuList {...props}>{props.children}</components.MenuList>
    </>
  );
};

const Control = (props) => {
  return <components.Control {...props} />;
};

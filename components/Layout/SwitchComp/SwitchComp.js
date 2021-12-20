import { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Switch from "@mui/material/Switch";

const useStyles = makeStyles((theme) => ({
  rootSwitch: {
    width: ({ width }) => width,
    marginRight: 0,
    height: ({ rootHeight }) => rootHeight,
    padding: 0,
    display: "flex",
    // "@media (max-width:1480px)": {
    //   width: ({ width }) => `${parseInt(0.8 * width)}px`,
    //   height: ({ rootHeight }) => `${parseInt(0.8 * rootHeight)}px`,
    // },
    // "@media (max-width:1139px)": {
    //   width: ({ width }) => `${parseInt(0.7 * width)}px`,
    //   height: ({ rootHeight }) => `${parseInt(0.7 * rootHeight)}px`,
    // },
    // "@media (max-width:990px)": {
    //   width: ({ width }) => `${parseInt(0.5 * width)}px`,
    //   height: ({ rootHeight }) => `${parseInt(0.5 * rootHeight)}px`,
    // },
    // "@media (max-width:660px)": {
    //   width: ({ width }) => `${parseInt(0.4 * width)}px`,
    //   height: ({ rootHeight }) => `${parseInt(0.4 * rootHeight)}px`,
    // },
  },
  switchBase: {
    padding: 1,
    paddingLeft: 3,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#fff",
    "&.Mui-checked": {
      color: "#A1B5C9",
      transform: ({ translate }) => `translate(${translate}px, -50%)`,
      // "@media (max-width:1480px)": {
      //   transform: ({ translate }) => `translate(${0.8 * translate}px,, -50%)`,
      // },
      // "@media (max-width:1139px)": {
      //   transform: ({ translate }) => `translate(${0.7 * translate}px, -50%)`,
      // },
      // "@media (max-width:990px)": {
      //   transform: ({ translate }) => `translateX(${0.5 * translate}px)`,
      // },
      // "@media (max-width:660px)": {
      //   transform: ({ translate }) => `translateX(${0.4 * translate}px)`,
      // },
      "& + $track": {
        opacity: 1,
        backgroundColor: "#EAEDF2",
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    boxShadow: "none",

    height: ({ thumbHeight }) => thumbHeight,
    width: ({ thumbWidth }) => thumbWidth,
    // "@media (max-width:1480px)": {
    //   width: ({ thumbWidth }) => `${parseInt(0.8 * thumbWidth)}px`,
    //   height: ({ thumbHeight }) => `${parseInt(0.8 * thumbHeight)}px`,
    // },
    // "@media (max-width:1139px)": {
    //   width: ({ thumbWidth }) => `${parseInt(0.7 * thumbWidth)}px`,
    //   height: ({ thumbHeight }) => `${parseInt(0.7 * thumbHeight)}px`,
    // },
    // "@media (max-width:990px)": {
    //   width: ({ thumbWidth }) => `${parseInt(0.5 * thumbWidth)}px`,
    //   height: ({ thumbHeight }) => `${parseInt(0.5 * thumbHeight)}px`,
    // },
    // "@media (max-width:660px)": {
    //   width: ({ thumbWidth }) => `${parseInt(0.4 * thumbWidth)}px`,
    //   height: ({ thumbHeight }) => `${parseInt(0.4 * thumbHeight)}px`,
    // },
    // "@media (max-width: 1280px)": {
    //   height: "0.1em",
    //   width: "0.1em",
    // },
    // "@media (max-width: 960px)": {
    //   height: "0.5em",
    //   width: "0.5em",
    // },
  },
  track: {
    borderRadius: "20px",
    opacity: 1,
    backgroundColor: "#246BFD",
    padding: 4,
  },
  colorSecondary: {
    "&.Mui-checked": {
      color: "#FFF",
    },
  },
}));

export const SwitchComp = (props) => {
  const classes = useStyles(props);
  const [checked, setChecked] = useState(props.checked || false);

  const handleChange = (event) => {
    props.checkHandler();
    setChecked(!checked);
  };
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      onChange={handleChange}
      checked={checked}
      edge="end"
      classes={{
        root: classes.rootSwitch,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
        colorSecondary: classes.colorSecondary,
      }}
    />
  );
};

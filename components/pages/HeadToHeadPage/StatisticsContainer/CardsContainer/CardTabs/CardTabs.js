import { useState, useCallback, useMemo } from "react";
import { Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { Btn } from "../../../../..";

const useStyles = makeStyles(({ palette }) => ({
  btnText: {
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  tabsContainer: {
    // paddingTop: ({ padding }) => padding || 20,
    // paddingRight: 8,
    // paddingLeft: 8,
    // '& > div:not(:last-child)': {
    //   borderRight: '3px solid #FFF',
    // },
    display: "flex",
  },
}));

export const CardTabs = ({
  tabs,
  changeTab = () => console.log("pass"),
  direction = "row",
  padding,
}) => {
  const [active, setActive] = useState(0);
  const classes = useStyles({ padding });
  const sm = useMediaQuery("(max-width:640px)");
  const onClick = (i) => {
    setActive(i);
    changeTab(i);
  };

  const renderTabs = useCallback(() => {
    return tabs?.map(({ name, xs, index }, i) => (
      <Grid key={i} item>
        <Btn
          height="30px"
          mobileHeight="4em"
          // backgroundColor={active === index ? "#EAEDF2" : "#F6F7FA"}
          borderRadius="14px"
          padding="11px 15px"
          color={
            active === index
              ? "rgba(36, 107, 253, 1)"
              : "rgba(103, 127, 152, 1)"
          }
          backgroundColor={
            active === index ? "rgba(36, 107, 253, 0.08)" : "transparent"
          }
          onClick={() => onClick(index)}
        >
          <Typography variant="h4" className={classes.btnText}>
            {name}
          </Typography>
        </Btn>
      </Grid>
    ));
  }, [active, tabs]);

  const tabsMemo = useMemo(() => renderTabs(), [active, tabs]);
  return (
    <Grid item className={classes.tabsContainer} direction={direction}>
      {tabsMemo}
    </Grid>
  );
};

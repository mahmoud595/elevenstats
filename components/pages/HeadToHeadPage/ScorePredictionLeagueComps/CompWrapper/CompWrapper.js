import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Tooltip } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import { CardTabs } from "../../StatisticsContainer/CardsContainer/CardTabs/CardTabs";

const useStyles = makeStyles(({ palette, ...props }) => ({
  devRoot: {
    position: "relative",
    width: "100%",
    gridArea: ({ gridArea }) => gridArea && gridArea,
    marginBottom: ({ marginBottom }) => marginBottom || 0,
    // backgroundColor: ({ backgroundColor }) => backgroundColor,
    // backgroundColor: ({ backgroundColor }) => backgroundColor,
    padding: ({ padding }) => padding || "0px",
    height: ({ height, noFlex }) =>
      height ? height : noFlex ? "auto" : "100%",
    // flex: ({ flex }) => flex && flex,
    borderRadius: (props) => {
      return props.live
        ? props.borderRadius
        : props.noBorderRadius
        ? "0 20px 20px 0"
        : 20;
    },
    // boxShadow: (props) => {
    //   return props.live ? "none" : "0 3px 16px rgba(0,0,0,.16)";
    // },
    backgroundImage: (props) => {
      return props.live
        ? "linear-gradient(to bottom, #EAEBED, #BDC0C4)"
        : "none";
    },
    // backgroundImage: "linear-gradient(to bottom, #EAEBED, #BDC0C4)",
  },
  title: {
    backgroundColor: "#F6F7FA",
    borderRadius: "12px",
    height: "35px",
    textTransform: "uppercase",
    margin: ({ outside }) =>
      outside ? "-45px 0 1.5em 4px" : "4px 0 1.5em 4px",
    width: "98%",
    position: "relative",
    paddingRight: "3px",

    // '@media (max-width: 1450px)': {
    //   marginBottom: 10,
    // },
    color: "#022A54",
    // "@media (max-width: 1450px)": {
    //   padding: "10px 15px",
    // },
    "@media (max-width: 960px)": {
      padding: "5px 10px",
    },
  },
  titleText: {
    lineHeight: "19px",
    // letterSpacing: ({ titleLetterSpace }) =>
    //   titleLetterSpace && titleLetterSpace,
    marginTop: "7px",
    fontSize: "1.8em",
    fontWeight: 700,
    marginLeft: "13px",
    color: "#022A54",

    "@media (max-width: 960px)": {
      fontSize: "0.7rem",
    },
  },
  toolTip: {
    background: "#FFF",
    fontSize: 12,
    color: "#022A54",
    boxShadow: "0px -2px 6px rgba(0, 0, 0, .16)",
  },
  head: {
    padding: "4px 4px 16px 4px",
  },
}));

export const CompWrapper = ({
  title,
  head,
  children,
  tooltip,
  toolTipText,
  tabs,
  changeTab,
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="flex-start"
      wrap="nowrap"
      className={classes.devRoot}
    >
      {title ? (
        <Grid item container direction={head ? "column" : "row"} wrap="nowrap">
          <Grid
            item
            className={classes.title}
            sx={{ overflow: "hidden" }}
            container
            justifyContent="space-between"
            wrap="nowrap"
          >
            <Grid item container>
              <Grid
                item
                sx={{
                  position: "absolute",
                  width: "3px",
                  height: "100%",
                  background: "linear-gradient(0deg, #1BD47B, #1BD47B)",
                  left: "1px",
                  top: "0",
                  borderRadius: "12px",
                }}
              ></Grid>
              <Typography variant="h2" className={classes.titleText}>
                {title}
              </Typography>
              {tooltip ? (
                <Tooltip
                  title={toolTipText ?? "you hovered me"}
                  placement="right"
                  classes={{ tooltip: classes.toolTip }}
                >
                  <InfoIcon
                    fontSize="small"
                    color="primary"
                    sx={{ margin: "8px", width: "16px", height: "16px" }}
                  />
                </Tooltip>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item container justifyContent="flex-end" alignItems="center">
              <CardTabs tabs={tabs} changeTab={changeTab} />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
      <Grid
        item
        container
        direction="column"
        sx={{
          background: props.backgroundColor || "#fff",
          borderRadius: props.live
            ? props.borderRadius
            : props.noBorderRadius
            ? props.noBorderRadius
            : "14px",
          flex: props.flex && 1,
        }}
        wrap="nowrap"
      >
        {head ? (
          <Grid item container className={classes.head}>
            {head}
          </Grid>
        ) : (
          <></>
        )}

        {children}
      </Grid>
    </Grid>
  );
};

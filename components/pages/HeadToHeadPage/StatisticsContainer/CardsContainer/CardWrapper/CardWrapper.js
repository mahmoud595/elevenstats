import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    // boxShadow: '0px 3px 16px rgba(0, 0, 0, .16)',
    // backgroundColor:,
    background: ({ background }) => (background ? background : "#FFF"),
    borderRadius: 20,
    height: ({ noFlex }) => !noFlex && "100%",
  },
  title: {
    letterSpacing: "normal",
    textTransform: "capitalize",
  },
  titleContainer: {
    padding: ({ noPaddingBottom }) =>
      noPaddingBottom ? "14px 12px 0 13px" : "14px 12px 12px 13px",
  },

  headerComp: {
    // letterSpacing: "normal",
    borderRadius: "20px 20px 0px 0px",
    textTransform: "uppercase",
    padding: "2.1em 2.7em",
    background: "#FFF",
  },
  // headerTitle: {
  //   '@media only screen and (max-width:1455px)': {
  //     fontSize: 12,
  //   },
  // },
  toolTip: {
    background: "#FFF",
    fontSize: 12,
    color: "#022A54",
    boxShadow: "0px -2px 6px rgba(0, 0, 0, .16)",
  },
}));

export const CardWrapper = ({
  title,
  children,
  alignSelf = "flex-start",
  headerComp,
  background,
  noFlex,
  noPaddingBottom,
  tooltip,
}) => {
  const classes = useStyles({ background, noFlex, noPaddingBottom });
  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      wrap="nowrap"
      alignItems="center"
    >
      {!title ? (
        <Grid item container alignItems="center" className={classes.headerComp}>
          {headerComp}
        </Grid>
      ) : !headerComp ? (
        <Grid item style={{ alignSelf }} className={classes.titleContainer}>
          <Typography
            color="primary"
            variant="subtitle2"
            className={classes.title}
          >
            {title}{" "}
            <Tooltip
              title={tooltip ?? "you hovered me"}
              placement="right"
              classes={{ tooltip: classes.toolTip }}
            >
              <InfoIcon fontSize="small" color="primary" />
            </Tooltip>
          </Typography>
        </Grid>
      ) : (
        <Grid
          item
          container
          wrap="nowrap"
          className={classes.headerComp}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography
              color="primary"
              variant="subtitle2"
              className={classes.title}
              // style={{ letterSpacing: 'normal' }}
            >
              {title}
              <Tooltip title="you hovered me">
                <InfoIcon fontSize="small" color="primary" />
              </Tooltip>
            </Typography>
          </Grid>
          {headerComp}
        </Grid>
      )}

      {children}
    </Grid>
  );
};

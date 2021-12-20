import { useCallback, useMemo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Hidden } from "@mui/material";
import Image from "next/image";
import { useSelector, shallowEqual } from "react-redux";
import { CellLock } from "../../../../../../public";
import { getColor } from "utils/helperFunctions/h2hHelperFunctions";
const useStyles = makeStyles(({ palette }) => ({
  img: {
    width: "15px",
    height: "20px",
  },
  circleHeader: {
    color: "#022A54",
    textAlign: "center",
    whiteSpace: "nowrap",
    padding: "4px 10px",
    fontWeight: 600,
    textTransform: "uppercase",
    "@media only screen and (max-width:1440px)": {
      padding: "4px 6px",
      fontSize: "1rem",
    },

    "@media only screen and (max-width:1280px)": {
      padding: "4px 5px",
      fontSize: "12px",
    },

    "@media only screen and (max-width:960px)": {
      fontSize: "1rem",
    },
    "@media only screen and (max-width:760px)": {
      fontSize: "0.7rem",
    },
  },
  headerContainer: {
    // backgroundColor: "#022A54",
    borderRadius: 20,
    padding: "0 10px",
    color: "#022A54",
  },
  rowName: {
    fontWeight: 500,
    // "@media only screen and (max-width:1600px)": {
    //   fontWeight: 600,
    // },
    color: ({ firstCellFontColor }) =>
      firstCellFontColor ? firstCellFontColor : palette.primary.main,
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.4rem",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: "1rem",
    },
    "@media only screen and (max-width:600px)": {
      fontSize: "9px",
      fontWeight: 600,
      lineHeight: "9px",
    },
  },
  value: {
    color: "#000",
    textAlign: "center",
    "@media only screen and (max-width:1280px)": {
      fontSize: "12px",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: "0.9rem",
    },
    width: "53px",
    padding: "3px 0",
    borderRadius: "16px",
  },
  team: {
    textAlign: "start",
    textTransform: "uppercase",
    color: "#022A54",
    whiteSpace: "nowrap",
    "@media only screen and (max-width:1280px)": {
      fontSize: "12px",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: ({ headerVariant }) => headerVariant === "h5" && "1rem",
    },
    "@media only screen and (max-width:760px)": {
      fontSize: ({ headerVariant }) => headerVariant === "h5" && "0.7rem",
    },
  },
  rowHeight: {
    minHeight: ({ minHeight }) => minHeight,
    padding: ({ rowPadding }) => rowPadding,
    "@media (max-width: 640px)": {
      padding: "0 1rem !important",
    },
  },
  image: {
    objectFit: "scale-down",
  },
  rowImageContainer: {
    marginRight: 5,
  },
  // imageContainer: {
  //   width: 15,
  //   height: 20,
  // },
}));

export const CardTable = ({
  subTitle,
  teamsData,
  data,
  extended,
  locked,
  size = 3,
  bigSize = 3,
  minHeight = "6em",
  rowPadding = 0,
  percentile,
  // subTitleSize = 8,
  // smallSubTitleSize = subTitleSize + 1,
  firstCellFontColor,
  firstColumnSize = 5,
  headerVariant = "h5",
}) => {
  const classes = useStyles({
    size,
    minHeight,
    rowPadding,
    firstCellFontColor,
    firstColumnSize,
    headerVariant,
  });
  const { localTeam, visitorTeam } = useSelector(({ h2h }) => {
    const {
      localTeamStats: { team: localTeam },
      visitorTeamStats: { team: visitorTeam },
    } = h2h;
    return { localTeam, visitorTeam };
  }, shallowEqual);
  const rednerTableRows = useCallback(() => {
    return (
      data.length &&
      data?.map(
        (
          {
            name,
            t1,
            t2,
            img,
            avg = "-",
            t1Color,
            t2Color,
            avgColor,
            tAverage,
          },
          index
        ) => (
          <Grid
            key={index}
            item
            container
            justifyContent="space-between"
            alignItems="center"
            className={classes.rowHeight}
            wrap="nowrap"
          >
            <Grid
              item
              container
              xs={extended ? bigSize + 1 : firstColumnSize}
              sm={extended ? bigSize : firstColumnSize}
              alignItems="center"
              wrap="nowrap"
            >
              {img ? (
                !name ? (
                  <Grid item container alignItems="center">
                    <Image
                      src={
                        img === localTeam.logoPath ? img : visitorTeam.logoPath
                      }
                      width={15}
                      height={20}
                      className={classes.image}
                      layout="fixed"
                      alt={
                        img === localTeam.logoPath
                          ? localTeam.name
                          : visitorTeam.name
                      }
                    />
                  </Grid>
                ) : (
                  <>
                    <Grid
                      item
                      // container
                      // alignItems="center"
                      className={classes.rowImageContainer}
                    >
                      <Image
                        src={
                          img === localTeam.logoPath
                            ? img
                            : visitorTeam.logoPath
                        }
                        width={15}
                        height={20}
                        className={classes.image}
                        layout="fixed"
                        alt={
                          img === localTeam.logoPath
                            ? localTeam.name
                            : visitorTeam.name
                        }
                      />
                    </Grid>
                    <Grid item xs={10} container alignItems="center">
                      <Typography
                        variant={headerVariant}
                        className={classes.team}
                      >
                        {name}
                      </Typography>
                    </Grid>
                  </>
                )
              ) : (
                <Typography className={classes.rowName} variant="body2">
                  {name}
                </Typography>
              )}
            </Grid>
            <Grid
              item
              xs={size - 1}
              sm={size}
              container
              justifyContent="center"
            >
              {locked ? (
                <CellLock />
              ) : (
                <Typography
                  className={classes.value}
                  variant="body2"
                  style={{
                    backgroundColor: percentile && getColor(t1Color),
                  }}
                >
                  {t1.toString().includes("%") ? t1 : !tAverage ? `${t1}%` : t1}
                </Typography>
              )}
            </Grid>

            <Grid
              item
              xs={size - 1}
              sm={size}
              container
              justifyContent="center"
            >
              {locked ? (
                <CellLock />
              ) : (
                <Typography
                  className={classes.value}
                  variant="body2"
                  style={{
                    backgroundColor: percentile && getColor(t2Color),
                  }}
                >
                  {t2.toString().includes("%") ? t2 : !tAverage ? `${t2}%` : t2}
                </Typography>
              )}
            </Grid>

            {extended && (
              <Grid
                item
                xs={size - 1}
                sm={size}
                container
                justifyContent="center"
              >
                {locked ? (
                  <CellLock />
                ) : (
                  <Typography
                    className={classes.value}
                    variant="body2"
                    // style={{
                    //   backgroundColor:
                    //     percentile &&
                    //     getColor(
                    //       avgColor
                    //         ? avgColor.toString().includes("%")
                    //           ? avgColor.toString().split("%")[0]
                    //           : avgColor
                    //         : 0
                    //     ),
                    // }}
                  >
                    {avg}
                  </Typography>
                )}
              </Grid>
            )}
          </Grid>
        )
      )
    );
  }, [data, extended, bigSize, size]);
  const rows = useMemo(
    () => rednerTableRows(),
    [data, extended, bigSize, size]
  );

  const rednerTeams = useCallback(() => {
    return (
      teamsData.length &&
      teamsData?.map(({ name, img }, index) => (
        <Grid
          key={index}
          item
          container
          alignItems="center"
          justifyContent="center"
          xs={size - 1}
          sm={size}
          wrap="nowrap"
        >
          {img ? (
            name ? (
              <>
                <Grid
                  item
                  // xs={2}

                  className={classes.rowImageContainer}
                >
                  <Image
                    src={
                      img === localTeam.logoPath ? img : visitorTeam.logoPath
                    }
                    alt={
                      img === localTeam.logoPath
                        ? localTeam.name
                        : visitorTeam.name
                    }
                    width={15}
                    height={20}
                    className={classes.image}
                    layout="fixed"
                  />
                </Grid>
                <Hidden smDown implementation="css">
                  <Grid item>
                    <Typography
                      variant={headerVariant}
                      className={classes.team}
                    >
                      {name}
                    </Typography>
                  </Grid>
                </Hidden>
              </>
            ) : (
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                className={classes.rowImageContainer}
                wrap="nowrap"
              >
                <Image
                  src={img === localTeam.logoPath ? img : visitorTeam.logoPath}
                  alt={
                    img === localTeam.logoPath
                      ? localTeam.name
                      : visitorTeam.name
                  }
                  width={23}
                  height={30}
                  layout="fixed"
                  className={classes.image}
                />
              </Grid>
            )
          ) : (
            <Grid item container justifyContent="center">
              <Typography variant={headerVariant} className={classes.team}>
                {name}
              </Typography>
            </Grid>
          )}
        </Grid>
      ))
    );
  }, [teamsData]);

  const teams = useMemo(() => rednerTeams(), [teamsData]);
  return (
    <>
      {/* {tableHeaders} */}
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.rowHeight}
        wrap="nowrap"
      >
        <Grid
          item
          xs={extended ? bigSize + 1 : firstColumnSize}
          sm={extended ? bigSize : firstColumnSize}
          container
          alignItems="flex-start"
        >
          <Grid
            item
            className={classes.headerContainer}
            // lg={subTitleSize}
            // xs={smallSubTitleSize}
          >
            <Typography variant="h5" className={classes.circleHeader}>
              {subTitle}
            </Typography>
          </Grid>
        </Grid>
        {teams}
      </Grid>
      {rows}
    </>
  );
};

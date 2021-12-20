import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useSelector, shallowEqual } from "react-redux";
import Image from "next/image";
import { Stadium, Calender, Clock, Attendance } from "public";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  stadium: {
    lineHeight: "22px",
    whiteSpace: "nowrap",
    color: " #022A54",
    fontWeight: 500,
    "@media (max-width: 600px)": {
      lineHeight: "7px",
      whiteSpace: "normal",

      fontSize: 7,
    },
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "1.6em",
    "@media (max-width: 1440px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.7rem",
    },
    "@media (max-width: 752px)": {
      // fontSize: '0.5rem',
    },
  },
  date: {
    // letterSpacing: 1.7,
    lineHeight: "22px",
    fontWeight: 500,
    color: " #022A54",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "1.6em",
    whiteSpace: "nowrap",
    // "@media (max-width: 1440px)": {
    //   fontSize: "1.2rem",
    // },
    // "@media (max-width: 1280px)": {
    //   fontSize: "1.1rem",
    // },
    "@media (max-width: 960px)": {
      fontSize: "0.7rem",
    },
    "@media (max-width: 600px)": {
      // fontSize: "0.5rem",
      lineHeight: "12px",
    },
  },

  teamsContainer: {
    textAlign: "center",
  },
  score: {
    fontSize: "3.3em",
    "@media (max-width: 1450px)": {
      fontSize: "5em",
    },
    fontWeight: 700,
    lineHeight: "30px",
    // textAlign: "center",
    color: " #022A54",

    "@media (max-width: 600px)": {
      lineHeight: "12px",
      textAlign: "left",
      fontSize: 16,
    },
  },
  penScore: {
    fontSize: 12,
    fontWeight: 400,
    // textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: 7,
      lineHeight: "7px",
    },
  },
  stadiumGrid: {
    marginLeft: "1.8em",
  },
  detailsGrid: {
    display: "flex",
    // alignSelf: "center",
    marginTop: "-50px",
    padding: "13px 16px 13px 21px",
    borderRadius: "100px",
    background: "#fff",
    border: "2.5px solid #F6F7FA",
    "& >div:not(:first-of-type)": {
      marginLeft: "27px",
    },
  },
  dash: {
    margin: "0 22px",
    "@media (max-width: 600px)": {
      margin: "0 12px",
    },
  },
  localScore: {
    textAlign: "left",
    // "@media (max-width: 600px)": {
    //   textAlign: "right",
    // },
  },
  visitorScore: {
    textAlign: "right",
    // "@media (max-width: 600px)": {
    //   textAlign: "left",
    // },
  },
  penGrid: {
    "@media (max-width: 600px)": {
      marginTop: "2px",
    },
  },
  matchDetailsImg: {
    objectFit: "fill",
  },
  matchDetailsImgContainer: {
    marginRight: 5,
    display: "flex",
  },
  matchDetailsLeagueText: {
    fontSize: "1.5em",
    lineHeight: "10px",
    fontWeight: 500,
    width: 120,
    color: "#022A54",
    "@media (max-width: 960px)": {
      fontSize: "0.8rem",
    },
  },
  matchDetailsLeagueCountryContainer: {
    display: "flex",
    padding: "6px 14px",
    marginTop: "16px",
    maxWidth: 190,
    background: "#F6F7FA",
    borderRadius: "42px",
    "@media (max-width: 960px)": {
      marginTop: "0",
      padding: "2px 8px",
    },
    "@media (max-width: 600px)": {
      padding: "0px 6px",
      borderRadius: 6,
      minWidth: 0,
    },
  },
  scoreGrid: {
    marginTop: 24,
  },
  attendance: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: "22px",
    color: "rgba(2, 42, 84, 1)",
    marginLeft: 11,
  },
}));

export const StadiumDateScore = ({ league }) => {
  const {
    fixtureVenue,
    fixtureScores,
    fixtureDate,
    fixtureStatus,
    fixtureAttendance,
  } = useSelector(({ h2h }) => {
    const {
      fixture: {
        venue: fixtureVenue,
        scores: fixtureScores,

        time: {
          startingAt: { date: fixtureDate },
          status: fixtureStatus,
        },
        attendance: fixtureAttendance,
      },
    } = h2h;
    return {
      fixtureVenue,
      fixtureScores,
      fixtureDate,
      fixtureStatus,
      fixtureAttendance,
    };
  }, shallowEqual);
  const classes = useStyles();
  return (
    <Grid item container direction="column" alignItems="center">
      <Grid
        // direction="column"
        alignItems="center"
        justifyContent="space-between"
        className={classes.detailsGrid}
      >
        <Grid item container alignItems="center" wrap="nowrap">
          <Grid
            item
            sx={{ marginLeft: "10px" }}
            container
            justifyContent="center"
          >
            <Calender />
          </Grid>
          <Grid item className={classes.stadiumGrid}>
            <Typography variant="h5" className={classes.date}>
              {/* {date} */}
              {new Intl.DateTimeFormat("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                // timeStyle: "short",
              }).format(new Date(fixtureDate))}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.teamsContainer}
          container
          alignItems="center"
          wrap="nowrap"
        >
          {fixtureVenue?.name ? (
            <>
              <Grid item container justifyContent="center">
                <Stadium />
              </Grid>
              <Grid item className={classes.stadiumGrid}>
                <Typography variant="caption" className={classes.stadium}>
                  {fixtureVenue?.name
                    ? `${
                        fixtureVenue?.name?.length > 20
                          ? `${fixtureVenue?.name.substring(0, 17)}...`
                          : fixtureVenue?.name
                      }`
                    : ""}
                </Typography>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item container alignItems="center" wrap="nowrap">
          <Attendance />
          <Typography className={classes.attendance}>
            {fixtureAttendance}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
        className={classes.matchDetailsLeagueCountryContainer}
      >
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item className="matchDetailsImgContainer">
            <Image
              src={league.logoPath}
              height={18}
              width={18}
              layout="fixed"
              className="matchDetailsImg"
              alt={league?.name}
            />
          </Grid>
          <Grid
            item
            container
            sx={{
              marginLeft: "6px",
            }}
          >
            <Typography
              variant="caption"
              className={classes.matchDetailsLeagueText}
              noWrap
            >
              {league.name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container alignItems="center" wrap="nowrap">
        {["FT", "LIVE", "HT", "AET", "FT_PEN"].includes(fixtureStatus) ? (
          <>
            {["FT", "LIVE", "HT", "AET"].includes(fixtureStatus) ? (
              <Grid
                item
                container
                justifyContent="center"
                alignItems={
                  fixtureScores?.localTeamPenScore &&
                  fixtureScores.visitorTeamPenScore
                    ? "flex-start"
                    : "center"
                }
                wrap="nowrap"
                className={classes.scoreGrid}
                // sm={6}
              >
                <Grid item>
                  <Grid container direction="column">
                    <Grid item className={classes.localTeamScore}>
                      <Typography
                        variant="h5"
                        className={`${classes.score} ${classes.localScore}`}
                      >
                        {fixtureScores?.localTeamScore}
                      </Typography>
                    </Grid>

                    {fixtureScores?.localTeamPenScore ? (
                      <Grid
                        item
                        className={classes.penGrid}
                        style={{ marginLeft: 20 }}
                      >
                        <Typography
                          variant="h5"
                          className={`${classes.penScore} ${classes.localScore}`}
                        >
                          ({fixtureScores.localTeamPenScore})
                        </Typography>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </Grid>
                </Grid>
                <Grid item className={classes.dash}>
                  <Typography variant="h5" className={classes.score}>
                    -
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="h5"
                        className={`${classes.score} ${classes.visitorScore}`}
                      >
                        {fixtureScores?.visitorTeamScore}
                      </Typography>
                    </Grid>
                    {fixtureScores?.visitorTeamPenScore ? (
                      <Grid
                        item
                        className={classes.penGrid}
                        style={{ marginRight: 20 }}
                      >
                        <Typography
                          variant="h5"
                          className={`${classes.penScore} ${classes.visitorScore}`}
                        >
                          ({fixtureScores.visitorTeamPenScore})
                        </Typography>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <></>
            )}
          </>
        ) : (
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            className={classes.scoreGrid}
            wrap="nowrap"
          >
            <Grid item sx={{ display: "flex", justifyContent: "center" }}>
              <Clock />
            </Grid>
            <Grid item className={classes.stadiumGrid}>
              <Typography variant="h5" className={classes.date}>
                {/* {date} */}
                {new Intl.DateTimeFormat("en-GB", {
                  // day: "numeric",
                  // month: "long",
                  // year: "numeric",
                  timeStyle: "short",
                }).format(new Date(fixtureDate))}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

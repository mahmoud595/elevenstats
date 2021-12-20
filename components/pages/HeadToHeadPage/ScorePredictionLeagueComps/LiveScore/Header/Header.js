import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";

const useStyles = makeStyles(({ palette }) => ({
  imageContainer: {
    marginRight: 8,
    position: "relative",
    objectFit: "fill",
    width: 27,
    height: 35,
    "@media (max-width: 1450px)": {
      width: 17,
      height: 17,
    },
  },
  teamContainer: {
    backgroundColor: "#F2F4F6",
    padding: "8px 5px",
    "@media (max-width: 1450px)": {
      padding: 5,
    },
    borderRadius: 50,
    "@media (max-width: 960px)": {
      padding: "4px 0",
    },
  },
  team: {
    textTransform: "uppercase",
    textAlign: "center",
    color: "#022A54",
    lineHeight: "10px",
    fontWeight: 600,

    "@media (max-width: 1600px)": {
      fontSize: "1.5em",
    },
    "@media (max-width: 870px)": {
      fontSize: ".8rem",
    },
  },
  score: {
    fontSize: 17,
    fontWeight: 600,
    lineHeight: "14px",
    color: "#022A54",

    "@media (max-width: 870px)": {
      fontSize: 15,
    },
  },
  image: {
    objectFit: "scale-down",
    marginRight: "9px",
  },
}));

export const Header = ({ live }) => {
  const classes = useStyles();

  const {
    localTeamStats: {
      team: { name: localTeamName, logoPath: localTeamLogo },
    },
    visitorTeamStats: {
      team: { name: visitorTeamName, logoPath: visitorTeamLogo },
    },
    fixture: { scores },
  } = useSelector((state) => state.h2h);

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
    >
      <Grid
        container
        item
        xs={5}
        wrap="nowrap"
        alignItems="center"
        justifyContent="center"
        className={classes.teamContainer}
      >
        <Grid item>
          <Typography variant="h5" className={classes.team}>
            {/* {localTeamName} */}
            {localTeamName.length > 11
              ? `${localTeamName.substring(0, 11)}...`
              : localTeamName}
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.imageContainer}
          style={{ margin: "0px 0px 0px 8px" }}
        >
          <Image
            src={localTeamLogo}
            // width={30}
            // width={25}
            // height={35}
            // height={25}
            className={classes.image}
            alt={localTeamName}
            layout="fill"
          />
        </Grid>
      </Grid>
      {live && (
        <Grid item>
          <Typography variant="h5" className={classes.score}>
            {`${scores?.localTeamScore} - ${scores?.visitorTeamScore}`}
          </Typography>
        </Grid>
      )}

      <Grid
        container
        item
        xs={5}
        wrap="nowrap"
        alignItems="center"
        justifyContent="center"
        className={classes.teamContainer}
      >
        <Grid item className={classes.imageContainer}>
          <Image
            src={visitorTeamLogo}
            layout="fill"
            className={classes.image}
            alt={visitorTeamName}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.team}>
            {/* {visitorTeamName} */}

            {visitorTeamName.length > 11
              ? `${visitorTeamName.substring(0, 11)}...`
              : visitorTeamName}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

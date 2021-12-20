import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const TeamComp = styled(Grid)(({ theme }) => ({
  // padding: "0 .5em",
  height: "100%",
  "@media (max-width: 600px)": {
    marginTop: 10,
    justifyContent: "flex-start",
  },

  "& .teamCompText": {
    fontWeight: 700,
    textAlign: "center",
    lineHeight: "18px",
    textTransform: "uppercase",
    letterSpacing: 1.25,
    // '@media (max-width: 640px)': {

    // },
    // "@media (max-width: 600px)": {
    //   lineHeight: "8px",
    //   whiteSpace: "nowrap",
    //   fontSize: "0.8rem",
    //   letterSpacing: 0,
    // },
  },
  "& .teamCompImgContainer": {
    width: 124,
    height: 124,
    // background:
    //   "linear-gradient(94.1deg, rgba(255, 255, 255, 0) 13.17%, rgba(255, 255, 255, 0.22) 42.44%, rgba(255, 255, 255, 0) 87.5%), rgba(255, 255, 255, 0.2)",
    // "@media (max-width: 1440px)": {
    //   width: 93,
    //   height: 100,
    // },
    "@media (min-width: 1660px)": {
      width: 150,
      height: 150,
    },
    "@media (max-width: 1220px)": {
      width: 100,
      height: 100,
    },

    // "@media (max-width: 780px)": {
    //   width: 68,
    //   height: 80,
    // },
    // "@media (max-width: 698px)": {
    //   width: 50,
    //   height: 70,
    // },
    "@media (max-width: 600px)": {
      width: 72,
      height: 72,
      borderRadius: "10px",
    },
    position: "relative",
  },
  "& .teamCompImg": {
    minWidth: "77% !important",
    minHeight: "77% !important",

    "@media (max-width: 640px)": {
      minWidth: "65% !important",
      minHeight: "65% !important",
    },

    // objectFit: 'fill',
    objectFit: "cover",
  },
  "& .teamCompTeamNameContainer": {
    display: "flex",
    alignItems: "center",
  },
  "& .teamCompTitleGrid": {
    marginTop: "32px",

    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  "& .teamCompTeamNameContainer": {
    marginBottom: "-5px",
    "@media (max-width: 600px)": {
      marginTop: 10,
    },
  },
}));

export const Team = ({ small, title, teamName, teamLogo }) => {
  console.log(title);
  return (
    <TeamComp
      container
      direction="column"
      // justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        item
        className="teamCompTitleGrid"
        container
        wrap="nowrap"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          sx={{
            width: "6px",
            height: "11px",
            borderRadius: "3px",
            backgroundColor: title === "home" ? "#3B8BFF" : "#A64EFF",
          }}
        ></Grid>
        <Typography
          variant="h2"
          className="teamCompText"
          sx={{
            color: small
              ? palette.primary.main
              : title === "home"
              ? "#3B8BFF"
              : "#A64EFF",
            marginLeft: "6px",
          }}
        >
          {title}
        </Typography>
      </Grid>
      {/* {!nationalTeam ? ( */}
      <Grid
        item
        container
        justifyContent="center"
        className="teamCompImgContainer"
      >
        <Image
          src={teamLogo}
          // width={small ? 120 : 103}
          // height={small ? 100 : 185}
          layout="fill"
          className="teamCompImg"
          // priority
          loading="eager"
          alt={teamName}
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
      </Grid>
      {/* ) : (
       <div
          className={`${styles.fflag} ${styles[`fflag-${iso}`]} ${
            styles["ff-lg"]
          } ${styles["ff-wave"]}`}
        ></div>
      )} */}
      <Grid item className="teamCompTeamNameContainer">
        <Typography
          variant="h2"
          className="teamCompText"
          sx={{
            lineHeight: "10px",
            fontSize: "2em",
            color: "#677F98",
            textTransform: "uppercase",
            letterSpacing: "2.31px",
          }}
        >
          {teamName}
        </Typography>
      </Grid>
    </TeamComp>
  );
};

import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

import { WinLoseComp } from "components/pages/HeadToHeadPage/FirstComp/SideComp/WinLoseComp/WinLoseComp";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: "100%",
    padding: ({ right }) => (right ? "0 4rem 0 0" : "0 0 0 4rem"),
    "@media (max-width:1366px)": {
      padding: ({ right }) => (right ? "0 2rem 0 0" : "0 0 0 2rem"),
    },

    "@media (max-width:640px)": {
      padding: ({ right }) => (right ? "0 1em 0 0" : "0 0 0 1em"),
      position: "absolute",
      right: ({ right }) => (right ? 0 : "none"),
      left: ({ right }) => (right ? "none" : 0),
    },
  },

  avgGrid: {
    margin: ({ right }) => (right ? "0 0.5rem 0 0" : "0 0 0 0.5rem"),
    // backgroundColor: ({ right }) => (right ? "#FB5266" : "#1BD47B"),
    width: "7.1em",
    height: "4.1em",
    "@media (max-width:640px)": {
      // width: '10.1em',
      // height: '6.1em',
      width: 40,
      height: 24,
    },
    borderRadius: 50,
    alignSelf: "center",
  },
  avgTxt: {
    // backgroundColor: ({ right }) => (right ? "#D6435C" : "#1BD47B"),
    // width: "7.1rem",
    // height: "4.3rem",
    fontSize: "1.5rem",

    "@media (max-width:1366px)": {
      fontSize: "1.5rem",
    },
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    borderRadius: 50,
  },
  image: {
    objectFit: "scale-down",
    // objectFit: 'fill',
  },
}));
export const SideComp = ({
  right,
  form,
  PPG,
  logo,
  teamName,
  backgroundColor,
}) => {
  const classes = useStyles({ right });
  // console.log(form, PPG);
  return (
    <Grid
      item
      container
      xs={3}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item container justifyContent="center">
        <Image
          src={logo}
          width={77}
          height={103}
          className={classes.image}
          alt={teamName}
        />
      </Grid>

      <Grid
        item
        className={classes.avgGrid}
        container
        justifyContent="center"
        alignItems="center"
        style={{ background: backgroundColor }}
        // justifyContent={right ? "flex-end" : "flex-start"}
      >
        <Typography className={classes.avgTxt}>{PPG}</Typography>
      </Grid>

      <Grid item container justifyContent="space-between" alignItems="center">
        <WinLoseComp
          size={26}
          fontColor="#FFF"
          fontWeight="700"
          fontSize="1.3rem"
          form={form}
        />
      </Grid>
    </Grid>
  );
};

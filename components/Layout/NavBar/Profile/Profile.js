import { Grid, Typography, Hidden } from "@mui/material";
import Image from "next/image";
import makeStyles from "@mui/styles/makeStyles";

import { DropDownArrow } from "public";
import { Btn, DropDownSelect } from "components";
const myOptions = [
  { label: "profile" },
  { label: "privacy" },
  { label: "upgrade" },
  { label: "help" },
  { label: "settings" },
  { label: "sign out" },
];
const useStyles = makeStyles((theme) => ({
  userName: {
    color: "#6B7281",
    textAlign: "right",
    "@media only screen and (min-width:960px) and (max-width:1020px)": {
      fontSize: "0.9rem",
    },
    marginRight: "0.3em",
    cursor: "pointer",
  },
  profile: {},
  image: {
    borderRadius: "50%",
  },
  arrowGrid: {
    textAlign: "right",
    width: "1.1em",
    height: "2.5em",
    cursor: "pointer",

    "& svg": {
      width: "100%",
      height: "100%",
      stroke: "#3654DC",
    },
    "@media only screen and (max-width:960px)": {
      width: "2em",
      height: "4em",
    },
  },
  imageContainer: {
    "@media only screen and (max-width:1600px)": {
      width: "30px",
      height: "30px",
    },
    width: "40px",
    height: "40px",
    position: "relative",
  },
}));

const userName = "Jonathan B.";
const Profile = () => {
  const classes = useStyles();

  return (
    <>
      <DropDownSelect
        options={myOptions}
        search={false}
        msg="Hello Mahmoud"
        target={
          <Grid
            item
            container
            justifyContent="space-around"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item className={classes.imageContainer}>
              <Image
                src="/profileImage.jpg"
                // width={30}
                // height={30}
                className={classes.image}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                layout="fill"
              />
            </Grid>
            <Hidden smDown>
              <Grid item>
                <Typography variant="h5" className={classes.userName}>
                  {userName}
                </Typography>
              </Grid>
              <Grid item className={classes.arrowGrid}>
                <DropDownArrow />
              </Grid>
            </Hidden>
          </Grid>
        }
      />
    </>
  );
};

export default Profile;

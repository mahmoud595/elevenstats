import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Divider, Button } from "@mui/material";

import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Btn from "components/Layout/Btn/Btn";

// const myOptions = [
//   { value: "1", label: "Item 1" },
//   { value: "2", label: "Item 2" },
//   { value: "3", label: "Item 3" },
//   { value: "4", label: "Item 4" },
//   { value: "5", label: "Item 5" },
//   { value: "6", label: "Item 6" },
//   { value: "7", label: "Item 7" },
// ];

const useStyles = makeStyles((theme) => ({
  stats: {
    width: "4em",
    height: "2.7em",
    marginTop: "0.em",
    "@media only screen and (max-width:960px)": {
      height: "8em",
      width: "5em",
    },
    "@media only screen and (max-width:785px)": {
      width: "4.2em",
    },
  },
  navText: {
    color: ({ link, pathName }) =>
      link === pathName ? "#022A54" : "rgba(2, 42, 84, 0.5)",
    fontWeight: "400",

    "@media only screen and (min-width:960px) and (max-width:1020px)": {
      fontSize: "1.1rem",
    },
  },
  item: {
    // borderBottom: ({ link, pathName }) =>
    //   link === pathName && "2px solid #54BBB7",
    // "&:hover": {
    //   cursor: "pointer",
    // },
    // "&:hover  $navText ": {
    //   color: "#54BBB7",
    //   // borderBottom: "2px solid #54BBB7",
    // },
    cursor: "pointer",
    marginLeft: "1rem",
  },
}));

export const NavItem = ({ text, link }) => {
  const pathName = useRouter().pathname;
  const classes = useStyles({ link, pathName });

  return (
    <Grid
      container
      item
      alignItems="center"
      className={classes.item}
      wrap="nowrap"
      // direction="column"
    >
      <Btn
        backgroundColor={link === pathName && "#F6F7FA"}
        padding={link === pathName && "1.5rem 6rem"}
        borderRadius={link === pathName && "100px"}
        lowSizePadding={link === pathName && "1.5rem 4rem"}
      >
        <Link href={link}>
          <Typography variant="h4" className={classes.navText}>
            {text}
          </Typography>
        </Link>
      </Btn>
    </Grid>
  );
};

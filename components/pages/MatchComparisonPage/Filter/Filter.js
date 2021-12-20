import { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Popper, Grid, Button } from "@mui/material";
import Image from "next/image";

import FilterCard from "./FilterCard/FilterCard";
import { Btn } from "../../..";
import { ProfileArrow, Reset } from "../../../../public";

const useStyles = makeStyles((theme) => ({
  po: {
    //  border: 'none',
    //  'div& :first-of-type': {
    "& > div": {
      border: "none",
      boxShadow: "0px 3px 26px rgba(0, 0, 0, .16)",
    },
  },

  icon: {
    width: "0.7em",
    height: "0.7em",
    "@media and (max-width:960px)": {
      width: "5em",
      height: "4em",
    },
  },
}));

export default function Filter() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Grid
      xs={4}
      item
      container
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={4}>
        {/* <Button
          aria-describedby={id}
          onClick={handleClick}
          style={{ backgroundColor: "#CFE6A5" }}
          fullWidth
        >
          filter
        </Button> */}
        <Btn
          ariaDescribedBy={id}
          onClick={handleClick}
          backgroundColor="#CFE6A5"
          fullWidth={true}
          text="filter"
          margin="0"
          textTransform="uppercase"
          fontSize="1em"
          padding="0.6em 1em"
          lowSizePadding="1em 2em"
        >
          <ProfileArrow className={classes.icon} />
        </Btn>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          onMouseLeave={() => setAnchorEl(false)}
          transition
          placement="bottom-start"
          className={classes.po}
          modifiers={{
            flip: {
              enabled: false,
            },
            preventOverflow: {
              enabled: false,
              boundariesElement: "scrollParent",
            },
            arrow: {
              enabled: true,
              //   element: arrowRef,
            },
          }}
        >
          {/* <div className={classes.paper}>The content of the Popper.</div> */}
          <FilterCard />
        </Popper>
      </Grid>
      <Grid item xs={4}>
        <Btn
          backgroundColor="#F5F5F5"
          fullWidth={true}
          text="reset filters"
          textTransform="uppercase"
          fontSize="1em"
          margin="0"
          padding="0.6em 1em"
          lowSizePadding="1em 2em"
        >
          <Reset className={classes.icon} />
        </Btn>
      </Grid>
    </Grid>
  );
}

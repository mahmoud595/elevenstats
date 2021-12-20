import React, { useState, useEffect } from "react";
import { Grid, Backdrop } from "@mui/material";
import dynamic from "next/dynamic";

const DatePicker = dynamic(import("react-datepicker"));
import makeStyles from '@mui/styles/makeStyles';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { DatePickerIcon } from "public";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles(({ palette }) => ({
  pickerGrid: {
    padding: "13px 2.1em",
    borderRadius: 12,
    backgroundColor: "#F6F7FA",
    "@media (max-width:840px)": {
      padding: "9px 1.7em",
    },
    "@media (max-width: 640px)": {
      padding: "7px",
      borderRadius: "6px",
      "& > svg": {
        width: "10px",
        height: "10px",
      },
    },
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
    background: "rgba(0, 0, 0, 0.1)",
  },
  root: {
    "& .react-datepicker": {
      width: "54.5em",
      // height: "42.6em",
      padding: "4.3em",
      fontSize: "0.6rem",
      borderRadius: "12px",
      border: "none",
    },
    "& .react-datepicker-popper[data-placement^='bottom']": {
      borderBottomColor: "#fff",
    },
    "& .react-datepicker__header": {
      backgroundColor: "#fff",
      borderBottom: "unset",
    },

    "& .react-datepicker__day-name": {
      color: "#7A8FA5",
      lineHeight: "27px",
      fontSize: "2.5em",
      width: "auto",
    },
    "& .react-datepicker__day": {
      fontSize: "2.3em",
      lineHeight: "27px",
      color: "#A1B5C9",
      width: "10%",
    },
    "& .react-datepicker__day-names": {
      justifyContent: "space-around",
      display: "flex",
      marginTop: "24px",
    },
    "& .react-datepicker__week ": {
      display: "flex",
      flexBasis: "10%",
      marginTop: "12px",
      justifyContent: "space-around",
    },

    "& .react-datepicker__month-container ": {
      float: "unset",
    },
    "& .react-datepicker__navigation--previous": {
      top: "2.5em",
      left: "2.3em",
      backgroundColor: "#F6F7FA",
      padding: "14px 18px 12px 14px",
      borderRadius: "20px",
    },
    "& .react-datepicker__navigation--next": {
      top: "2.5em",
      right: "2.3em",
      backgroundColor: "#F6F7FA",
      padding: "14px 14px 12px  18px",
      borderRadius: "20px",
    },
    "& .react-datepicker__current-month": {
      lineHeight: "27px",
      fontSize: "2.6em",
      color: "#022A54",
    },
    "& .react-datepicker__day--selected , & .react-datepicker__day--keyboard-selected":
      {
        color: "#246BFD",
        backgroundColor: "#DDE6FA",
        borderRadius: "50%",
      },
    "& .react-datepicker__month": {
      margin: "0",
    },
    "& .react-datepicker__navigation-icon--previous::before , & .react-datepicker__navigation-icon--next::before":
      {
        borderColor: "#A1B5C9",
      },
    "& .react-datepicker-popper": {
      zIndex: 2,
    },
  },
}));
const clientDate = new Date().toISOString().split("T")[0];

export const DatePickerComp = ({ fixtures, setDay }) => {
  const classes = useStyles({ fixtures });
  const [open, setOpen] = useState(false);
  const { timeZone, country, savedDate } = useSelector(({ home }) => {
    const { timeZone, country, date: savedDate } = home;
    return { timeZone, country, savedDate };
  });
  const [startDate, setStartDate] = useState(null);
  useEffect(() => {
    setStartDate(new Date(savedDate ?? clientDate));
  }, [savedDate, clientDate]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const router = useRouter();
  const clickHandler = (onClick) => {
    onClick();
    handleToggle();
  };

  const changeHandler = (date) => {
    setStartDate(date);

    date = new Date(date);

    router.push(`/?date=${setDay(0, date)}`);
    handleClose();
  };

  const CustomPicker = React.forwardRef(({ onClick }, ref) => (
    <Grid
      item
      container
      className={classes.pickerGrid}
      onClick={() => clickHandler(onClick)}
    >
      <DatePickerIcon />
    </Grid>
  ));
  return (
    <Grid item className={classes.root}>
      <DatePicker
        selected={startDate}
        onChange={(date) => changeHandler(date)}
        customInput={<CustomPicker />}
        popperPlacement="bottom-start"
        dateFormatCalendar="MMMM"
      />
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={handleClose}
      />
    </Grid>
  );
};

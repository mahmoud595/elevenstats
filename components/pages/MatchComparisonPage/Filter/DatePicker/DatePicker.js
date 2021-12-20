import "date-fns";
import React from "react";
import Grid from "@mui/material/Grid";
import DateFnsUtils from "@date-io/date-fns";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: ({ fixtures }) => fixtures && "0.2em 1em",
    backgroundColor: ({ fixtures }) => fixtures && "#fff",
    borderRadius: ({ fixtures }) => fixtures && "6px",

    "& .MuiInput-underline:before": {
      borderBottom: ({ fixtures }) => fixtures && "1px solid #fff",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: ({ fixtures }) => fixtures && "1px solid #fff",
    },

    "& .MuiInputBase-input": {
      color: ({ fixtures }) => fixtures && "#6B7281",
      textAlign: ({ fixtures }) => fixtures && "center",
    },
  },
  "&.MuiInput-formControl": {
    marginTop: ({ fixtures }) => fixtures && "10px",
  },
  label: {
    color: ({ fixtures }) => fixtures && "#6B7281",
  },
  icon: {
    color: ({ fixtures }) => fixtures && "#6B7281",
  },
}));
export default function DatePicker({ fixtures }) {
  const classes = useStyles({ fixtures });

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));
  //   new Date('2019-08-18T21:11:54')();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <></>
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //   <Grid container justifyContent="space-around" className={classes.root}>
    //     <KeyboardDatePicker
    //       disableToolbar
    //       variant="inline"
    //       format="MM/dd/yyyy"
    //       margin={!fixtures ? "normal" : "none"}
    //       id="date-picker-inline"
    //       label={"Select Day"}
    //       value={selectedDate}
    //       onChange={handleDateChange}
    //       KeyboardButtonProps={{
    //         "aria-label": "change date",
    //         classes: {
    //           root: classes.icon,
    //         },
    //       }}
    //       InputLabelProps={{
    //         classes: {
    //           root: classes.label,
    //         },
    //       }}
    //     />
    //   </Grid>
    // </MuiPickersUtilsProvider>
  );
}

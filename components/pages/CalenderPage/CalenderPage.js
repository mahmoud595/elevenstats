import React from "react";
import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

// import FullCalendar from "@fullcalendar/react";
// import interactionPlugin from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

// import {} from "./Calender/Calender"
import { Wrapper } from "../../Layout/Wrapper/Wrapper";
import { CalenderHeader } from "./CalenderHeader/CalenderHeader";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    flex: 1,

    "& > div": {
      marginTop: 30,
    },
  },
  calendarContainer: {
    "& .fc": {
      width: "100%",
      backgroundColor: "white",
      color: "black",
    },
  },
}));

export const CalenderPage = () => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" className={classes.root}>
      {/* <Wrapper
        headerColor="#43093C"
        textColor="#FFFFFF"
        backgroundColor="#43093C"
        id="Calender"
        style={{ flex: 1 }}
      >
        <Grid
          item
          container
          direction="column"
          style={{ flex: 1, padding: '3em' }}
        >
          <CalenderHeader />
          <Grid
            item
            container
            style={{ flex: 1 }}
            className={classes.calendarContainer}
          >
            <FullCalendar
              plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
              initialView="dayGridMonth"
              nowIndicator={true}
              editable={true}
              clas
              initialEvents={[
                { title: 'nice event', start: new Date() },
                { title: 'nice event 2', start: new Date() },
                { title: 'nice event3', start: new Date() },
                { title: 'nice event4', start: new Date() },
              ]}
            />
          </Grid>
        </Grid>
      </Wrapper> */}
    </Grid>
  );
};

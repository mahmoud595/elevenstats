import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Hidden } from "@mui/material";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { format, utcToZonedTime } from "date-fns-tz";

import Btn from "components/Layout/Btn/Btn";

const DynamicDatePickerComp = dynamic(
  () => import("./DatePicker/DatePicker").then((mod) => mod.DatePickerComp),
  { ssr: false }
);

const DatesContainer = styled(Grid)(() => ({
  "& .leftDatesContainer": {
    position: "relative",
  },

  "& .dayContainer": {
    // border: '0.5px solid #A1B5C9',
    // padding: '2em',
    position: "relative",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    margin: "0em",
    maxWidth: 28,
    maxHeight: 28,

    "@media (min-width: 1700px)": {
      margin: "0 2em",
    },
    "@media (max-width:840px)": {
      width: "4.5em",
      height: "4.5em",
    },
    "@media (max-width: 600px)": {
      width: "60px",
      height: "24px",
      maxWidth: 60,
      maxHeight: 45,
      borderRadius: "30px",
    },
  },
  "& .day": {
    fontSize: 12,
    fontWeight: 600,
    color: "#022A54",
    lineHeight: "19px",
    textTransform: "uppercase",
    "@media (max-width:1280px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.4em",
      // lineHeight: "1px",
    },
    "@media (max-width: 640px)": {
      fontSize: 8,
      lineHeight: "6px",
    },
  },
  "& .monthContainer": {
    display: "flex",
    alignItems: "center",
  },
  "& .secondMonthContainer": {
    paddingLeft: "3em",
    borderLeft: "1px solid #D0DAE4",
    height: "4.3em",
  },
  "& .datePicker": {
    marginLeft: "5.1em",
    cursor: "pointer",
    "@media (max-width:840px)": {
      marginLeft: "3.1em",
    },
    "@media (max-width: 640px)": {
      marginLeft: "0px",
    },
  },
  "& .mobileDates": {
    width: "100%",
  },
  "& .link": {
    color: "inherit",
    textDecoration: "none",
  },
  "& .desktopDates": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    willChange: "transform",
    transform: "translateZ(0)",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  "& .dayName": {
    fontSize: "10px",
    fontWeight: 500,
  },
  "& .dot::after": {
    content: "''",
    width: "4px",
    height: "4px",
    background: "rgba(36, 107, 253, 1)",
    position: "absolute",
    bottom: -9,
    borderRadius: "50%",
  },
}));

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const clientDate = new Date().toISOString().split("T")[0];
export const DateComp = () => {
  // const classes = useStyles();
  const [active, setActive] = useState(0);
  let { timeZone, country, savedDate } = useSelector(({ home }) => {
    const { timeZone, country, date: savedDate } = home;
    return { timeZone, country, savedDate };
  });
  // const sm = useMediaQuery("(max-width:640px)");
  // const router = useRouter();

  // console.log(router.pathname);
  const getDay = (num) => {
    let date = new Date(savedDate ?? clientDate);
    date.setDate(date.getDate() + num);

    return [date.getDate(), date.getDay()];
  };

  const getMonth = (num) => {
    let date = new Date(savedDate ?? clientDate);
    date.setDate(date.getDate() + num);
    return date.getMonth();
  };
  const myDate = utcToZonedTime(
    new Date((savedDate ??= clientDate)).toISOString(),
    timeZone
  );

  let currentDate = format(myDate, "yyyy-MM-dd", {
    timeZone: (timeZone ??= Intl.DateTimeFormat().resolvedOptions().timeZone),
  });
  const dates = [
    active - 7,
    active - 6,
    active - 5,
    active - 4,
    active - 3,
    active - 2,
    active - 1,
    active,
    active + 1,
    active + 2,
    active + 3,
    active + 4,
    active + 5,
    active + 6,
  ];

  const mobileDates = [active - 1, active, active + 1, active + 2];

  const setDay = (num, passedDate = savedDate ?? clientDate) => {
    let date = new Date(passedDate);
    date.setDate(date.getDate() + num);
    date = new Date(date).toISOString();
    return date.split("T")[0];
  };

  return (
    <DatesContainer
      item
      container
      wrap="nowrap"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        item
        wrap="nowrap"
        container
        justifyContent="space-between"
        alignItems="center"
        className="leftDatesContainer"
        // style={{ position: 'relative' }}
      >
        <Hidden smDown implementation="css">
          <Grid item className="monthContainer">
            <Typography className="day">
              {months[getMonth(dates[0])]}
            </Typography>
          </Grid>
        </Hidden>

        <Hidden smUp implementation="css" className="mobileDates">
          <Grid item container justifyContent="space-between">
            {mobileDates.map((num, i) => (
              <a key={num} href={`/?date=${setDay(num)}`} className="link">
                <Grid
                  item
                  className="dayContainer"
                  container
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    backgroundColor:
                      getDay(num)[0] === getDay(active)
                        ? "rgba(36, 107, 253, 0.08)"
                        : "transparent",
                    border:
                      getDay(num)[0] === getDay(active)
                        ? "none"
                        : "0.5px solid #EDF0F5",
                  }}
                >
                  <Typography
                    className="day"
                    style={{
                      color:
                        getDay(num)[0] === getDay(active)
                          ? "rgba(36, 107, 253, 1)"
                          : "rgba(2, 42, 84, 0.6)",
                    }}
                  >
                    {setDay(num) === currentDate
                      ? "Today"
                      : setDay(num + 1) === currentDate
                      ? "Yesterday"
                      : setDay(num - 1) === currentDate
                      ? "Tomorrow"
                      : `${months[getMonth(mobileDates[i])]} ${getDay(num)}`}
                  </Typography>
                </Grid>
              </a>
            ))}
            <Grid className="linearGradient"></Grid>
          </Grid>
        </Hidden>
        <Hidden smDown implementation="css" className="desktopDates">
          <>
            {dates.map((num, i) => (
              <React.Fragment key={i}>
                {getDay(dates[i - 1])[0] > getDay(dates[i])[0] && (
                  <Grid
                    item
                    className="monthContainer secondMonthContainer"
                    key={i}
                  >
                    <Typography className="day">
                      {months[getMonth(dates[i])]}
                    </Typography>
                  </Grid>
                )}
                <a href={`/?date=${setDay(num)}`} key={num} className="link">
                  <Typography
                    className="dayName"
                    textAlign="center"
                    marginBottom="3px"
                    style={{
                      color:
                        getDay(num)[0] === getDay(active)[0]
                          ? "rgba(36, 107, 253, 1)"
                          : "rgba(2, 42, 84, 0.6)",
                    }}
                  >
                    {days[getDay(num)[1]]}
                  </Typography>
                  <Grid
                    item
                    className={
                      getDay(num)[0] === getDay(active)[0]
                        ? "dayContainer dot"
                        : "dayContainer"
                    }
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      backgroundColor:
                        getDay(num)[0] === getDay(active)
                          ? "rgba(36, 107, 253, 0.08)"
                          : "transparent",
                      border:
                        getDay(num)[0] === getDay(active)
                          ? "none"
                          : "0.5px solid #EDF0F5",
                    }}
                  >
                    <Btn
                      width="100%"
                      height="100%"
                      borderRadius="50%"
                      // onClick={() => changeDay(num)}
                    >
                      <Typography
                        className="day"
                        style={{
                          color:
                            getDay(num)[0] === getDay(active)[0]
                              ? "rgba(36, 107, 253, 1)"
                              : "rgba(2, 42, 84, 0.6)",
                        }}
                      >
                        {getDay(num)[0]}
                      </Typography>
                    </Btn>
                  </Grid>
                </a>
              </React.Fragment>
            ))}
          </>
        </Hidden>
      </Grid>
      <Grid item className="datePicker">
        <DynamicDatePickerComp setDay={setDay} />
        {/* <DatePickerComp setDay={setDay} /> */}
      </Grid>
    </DatesContainer>
  );
};

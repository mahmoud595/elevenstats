// import { Grid, Button, Typography } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
// import { useState } from "react";
// import { Btn } from "../..";

// import SettingsIcon from "@mui/icons-material/Settings";
// import { DropDownSelect } from "../..";
// import { Dashboard } from "components/DropDownSelect/Dashboard/Dashboard";
// const teams = [
//   { label: "LIVERPOOL F.C" },
//   { label: "MANCHESTER UTD" },
//   { label: "LEICESTER" },
//   { label: "SHEFFIELD WEDNESDAY" },
// ];

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     color: "#fff",
//     backgroundColor: "#6A2D63",
//     height: "100%",
//     "& svg": {
//       margin: "0.7em 0.2em 0.5em 0",

//       width: "1.2em",
//       height: "1.2em",
//       "@media (max-width: 1280px)": {
//         width: "1em",
//         height: "1em",
//         margin: "0.5em 0.3em 0.3em 0.3em",
//       },

//       "@media (max-width: 960px)": {
//         margin: "0.2em 0.1em 0.1em 0.1em",

//         width: "0.5em",
//         height: "0.5em",
//       },
//     },
//     borderTopRightRadius: "8px",
//     borderBottomRightRadius: "8px",
//   },
//   text: {
//     color: "#fff",
//     fontSize: "1.2em",
//     "@media (max-width: 1280px)": {
//       fontSize: "1em",
//     },
//     "@media (max-width: 960px)": {
//       fontSize: "1em",
//     },
//   },
//   btn: {
//     height: "100%",
//   },
// }));
// const DashBoardBtn = () => {
//   const classes = useStyles();
//   const [type, setType] = useState("league");

//   const typeHandler = (typeProp) => {
//     setType(typeProp);
//   };
//   return (
//     <DropDownSelect
//       msg="Your chosen "
//       options={teams}
//       search={true}
//       dashboard={true}
//       type={type}
//       dashboardComp={<Dashboard typeHandler={typeHandler} />}
//       target={
//         <Btn
//           //   fullWidth={true}
//           width="20em"
//           backgroundColor="#884581"
//           padding="0"
//           height="100%"
//           borderRadius="8px"

//           //   padding="1.1em 1em 0.9em 2.3em"
//         >
//           <Grid
//             container
//             alignItems="center"
//             justifyContent="space-between"
//             className={classes.btn}
//           >
//             <Grid item xs={9}>
//               <Typography className={classes.text}>Dashboard</Typography>
//             </Grid>
//             <Grid item className={classes.icon} xs={3}>
//               <SettingsIcon />
//             </Grid>
//           </Grid>
//         </Btn>
//       }
//     />
//   );
// };

// export default DashBoardBtn;

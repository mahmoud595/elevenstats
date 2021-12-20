// import { Grid, Typography } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import { SlideRight, SlideLeft } from "../../../public";
// import TeamsSlider from "../TeamsSlider/TeamsSlider";
// import DashBoardBtn from "../DashBoardBtn/DashBoardBtn";

// const useStyles = makeStyles((theme) => ({
//   slideBtn: {
//     backgroundColor: "transparent",
//     border: "none",
//     "&:focus": {
//       outline: "none",
//     },
//   },
//   icon: {
//     fill: "#707070",

//     "&:active": {
//       fill: "#61BDE5",
//     },
//     cursor: "pointer",
//     "& svg": {
//       fill: "inherit",
//       // width: "2.3em",
//       // height: "2.3em",
//       "@media (max-width: 1517px)": {
//         width: "1.5em",
//         height: "2em",
//       },
//       "@media (max-width: 1065px)": {
//         width: "1.5em",
//         height: "1.5em",
//       },
//       "@media (max-width: 960px)": {
//         width: "1em",
//         height: "1em",
//       },
//     },
//   },
//   carouselProvider: {
//     width: "100%",
//     height: "100%",
//     // maxWidth: "300px",

//     "&:focus": {
//       outline: "none",
//     },
//     "& > div": {
//       "&:focus": {
//         outline: "none",
//       },
//     },
//   },
//   slider: {
//     // height: '90%',
//     "&:focus": {
//       outline: "none",
//     },
//     "& >div.carousel__slider-tray-wrap--horizontal.carousel__slider-tray-wrapper": {
//       height: "100%",
//       "&:focus": {
//         outline: "none",
//       },
//     },
//   },
//   sliderTray: {
//     height: "100%",
//     "&:focus": {
//       outline: "none",
//     },
//   },
// }));
// const teams = [
//   "LIVERPOOL F.C",
//   "MANCHESTER UTD",
//   "LEICESTER",
//   "SHEFFIELD WEDNESDAY",
//   "LIVERPOOL F.C",
//   "MANCHESTER UTD",
//   "LEICESTER",
//   "SHEFFIELD WEDNESDAY",
//   "LIVERPOOL F.C",
//   "MANCHESTER UTD",
//   "LEICESTER",
//   "SHEFFIELD WEDNESDAY",
// ];
// const SliderComp = ({ color }) => {
//   const classes = useStyles();
//   return (
//     <CarouselProvider
//       style={{ flex: 1 }}
//       naturalSlideWidth={100}
//       // naturalSlideHeight={100}
//       isIntrinsicHeight
//       totalSlides={teams.length}
//       visibleSlides={3}
//       className={classes.carouselProvider}
//       dragEnabled={false}
//     >
//       <Grid
//         container
//         item
//         justifyContent="space-between"
//         alignItems="center"
//         style={{ color: color || "inherit" }}
//         style={{ flex: 1 }}
//         wrap="nowrap"
//       >
//         <Grid
//           item
//           className={classes.icon}
//           xs={1}
//           container
//           alignItems="center"
//         >
//           <ButtonBack className={classes.slideBtn}>
//             <SlideLeft />
//           </ButtonBack>
//         </Grid>
//         <Grid item xs={2}>
//           <DashBoardBtn />
//         </Grid>
//         <Grid item xs={7}>
//           <Slider className={classes.slider} classNameTray={classes.sliderTray}>
//             {teams.map((el, index) => (
//               <Slide
//                 index={index}
//                 key={index}
//                 style={{ height: "100%", marginRight: "1rem" }}
//               >
//                 <TeamsSlider team={el} />
//               </Slide>
//             ))}
//           </Slider>
//         </Grid>
//         <Grid
//           item
//           className={classes.icon}
//           xs={1}
//           container
//           alignItems="center"
//         >
//           <ButtonNext className={classes.slideBtn}>
//             <SlideRight />
//           </ButtonNext>
//         </Grid>
//       </Grid>
//     </CarouselProvider>
//   );
// };

// export default SliderComp;

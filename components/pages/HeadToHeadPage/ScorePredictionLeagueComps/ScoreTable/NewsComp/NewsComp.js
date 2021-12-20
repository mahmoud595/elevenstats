// import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import { makeStyles } from "@mui/material/styles";
// import { Grid, Typography, useMediaQuery } from "@mui/material";
// import { CompWrapper } from "../../CompWrapper/CompWrapper";
// import { Football, SlideLeft, SlideRight } from "../../../../../public/";
// import Image from "next/image";

// const useStyles = makeStyles(({ palette }) => ({
//   text: {
//     fontSize: 50,
//     fontWeight: 600,
//     "@media (max-width: 1204px)": {
//       fontSize: 30,
//       whiteSpace: "nowrap",
//     },
//   },
//   container: {
//     flex: 1,
//     overflow: "hidden",
//   },
//   minute: {
//     fontSize: 40,
//     lineHeight: 1,
//   },
//   newsTitle: {
//     fontSize: 12,
//     whiteSpace: "break-spaces",
//   },
//   slideBtn: {
//     border: "none",
//     padding: 0,
//     backgroundColor: "transparent",
//     fill: palette.primary.main,
//     "&:focus": {
//       outline: "none",
//     },
//   },
//   carouselProvider: {
//     width: "100%",
//     height: "100%",
//     "&:focus": {
//       outline: "none",
//     },
//     "& > div": {
//       "&:focus": {
//         outline: "none",
//       },
//     },
//   },
//   slide: {
//     "@media (max-width: 1100px)": {
//       width: "85%",
//     },
//   },
//   svgContainer: {
//     "& > svg": {
//       width: "90%",
//       height: "90%",
//     },
//   },
//   slider: {
//     "&:focus": {
//       outline: "none",
//     },
//     "& > div.carousel__slider-tray-wrapper.carousel__slider-tray-wrap--horizontal": {
//       "&:focus": {
//         outline: "none",
//       },
//       "& > ul.carousel__slider-tray.carousel__slider-tray--horizontal.sliderAnimation___300FY.sliderTray___-vHFQ": {
//         "&:focus": {
//           outline: "none",
//         },
//       },
//     },
//   },
// }));
// export const NewsComp = () => {
//   const classes = useStyles();

//   const md = useMediaQuery("(max-width:1105px)");

//   return (
//     <CompWrapper
//       title="live score"
//       titleBackgroundColor="#D6435C"
//       color="#FFF"
//       live={true}
//       borderRadius="0px 0px 10px 10px"
//       height={210}
//       padding="0 0 10px 0px"
//     >
//       <Grid
//         item
//         container
//         className={classes.container}
//         justifyContent="space-around"
//         alignItems="center"
//         wrap="nowrap"
//       >
//         <Grid item xs={2}>
//           <Typography color="primary" className={classes.text}>
//             2 - 1
//           </Typography>
//         </Grid>
//         <Grid item container xs={9} style={{ height: "100%" }}>
//           <CarouselProvider
//             naturalSlideWidth={100}
//             // naturalSlideHeight={100}
//             isIntrinsicHeight
//             totalSlides={10}
//             visibleSlides={md ? 2 : 3}
//             className={classes.carouselProvider}
//             dragEnabled={false}
//           >
//             <Slider className={classes.slider}>
//               {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, index) => (
//                 <Slide index={index} key={index}>
//                   <Grid
//                     container
//                     direction="column"
//                     alignItems="center"
//                     justifyContent="space-around"
//                     className={classes.slide}
//                     style={{ height: 130 }}
//                   >
//                     <Grid item container>
//                       <Grid item xs={6}>
//                         <Typography color="primary" className={classes.minute}>
//                           20’
//                         </Typography>
//                       </Grid>
//                       <Grid
//                         item
//                         xs={4}
//                         container
//                         justifyContent="center"
//                         alignItems="center"
//                       >
//                         <Image
//                           src="https://cdn.sportmonks.com/images//soccer/teams/8/8.png"
//                           width={27}
//                           height={34}
//                         />
//                       </Grid>
//                     </Grid>

//                     <Grid item container>
//                       <Grid
//                         item
//                         xs={2}
//                         md={3}
//                         className={classes.svgContainer}
//                         container
//                         justifyContent="center"
//                         alignItems="center"
//                       >
//                         <Football />
//                       </Grid>
//                       <Grid item xs={10} md={9} container alignItems="center">
//                         <Typography
//                           color="primary"
//                           className={classes.newsTitle}
//                         >
//                           Roberto Firmino No Assist
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </Grid>
//                 </Slide>
//               ))}
//             </Slider>
//             <Grid container justifyContent="space-around">
//               <ButtonBack className={classes.slideBtn}>
//                 <SlideLeft />
//               </ButtonBack>
//               <ButtonNext className={classes.slideBtn}>
//                 <SlideRight />
//               </ButtonNext>
//             </Grid>
//           </CarouselProvider>
//         </Grid>
//       </Grid>
//     </CompWrapper>
//   );
// };

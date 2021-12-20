// // import { useState } from "react";
// import { Button, Grid, Typography } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
// import Link from "next/link";
// // import clsx from "clsx";
// import Image from "next/image";
// import useMediaQuery from "@mui/material/useMediaQuery";

// import { BottomLeftNavBar, CollapseOpen, CollapseClose } from "../../public/";
// import { Time, Links } from "../";

// // const drawerWidth = 250;

// const useStyles = makeStyles((theme) => ({
//   links: {
//     flex: 1,
//     overflowY: "auto",
//     overflowX: "hidden",
//     // flex: 1,
//     padding: "0 1em 1em 0.8em",

//     "@media (max-width: 1456px)": {
//       padding: "0 0.5em 1em 0.5em",
//     },

//     "@media (max-width: 1069px)": {
//       padding: "0 0.3em 1em 0.3em",
//     },
//   },
//   root: {
//     height: "100%",
//     backgroundColor: "#fff",
//     padding: "4.6em 0 2.6em 0",

//     // "@media (max-width: 1400px)": {
//     //   padding: "1rem 0 1rem 0",
//     // },

//     borderRadius: 20,
//     // maxWidth: ({ open }) => (open ? "250px" : "100px"),

//     transition: "all .3s linear ",
//   },
//   logoImage: {
//     // width: "100%",
//     // height: "7vh",

//     textAlign: "center",
//     "& img": {
//       width: "100%",
//       height: "100%",
//       cursor: "pointer",
//     },
//     position: "relative",
//     width: "6em",
//     height: "6em",
//     "@media (max-width: 1400px)": {
//       width: "7em",
//       height: "7em",
//     },
//   },
//   logo: {
//     // padding: ({ open }) => (open ? "0 2.9em" : "4em 0 0 0"),
//     minHeight: 70,
//     transition: "all 0s linear",
//     marginBottom: "1em",
//     // height: "fit-content",
//     // "@media (max-width: 1400px)": {
//     //   marginBottom: "3em",
//     // },
//     maxHeight: 60,
//   },

//   time: {
//     // marginTop: "1em",
//     overflow: "hidden",
//     // display: "none",
//     visibility: ({ open }) => (open ? "visible" : "hidden"),
//     transition: "all 0s linear",
//     height: 67,
//     "@media (max-width: 1400px)": {
//       height: 55,
//     },
//   },
//   txtGrid: {
//     visibility: ({ open }) => (open ? "visible" : "hidden"),
//     width: ({ open }) => (open ? 125 : 0),
//     transition: "all 0.2s linear",
//     marginLeft: "1em",
//   },
//   text: {
//     fontSize: "1.7rem",
//     letterSpacing: "1px",
//     "@media (max-width: 1296px)": {
//       fontSize: "1.9rem",
//     },
//     "@media (max-width: 1063px)": {
//       fontSize: "1.6rem",
//     },
//     "@media (max-width: 853px)": {
//       fontSize: "1.3rem",
//     },
//     "@media (max-width: 674px)": {
//       fontSize: "1rem",
//     },
//     visibility: ({ open }) => (open ? "visible" : "hidden"),
//     opacity: ({ open }) => (open ? 1 : 0),
//     transition: ({ open }) => (open ? "all 1s linear" : "all 0.1s linear"),
//   },
//   elevenTxt: {
//     color: "#022A54",
//   },
//   statsTxt: {
//     background: "linear-gradient(147.19deg, #355576 0%, #022A54 100%)",
//     "-webkit-background-clip": "text",
//     "-webkit-text-fill-color": "transparent",
//     fontWeight: 800,
//   },
//   collapseIcon: {
//     cursor: "pointer",
//     fontSize: "3rem",

//     "@media (max-width: 1400px)": {
//       fontSize: "2.5rem",
//     },

//     color: "#A1B5C9",
//     background: "linear-gradient(0deg, #F6F7FA, #F6F7FA)",
//     borderRadius: "40px 0px 0px 40px",
//     padding: "0 2.1rem 0.5rem 2.1rem",
//     textAlign: "center",
//     fontWeight: "100",
//     alignItems: "center",
//     "@media (max-width: 960px)": {
//       padding: "0 1.5rem 0.5rem 1.5rem",
//       fontSize: "2rem",
//     },
//   },
//   collapseIconContainer: {
//     margin: "3em 0",
//   },
// }));

// const LeftNavBar = ({ open, setOpen }) => {
//   const classes = useStyles({ open });
//   const handleDrawer = () => {
//     setOpen(!open);
//   };
//   const md = useMediaQuery("(min-width:600px)");

//   return (
//     <Grid container direction="column" className={classes.root}>
//       {/* =======logo====== */}
//       <Link href="/">
//         <Grid
//           container
//           wrap="nowrap"
//           justifyContent="center"
//           alignItems="center"
//           className={classes.logo}
//         >
//           <Grid item className={classes.logoImage}>
//             <Image
//               src="/LogoCollapsed.svg"
//               layout="fill"
//               priority
//               alt="logo"
//               placeholder="blur"
//               blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//             />
//           </Grid>

//           <Grid item className={classes.txtGrid}>
//             <span className={`${classes.elevenTxt} ${classes.text}`}>
//               ELEVEN
//             </span>
//             <span className={`${classes.statsTxt} ${classes.text}`}>STATS</span>
//           </Grid>
//         </Grid>
//       </Link>

//       {/* =======links comp====== */}
//       <Grid
//         item
//         container
//         direction="column"
//         justifyContent="space-around"
//         className={classes.links}
//         wrap="nowrap"
//       >
//         <Links open={open} setOpen={setOpen} handleDrawerOpen={handleDrawer} />
//       </Grid>
//       <Grid
//         item
//         container
//         justifyContent="flex-end"
//         alignItems="flex-end"
//         className={classes.collapseIconContainer}
//       >
//         {open ? (
//           <Typography onClick={handleDrawer} className={classes.collapseIcon}>
//             &#171;
//           </Typography>
//         ) : (
//           <Typography onClick={handleDrawer} className={classes.collapseIcon}>
//             &#187;
//           </Typography>
//         )}
//       </Grid>
//       {/* =======time comp====== */}

//       <Grid
//         item
//         container
//         direction="column"
//         className={classes.time}
//         alignItems="center"
//       >
//         <Time />
//       </Grid>
//     </Grid>
//   );
// };

// export default LeftNavBar;

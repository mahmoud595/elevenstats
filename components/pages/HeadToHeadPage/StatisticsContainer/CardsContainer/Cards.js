// import { useState, useEffect } from "react";
// import makeStyles from "@mui/styles/makeStyles";
// // import { Grid } from "@mui/material";
// // import { useSelector } from "react-redux";
// import { Grid, useMediaQuery, Hidden } from "@mui/material";

// import {
//   List,
//   CellMeasurer,
//   CellMeasurerCache,
//   WindowScroller,
//   AutoSizer,
// } from "react-virtualized";

// // const List = dynamic(
// //   import("react-virtualized").then((mod) => mod.List),
// //   { ssr: false }
// // );

// import { TeamCompContainer } from "./TeamComp/TeamCompContainer";
// import { GoalsCard } from "./GoalsCard/GoalsCard";
// import { HeadToHeadRecord } from "./HeadToHeadRecord/HeadToHeadRecord";
// import { Form } from "./Form/Form";
// import { OddsMarketCard } from "./OddsMarketCard/OddsMarketCard";
// import { Upgrade } from "./Upgrade/Upgrade";
// import { OverCard } from "./Over2.5&BttsTipsCard/OverCard";
// import { NumberOfCornersCard } from "./NumberOfCornersCard/NumberOfCornersCard";
// import { TeamCorners } from "./TeamCorners/TeamCorners";
// // import ThreeCardsContainer from "./ThreeCardsContainer/ThreeCardsContainer";
// import { Wdl } from "./Wdl/Wdl";
// import { FisrSecondHalfCard } from "./FisrSecondHalfCard/FisrSecondHalfCard";
// import { GoalRangeCard } from "./GoalRangeCard/GoalRangeCard";
// import { SOFCard } from "./SOFCard/SOFCard";
// // import { SofHaUpCardsContainer } from "./SOF&HA&upContainer/SOF&HA&upContainer";
// import { WhoIsLikelyCard } from "./WhoIslikelyCard/WhoIslikelyCard";
// import { NumberCardsContainer } from "./NumberCardsContainer/NumberCardsContainer";
// import { TopFiveChartCard } from "./TopFiveChartCard/TopFiveChartCard";
// import { MostPlayed } from "./MostPlayed/MostPlayed";

// // import { Typography } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   row: {
//     // borderTop: `10px solid ${theme.palette.secondary.main}`,
//     marginBottom: "5em",
//   },
//   paddingRight: {
//     paddingRight: "5em",
//     "@media (max-width: 1280px)": {
//       paddingRight: 0,
//     },
//   },
//   //   tiers: {
//   //     // backgroundColor: theme.palette.secondary.main,
//   //     width: "100%",
//   //     textAlign: "center",
//   //     paddingTop: "0.5em",
//   //     borderTopLeftRadius: "1em",
//   //     borderTopRightRadius: "1em",
//   //   },
//   //   tier: {
//   //     width: "10em",
//   //     backgroundColor: "white",
//   //     padding: "0.1em 1em",
//   //     textAlign: "center",
//   //     borderRadius: "0.4em",
//   //     fontWeight: "700",
//   //   },
// }));

// export const Cards = ({ selected }) => {
//   const classes = useStyles();
//   const cache = new CellMeasurerCache({
//     fixedWidth: true,
//     defaultHeight: 100,
//     // keyMapper: () => 1,
//   });

//   const md = useMediaQuery("(max-width:1280px)");
//   const sm = useMediaQuery("(max-width:913px)");

//   const rowRenderer = ({ index, parent, key, style }) => {
//     return (
//       <CellMeasurer
//         cache={cache}
//         columnIndex={0}
//         key={key}
//         parent={parent}
//         rowIndex={index}
//       >
//         {({ registerChild, measure }) => (
//           <div
//             style={{
//               ...style,
//             }}
//             ref={registerChild}
//             onLoad={measure}
//           >
//             {index === 0 ? (
//               <Grid container className={classes.row}>
//                 <Grid
//                   item
//                   xs={md ? 12 : 8}
//                   className={classes.paddingRight}
//                   style={{
//                     display: selected === "all" ? "block" : "none",
//                     // marginTop: md && "5em",
//                   }}
//                 >
//                   <TeamCompContainer />
//                 </Grid>
//                 <Grid
//                   item
//                   xs={12}
//                   md={md ? 12 : 4}
//                   style={{
//                     display: selected === "all" ? "block" : "none",
//                     marginTop: md && "5em",
//                   }}
//                 >
//                   <Upgrade />
//                 </Grid>
//               </Grid>
//             ) : index === 1 ? (
//               <Grid
//                 item
//                 xs={12}
//                 container
//                 className={classes.row}
//                 style={{
//                   display: ["all", "goals"].includes(selected)
//                     ? "flex"
//                     : "none",
//                   // marginBottom: '3rem',
//                 }}
//               >
//                 <WhoIsLikelyCard />
//               </Grid>
//             ) : index === 2 ? (
//               <Grid
//                 item
//                 className={classes.row}
//                 // xs={md ? 12 : selected === 'goals' ? 12 : 12}
//                 container
//                 style={{
//                   display: ["all", "goals"].includes(selected)
//                     ? "block"
//                     : "none",
//                 }}
//               >
//                 <OverCard />
//               </Grid>
//             ) : index === 3 ? (
//               <Grid
//                 item
//                 // xs={12}
//                 container
//                 className={classes.row}
//                 style={{
//                   display: selected === "all" ? "flex" : "none",
//                 }}
//               >
//                 <SOFCard />
//               </Grid>
//             ) : index === 4 ? (
//               <Grid container className={classes.row}>
//                 <Grid
//                   item
//                   xs={md ? 12 : 8}
//                   style={{ display: selected === "all" ? "block" : "none" }}
//                   className={classes.paddingRight}
//                 >
//                   <Form />
//                 </Grid>
//                 <Grid
//                   item
//                   xs={12}
//                   md={md ? 12 : 4}
//                   style={{
//                     display: selected === "all" ? "block" : "none",
//                     marginTop: md && "5em",
//                   }}
//                 >
//                   <OddsMarketCard />
//                 </Grid>
//               </Grid>
//             ) : index === 5 ? (
//               <Grid container className={classes.row}>
//                 <Grid
//                   item
//                   xs={md ? 12 : 8}
//                   style={{ display: selected === "all" ? "block" : "none" }}
//                   className={classes.paddingRight}
//                 >
//                   <HeadToHeadRecord />
//                 </Grid>
//                 <Grid
//                   item
//                   xs={12}
//                   md={md ? 12 : 4}
//                   style={{
//                     display: selected === "all" ? "block" : "none",
//                     marginTop: md && "5em",
//                   }}
//                 >
//                   <Upgrade />
//                 </Grid>
//               </Grid>
//             ) : index === 6 ? (
//               <Grid container className={classes.row}>
//                 <Grid
//                   item
//                   xs={12}
//                   md={md ? 12 : selected === "goals" ? 6 : 8}
//                   className={classes.paddingRight}
//                   style={{
//                     display: ["all", "goals"].includes(selected)
//                       ? "block"
//                       : "none",
//                   }}
//                 >
//                   <GoalRangeCard />
//                 </Grid>

//                 <Grid
//                   item
//                   xs={12}
//                   md={md ? 12 : selected === "goals" ? 6 : 4}
//                   style={{
//                     display: ["all", "goals"].includes(selected)
//                       ? "block"
//                       : "none",
//                     marginTop: md && "5em",
//                   }}
//                 >
//                   <GoalsCard
//                     title="Goals Conceded"
//                     subTitle="Conceded / Game"
//                     headerVaraint="h5"
//                     conceded
//                   />
//                 </Grid>
//               </Grid>
//             ) : index === 7 ? (
//               <Grid container className={classes.row}>
//                 <Grid
//                   item
//                   xs={12}
//                   md={md ? 12 : selected === "goals" ? 12 : 8}
//                   className={classes.paddingRight}
//                   style={{
//                     display: ["all", "goals"].includes(selected)
//                       ? "block"
//                       : "none",
//                     // paddingRight: 0
//                     ...(["goals"].includes(selected) && { paddingRight: 0 }),
//                   }}
//                 >
//                   <GoalsCard
//                     title="Goals  scored"
//                     subTitle="Scored per match"
//                   />
//                 </Grid>
//                 <Grid
//                   item
//                   xs={md ? 12 : 4}
//                   style={{
//                     display: selected === "all" ? "block" : "none",
//                   }}
//                 >
//                   {/* <TrendContainer md={md} /> */}
//                 </Grid>
//               </Grid>
//             ) : index === 8 ? (
//               <Grid container className={classes.row}>
//                 <Grid
//                   item
//                   xs={md ? 12 : 8}
//                   className={classes.paddingRight}
//                   style={{
//                     display: ["all", "corners"].includes(selected)
//                       ? "block"
//                       : "none",
//                   }}
//                 >
//                   <NumberOfCornersCard />
//                 </Grid>

//                 <Grid
//                   item
//                   xs={12}
//                   md={md ? 12 : 4}
//                   style={{
//                     display: ["all", "corners"].includes(selected)
//                       ? "block"
//                       : "none",
//                     marginTop: md && "5em",
//                   }}
//                 >
//                   <TeamCorners />
//                 </Grid>
//               </Grid>
//             ) : index === 9 ? (
//               <Grid
//                 item
//                 // xs={12}
//                 container
//                 className={classes.row}
//                 style={{
//                   display: ["all", "cards"].includes(selected)
//                     ? "block"
//                     : "none",
//                 }}
//               >
//                 <NumberCardsContainer />
//               </Grid>
//             ) : index === 10 ? (
//               <Grid
//                 container
//                 className={classes.row}
//                 style={{
//                   display: ["all", "players"].includes(selected)
//                     ? "block"
//                     : "none",
//                   marginTop: md && "0",
//                 }}
//               >
//                 <TopFiveChartCard
//                   id="4adf64f6"
//                   title="top Scorers"
//                   goals="total"
//                 />
//               </Grid>
//             ) : index === 11 ? (
//               <Grid container className={classes.row}>
//                 <Grid
//                   item
//                   container
//                   className={classes.paddingRight}
//                   direction="column"
//                   md={md ? 12 : selected === "half" ? 6 : 8}
//                   style={{
//                     display: ["all", "half"].includes(selected)
//                       ? "flex"
//                       : "none",
//                   }}
//                 >
//                   <FisrSecondHalfCard />

//                   <MostPlayed />
//                 </Grid>

//                 <Grid
//                   item
//                   xs={12}
//                   md={md ? 12 : selected === "half" ? 6 : 4}
//                   style={{
//                     display: ["all", "half"].includes(selected)
//                       ? "block"
//                       : "none",
//                     marginTop: md && "5em",
//                   }}
//                 >
//                   <Wdl />
//                 </Grid>
//               </Grid>
//             ) : index === 12 ? (
//               <Grid
//                 container
//                 className={classes.row}
//                 style={{
//                   display: ["all", "players"].includes(selected)
//                     ? "block"
//                     : "none",
//                 }}
//               >
//                 <TopFiveChartCard
//                   title="top Cards Holders"
//                   cards="total"
//                   id="4adsdgsdsvv64f56"
//                 />
//               </Grid>
//             ) : index === 13 ? (
//               <Grid container className={classes.row}>
//                 <Grid
//                   container
//                   // className={classes.row}
//                   style={{
//                     display: ["all", "players"].includes(selected)
//                       ? "block"
//                       : "none",
//                   }}
//                 >
//                   <TopFiveChartCard
//                     title="top Scorers Per Match"
//                     goals="perMatch"
//                     id="4adsdg5sdsav64f6"
//                   />
//                 </Grid>
//               </Grid>
//             ) : (
//               // <Grid container className={classes.row}>
//               <Grid container className={classes.row}>
//                 <Grid
//                   container
//                   className={classes.row}
//                   style={{
//                     display: ["all", "players"].includes(selected)
//                       ? "block"
//                       : "none",
//                   }}
//                 >
//                   <TopFiveChartCard
//                     title="top Cards Per Match Holders"
//                     cards="perMatch"
//                     id="4ad5sdgsdsbv64f6"
//                   />
//                 </Grid>
//               </Grid>
//               // </Grid>
//             )}
//           </div>
//         )}
//       </CellMeasurer>
//     );
//   };

//   return (
//     <WindowScroller serverHeight={200} serverWidth={400}>
//       {({ height, isScrolling, onChildScroll, scrollTop }) => (
//         <AutoSizer
//           defaultHeight={200}
//           defaultWidth={1600}
//           style={{ height: "fit-content" }}
//         >
//           {({ width }) => (
//             <List
//               autoHeight
//               height={height}
//               // onRowsRendered={onRowsRendered}
//               // ref={registerChild}
//               rowCount={15}
//               rowHeight={cache.rowHeight}
//               rowRenderer={rowRenderer}
//               width={width}
//               isScrolling={isScrolling}
//               onScroll={onChildScroll}
//               deferredMeasurementCache={cache}
//               scrollTop={scrollTop}
//               style={{ outline: "none" }}
//               overscanRowCount={2}
//             />
//           )}
//         </AutoSizer>
//       )}
//     </WindowScroller>
//   );
// };

// // export default Cards;

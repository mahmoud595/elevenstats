import React, { useState, memo, useEffect } from "react";
// import makeStyles from "@mui/styles/makeStyles";
import { Grid, CircularProgress } from "@mui/material";

import { useSelector } from "react-redux";
import { LeagueFixture } from "./LeagueFixture/LeagueFixture";

// const useStyles = makeStyles(() => ({
//   leagueContainer: {
//     marginTop: "50px",
//     borderRadius: 12,
//     background: "#fff",
//     boxShadow: "12.8811px 7.11487px 75.0136px rgba(134, 134, 134, 0.1)",

//     "@media (max-width:600px)": {
//       marginTop: 18,
//     },
//   },
// }));

export const LeagueContainer = memo(() => {
  // const classes = useStyles();

  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setHidden(false);
    }
  }
  const leagues = useSelector(({ home }) => home.matches);
  return (
    <Grid
      item
      container
      direction="column"
      sx={{ height: hidden && "3000px", flex: !hidden && 1 }}
      wrap="nowrap"
    >
      {leagues?.length ? (
        <>
          {leagues
            ?.slice(
              0,
              !hidden
                ? leagues.length - 1
                : leagues[0].fixtures.length > 3
                ? 3
                : 6
            )
            .map(
              (
                {
                  logoPath: leagueImage,
                  name,
                  fixtures,
                  fixturesCount,
                  slug,
                  country,
                  type: leagueType,
                  isPopular,
                },
                i
              ) => (
                <LeagueFixture
                  hidden={hidden}
                  isPopular={isPopular}
                  leagueType={leagueType}
                  country={country}
                  slug={slug}
                  fixturesCount={fixturesCount}
                  fixtures={fixtures}
                  name={name}
                  leagueImage={leagueImage}
                  index={i}
                  key={slug + country}
                />
              )
            )}
        </>
      ) : null}
      {hidden && (
        <Grid item container sx={{ marginTop: 10, justifyContent: "center" }}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
});

// import React, { useCallback, useState, memo } from "react";
// import { makeStyles } from "@mui/material/styles";
// import { Grid, Typography } from "@mui/material";
// import { LeagueContainerHeader } from "./LeagueContainerHeader/LeagueContainerHeader";
// import { LeagueMatches } from "./LeagueMatches/LeagueMatches";
// import { shallowEqual, useSelector } from "react-redux";
// import { useRouter } from "next/router";

// import {
//   List,
//   CellMeasurer,
//   CellMeasurerCache,
//   InfiniteLoader,
//   WindowScroller,
//   AutoSizer,
// } from "react-virtualized";

// const useStyles = makeStyles((theme) => ({
//   leagueContainer: {
//     marginTop: "26px",
//   },
// }));

// export const LeagueContainer = memo(() => {
//   const classes = useStyles();
//   const [collapsed, setCollapsed] = useState({});
//   const [newFixtures, setNewFixtures] = useState({});
//   const [hiddenLeague, setHiddenLeague] = useState({});
//   const { matches, date } = useSelector(({ home }) => {
//     const { matches, date } = home;
//     return {
//       matches,
//       date,
//     };
//   });
//   // const date = useRouter().query.data[2];
//   const cache = new CellMeasurerCache({
//     fixedWidth: true,
//     defaultHeight: 300,
//   });
//   // console.log(hiddenLeague);

//   const rowRenderer = ({ index, parent, key, style }) => {
//     const {
//       logoPath,
//       name,
//       fixtures,
//       fixturesCount,
//       slug,
//       country: { name: countryName },
//       type: leagueType,
//       isPopular,
//     } = matches[index];
//     return (
//       <CellMeasurer
//         cache={cache}
//         columnIndex={0}
//         key={key}
//         parent={parent}
//         rowIndex={index}
//       >
//         {({ registerChild, measure }) => (
//           <div style={{ ...style }} ref={registerChild} onLoad={measure}>
//             <Grid
//               item
//               container
//               direction="column"
//               className={classes.leagueContainer}
//               key={`${index}${date}`}
//               style={{
//                 display: `${hiddenLeague[`${index}${date}`] ? "none" : "flex"}`,
//               }}
//             >
//               <LeagueContainerHeader
//                 collapsed={collapsed}
//                 setCollapsed={setCollapsed}
//                 index={`${index}${date}`}
//                 logoPath={logoPath}
//                 name={name}
//                 fixturesCount={fixturesCount}
//                 fixtures={fixtures}
//                 slug={slug}
//                 newFixtures={newFixtures}
//                 setNewFixtures={setNewFixtures}
//                 countryName={countryName}
//               />
//               <LeagueMatches
//                 fixtures={fixtures && fixtures}
//                 fixturesCount={fixturesCount}
//                 slug={slug}
//                 newFixtures={newFixtures}
//                 leagueIndex={`${index}${date}`}
//                 collapsed={collapsed[`${index}${date}`]}
//                 setHiddenLeague={setHiddenLeague}
//                 slug={slug}
//                 leagueType={leagueType}
//                 isPopular={isPopular}
//               />
//             </Grid>
//           </div>
//         )}
//       </CellMeasurer>
//     );
//   };
//   return (
//     // <Grid item container direction="column">
//     //   {matches?.length ? (
//     //     <>
//     //       {matches?.map(
//     //         (
//     //           {
//     //             logoPath,
//     //             name,
//     //             fixtures,
//     //             fixturesCount,
//     //             slug,
//     //             country: { name: countryName },
//     //             type: leagueType,
//     //             isPopular,
//     //           },
//     //           i
//     //         ) => (
//     //           <Grid
//     //             item
//     //             container
//     //             direction="column"
//     //             className={classes.leagueContainer}
//     //             key={`${i}${date}`}
//     //             style={{
//     //               display: `${hiddenLeague[`${i}${date}`] ? 'none' : 'flex'}`,
//     //             }}
//     //           >
//     //             <LeagueContainerHeader
//     //               collapsed={collapsed}
//     //               setCollapsed={setCollapsed}
//     //               index={`${i}${date}`}
//     //               logoPath={logoPath}
//     //               name={name}
//     //               fixturesCount={fixturesCount}
//     //               fixtures={fixtures}
//     //               slug={slug}
//     //               newFixtures={newFixtures}
//     //               setNewFixtures={setNewFixtures}
//     //               countryName={countryName}
//     //             />
//     //             <LeagueMatches
//     //               fixtures={fixtures && fixtures}
//     //               fixturesCount={fixturesCount}
//     //               slug={slug}
//     //               newFixtures={newFixtures}
//     //               leagueIndex={`${i}${date}`}
//     //               collapsed={collapsed[`${i}${date}`]}
//     //               setHiddenLeague={setHiddenLeague}
//     //               slug={slug}
//     //               leagueType={leagueType}
//     //               isPopular={isPopular}
//     //             />
//     //           </Grid>
//     //         )
//     //       )}
//     //     </>
//     //   ) : null}
//     // </Grid>

//     <WindowScroller serverHeight={1200} serverWidth={800}>
//       {({ height, isScrolling, onChildScroll, scrollTop, registerChild }) => (
//         // <AutoSizer defaultHeight={800} defaultWidth={1600}>
//         //   {({ width }) => (
//         <List
//           autoHeight
//           height={height}
//           // onRowsRendered={onRowsRendered}
//           ref={registerChild}
//           rowCount={matches.length}
//           rowHeight={cache.rowHeight}
//           rowRenderer={rowRenderer}
//           width={1200}
//           isScrolling={isScrolling}
//           onScroll={onChildScroll}
//           deferredMeasurementCache={cache}
//           scrollTop={scrollTop}
//           style={{ outline: "none" }}
//         />
//         //   )}
//         // </AutoSizer>
//       )}
//     </WindowScroller>
//   );
// });

// import React, { useCallback, useState, memo } from "react";
// import { makeStyles } from "@mui/material/styles";
// import { Grid, Typography } from "@mui/material";
// import { LeagueContainerHeader } from "./LeagueContainerHeader/LeagueContainerHeader";
// import { LeagueMatches } from "./LeagueMatches/LeagueMatches";
// import { shallowEqual, useSelector } from "react-redux";
// import { useRouter } from "next/router";

// import {
//   List,
//   CellMeasurer,
//   CellMeasurerCache,
//   InfiniteLoader,
//   WindowScroller,
//   AutoSizer,
// } from "react-virtualized";

// const useStyles = makeStyles((theme) => ({
//   leagueContainer: {
//     marginTop: "26px",
//   },
// }));

// export const LeagueContainer = memo(() => {
//   const classes = useStyles();
//   const [collapsed, setCollapsed] = useState({});
//   const [newFixtures, setNewFixtures] = useState({});
//   const [hiddenLeague, setHiddenLeague] = useState({});
//   const { matches, date } = useSelector(({ home }) => {
//     const { matches, date } = home;
//     return {
//       matches,
//       date,
//     };
//   });
//   // const date = useRouter().query.data[2];
//   const cache = new CellMeasurerCache({
//     fixedWidth: true,
//     defaultHeight: 300,
//   });
//   // console.log(hiddenLeague);

//   const rowRenderer = ({ index, parent, key, style }) => {
//     const {
//       logoPath,
//       name,
//       fixtures,
//       fixturesCount,
//       slug,
//       country: { name: countryName },
//       type: leagueType,
//       isPopular,
//     } = matches[index];
//     return (
//       <CellMeasurer
//         cache={cache}
//         columnIndex={0}
//         key={key}
//         parent={parent}
//         rowIndex={index}
//       >
//         {({ registerChild, measure }) => (
//           <div style={{ ...style }} ref={registerChild} onLoad={measure}>
//             <Grid
//               item
//               container
//               direction="column"
//               className={classes.leagueContainer}
//               key={`${index}${date}`}
//               style={{
//                 display: `${hiddenLeague[`${index}${date}`] ? "none" : "flex"}`,
//               }}
//             >
//               <LeagueContainerHeader
//                 collapsed={collapsed}
//                 setCollapsed={setCollapsed}
//                 index={`${index}${date}`}
//                 logoPath={logoPath}
//                 name={name}
//                 fixturesCount={fixturesCount}
//                 fixtures={fixtures}
//                 slug={slug}
//                 newFixtures={newFixtures}
//                 setNewFixtures={setNewFixtures}
//                 countryName={countryName}
//               />
//               <LeagueMatches
//                 fixtures={fixtures && fixtures}
//                 fixturesCount={fixturesCount}
//                 slug={slug}
//                 newFixtures={newFixtures}
//                 leagueIndex={`${index}${date}`}
//                 collapsed={collapsed[`${index}${date}`]}
//                 setHiddenLeague={setHiddenLeague}
//                 slug={slug}
//                 leagueType={leagueType}
//                 isPopular={isPopular}
//               />
//             </Grid>
//           </div>
//         )}
//       </CellMeasurer>
//     );
//   };
//   return (
//     // <Grid item container direction="column">
//     //   {matches?.length ? (
//     //     <>
//     //       {matches?.map(
//     //         (
//     //           {
//     //             logoPath,
//     //             name,
//     //             fixtures,
//     //             fixturesCount,
//     //             slug,
//     //             country: { name: countryName },
//     //             type: leagueType,
//     //             isPopular,
//     //           },
//     //           i
//     //         ) => (
//     //           <Grid
//     //             item
//     //             container
//     //             direction="column"
//     //             className={classes.leagueContainer}
//     //             key={`${i}${date}`}
//     //             style={{
//     //               display: `${hiddenLeague[`${i}${date}`] ? 'none' : 'flex'}`,
//     //             }}
//     //           >
//     //             <LeagueContainerHeader
//     //               collapsed={collapsed}
//     //               setCollapsed={setCollapsed}
//     //               index={`${i}${date}`}
//     //               logoPath={logoPath}
//     //               name={name}
//     //               fixturesCount={fixturesCount}
//     //               fixtures={fixtures}
//     //               slug={slug}
//     //               newFixtures={newFixtures}
//     //               setNewFixtures={setNewFixtures}
//     //               countryName={countryName}
//     //             />
//     //             <LeagueMatches
//     //               fixtures={fixtures && fixtures}
//     //               fixturesCount={fixturesCount}
//     //               slug={slug}
//     //               newFixtures={newFixtures}
//     //               leagueIndex={`${i}${date}`}
//     //               collapsed={collapsed[`${i}${date}`]}
//     //               setHiddenLeague={setHiddenLeague}
//     //               slug={slug}
//     //               leagueType={leagueType}
//     //               isPopular={isPopular}
//     //             />
//     //           </Grid>
//     //         )
//     //       )}
//     //     </>
//     //   ) : null}
//     // </Grid>

//     <WindowScroller serverHeight={1200} serverWidth={800}>
//       {({ height, isScrolling, onChildScroll, scrollTop, registerChild }) => (
//         // <AutoSizer defaultHeight={800} defaultWidth={1600}>
//         //   {({ width }) => (
//         <List
//           autoHeight
//           height={height}
//           // onRowsRendered={onRowsRendered}
//           ref={registerChild}
//           rowCount={matches.length}
//           rowHeight={cache.rowHeight}
//           rowRenderer={rowRenderer}
//           width={1200}
//           isScrolling={isScrolling}
//           onScroll={onChildScroll}
//           deferredMeasurementCache={cache}
//           scrollTop={scrollTop}
//           style={{ outline: "none" }}
//         />
//         //   )}
//         // </AutoSizer>
//       )}
//     </WindowScroller>
//   );
// });

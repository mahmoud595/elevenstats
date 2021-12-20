// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import withStyles from '@mui/styles/withStyles';
// import { TableCell, Grid, Typography } from "@mui/material";
// import { AutoSizer, Column, Table } from "react-virtualized";

// // import { MatchDetailsCell } from './MatchDetailsCell/MatchDetailsCell';
// import { MatchDetails } from "components/HomePage/MatchesComp/MatchDetails/MatchDetails";
// import { AwayTeam } from "components/HomePage/MatchesComp/AwayTeam/AwayTeam";
// import { HomeTeam } from "components/HomePage/MatchesComp/HomeTeam/HomeTeam";
// import { Time } from "components/HomePage/MatchesComp/Time/Time";
// import { Tv } from "public/";
// import { FixtureDetails } from "./FixtureDetails/FixtureDetails";

// const styles = (theme) => ({
//   flexContainer: {
//     display: "flex",
//     alignItems: "center",
//     boxSizing: "border-box",
//   },
//   table: {
//     // temporary right-to-left patch, waiting for
//     // https://github.com/bvaughn/react-virtualized/issues/454
//     "& .ReactVirtualized__Table__headerRow": {
//       flip: false,
//       paddingRight: theme.direction === "rtl" ? "0 !important" : undefined,
//     },
//     "& .ReactVirtualized__Table__rowColumn": {
//       flex: 1,
//     },
//     "& .ReactVirtualized__Table__rowColumn:nth-child(1)": {
//       flex: 2,
//     },
//     "& .ReactVirtualized__Table__rowColumn:nth-child(2)": {
//       flex: 2,
//     },
//     "& .ReactVirtualized__Table__rowColumn:nth-child(4)": {
//       flex: 2,
//     },
//     "& .ReactVirtualized__Table__headerColumn": {
//       flex: 1,
//     },
//     "& .ReactVirtualized__Table__headerColumn:nth-child(1)": {
//       flex: 2,
//     },
//     "& .ReactVirtualized__Table__headerColumn:nth-child(2)": {
//       flex: 2,
//     },
//     "& .ReactVirtualized__Table__headerColumn:nth-child(4)": {
//       flex: 2,
//     },
//   },
//   tableRow: {
//     //  cursor: 'pointer',
//     //  '&:hover': {
//     //    cursor: 'pointer',
//     //  },
//     "&:focus": {
//       outline: "none",
//       boxShadow: "1px 1px 30px 3px rgba(0,0,0,0.23)",
//     },
//   },
//   tableRowHover: {
//     "&:hover": {
//       backgroundColor: theme.palette.grey[200],
//     },
//   },
//   tableCell: {
//     flex: 1,
//     justifyContent: "center",
//     borderBottom: "none",
//     padding: "10px 5px",
//   },
//   noClick: {
//     cursor: "pointer",
//   },
//   tableHead: {
//     color: "#6B2262",
//     fontSize: 13,
//     fontWeight: 600,
//   },
//   text: {
//     color: "#6B7281",
//     fontSize: 11,
//     "@media (max-width: 960px)": {
//       fontSize: 8,
//     },
//     textTransform: "uppercase",
//     whiteSpace: "break-spaces",
//     fontWeight: 600,
//   },
//   resultWrapper: {
//     width: "60%",
//     height: "40%",
//     backgroundColor: "#6B2262",
//     color: "#FFF",
//     borderRadius: 5,
//   },
//   resultText: {
//     fontWeight: 600,
//     "@media (max-width: 960px)": {
//       fontSize: 10,
//     },
//   },
// });

// class MuiVirtualizedTable extends React.PureComponent {
//   //   constructor(props) {
//   //     super(props);
//   //     this.state = { clicked: false };
//   //   }
//   static defaultProps = {
//     headerHeight: 48,
//     rowHeight: 82,
//   };

//   getRowClassName = ({ index }) => {
//     const { classes, onRowClick } = this.props;

//     return clsx(classes.tableRow, classes.flexContainer, {
//       [classes.tableRowHover]: index !== -1 && onRowClick != null,
//     });
//   };

//   //   handleClickRow = () => {
//   //     this.setState({ clicked: !this.state.clicked });
//   //     console.log('passs');
//   //   };

//   cellRenderer = ({ cellData, columnIndex, dataKey }) => {
//     const { columns, classes, rowHeight, onRowClick } = this.props;

//     return (
//       <TableCell
//         component="div"
//         className={clsx(classes.tableCell, classes.flexContainer, {
//           [classes.noClick]: onRowClick == null,
//         })}
//         variant="body"
//         style={{ height: rowHeight }}
//         align={"center"}
//       >
//         {dataKey === "matchDetails" ? (
//           <MatchDetails data={cellData} />
//         ) : dataKey === "home" ? (
//           <HomeTeam />
//         ) : dataKey === "time" ? (
//           <Time />
//         ) : dataKey === "away" ? (
//           <AwayTeam />
//         ) : dataKey === "result" ? (
//           <Grid
//             container
//             justifyContent="center"
//             alignItems="center"
//             className={classes.resultWrapper}
//           >
//             <Typography className={classes.resultText}>1 - 2</Typography>
//           </Grid>
//         ) : dataKey === "league" ? (
//           <Typography className={classes.text}>
//             English premier League
//           </Typography>
//         ) : dataKey === "notes" ? (
//           <Typography className={classes.text}>Leg 1 0f 2</Typography>
//         ) : dataKey === "tv" ? (
//           <Tv />
//         ) : dataKey === "venue" ? (
//           <Typography className={classes.text}>Anfield, Liverpool</Typography>
//         ) : (
//           cellData
//         )}
//       </TableCell>
//     );
//   };

//   headerRenderer = ({ label, columnIndex }) => {
//     const { headerHeight, columns, classes } = this.props;

//     return (
//       <TableCell
//         component="div"
//         className={clsx(
//           classes.tableCell,
//           classes.flexContainer,
//           classes.noClick
//         )}
//         classes={{ head: classes.tableHead }}
//         variant="head"
//         style={{
//           height: headerHeight,
//         }}
//         align={"center"}
//       >
//         <span>{label}</span>
//       </TableCell>
//     );
//   };

//   render() {
//     const {
//       classes,
//       columns,
//       rowHeight,
//       headerHeight,
//       handleClickRow,
//       ...tableProps
//     } = this.props;
//     return (
//       <AutoSizer style={{ borderRadius: 10 }}>
//         {({ height, width }) => (
//           <Table
//             height={height}
//             width={width}
//             rowHeight={rowHeight}
//             gridStyle={{
//               direction: "inherit",
//             }}
//             onRowClick={(index) => handleClickRow(index)}
//             headerHeight={headerHeight}
//             className={classes.table}
//             {...tableProps}
//             rowClassName={this.getRowClassName}
//           >
//             {columns.map(({ dataKey, flex, ...other }, index) => {
//               return (
//                 <Column
//                   key={dataKey}
//                   headerRenderer={(headerProps) =>
//                     this.headerRenderer({
//                       ...headerProps,
//                       columnIndex: index,
//                     })
//                   }
//                   className={classes.flexContainer}
//                   cellRenderer={this.cellRenderer}
//                   dataKey={dataKey}
//                   {...other}
//                 />
//               );
//             })}
//           </Table>
//         )}
//       </AutoSizer>
//     );
//   }
// }

// MuiVirtualizedTable.propTypes = {
//   classes: PropTypes.object.isRequired,
//   columns: PropTypes.arrayOf(
//     PropTypes.shape({
//       dataKey: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       numeric: PropTypes.bool,
//       width: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   headerHeight: PropTypes.number,
//   onRowClick: PropTypes.func,
//   rowHeight: PropTypes.number,
// };

// const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// // ---

// const sample = [
//   ["Frozen yoghurt", 159, 6.0, 24, 4.0],
//   ["Ice cream sandwich", 237, 9.0, 37, 4.3],
//   ["Eclair", 262, 16.0, 24, 6.0],
//   ["Cupcake", 305, 3.7, 67, 4.3],
//   ["Gingerbread", 356, 16.0, 49, 3.9],
// ];

// function createData(id, matchDetails, home, time, away, result, tv, league) {
//   return { id, matchDetails, home, time, away, result, tv, league };
// }

// const rows = [];

// for (let i = 0; i < 200; i += 1) {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   rows.push(createData(i, ...randomSelection));
// }

// export const FixturesTable = () => {
//   const [isRowClicked, setIsRowClicked] = useState({
//     clicked: false,
//     index: null,
//   });
//   const handleClickRow = (data) => {
//     if (isRowClicked.index === data.index) {
//       setIsRowClicked({ clicked: !isRowClicked.clicked, index: data.index });
//     } else {
//       setIsRowClicked({ clicked: true, index: data.index });
//     }
//   };
//   return (
//     <Grid
//       item
//       container
//       style={{
//         flex: 1,
//         backgroundColor: "#FFF",
//         position: "relative",
//         borderRadius: 10,
//         minHeight: 575,
//       }}
//     >
//       {isRowClicked.clicked && <FixtureDetails />}

//       <VirtualizedTable
//         rowCount={rows.length}
//         rowGetter={({ index }) => rows[index]}
//         handleClickRow={handleClickRow}
//         columns={[
//           {
//             // : 200,
//             flex: 2,
//             label: "Match details",
//             dataKey: "matchDetails",
//           },
//           {
//             flex: 2,
//             label: "Home",
//             dataKey: "home",
//             numeric: true,
//           },
//           {
//             // width: 120,
//             flex: 1,
//             label: "Time",
//             dataKey: "time",
//             numeric: true,
//           },
//           {
//             flex: 2,
//             label: "Away",
//             dataKey: "away",
//             numeric: true,
//           },
//           {
//             // width: 80,
//             flex: 1,
//             label: "Result",
//             dataKey: "result",
//             numeric: true,
//           },
//           {
//             // width: 100,
//             flex: 1,
//             label: "Tv",
//             dataKey: "tv",
//             numeric: true,
//           },
//           {
//             // width: 130,
//             flex: 1,
//             label: "League",
//             dataKey: "league",
//             numeric: true,
//           },
//           {
//             // width: 110,
//             flex: 1,
//             label: "Notes",
//             dataKey: "notes",
//             numeric: true,
//           },
//           {
//             // width: 120,
//             flex: 1,
//             label: "Venue",
//             dataKey: "venue",
//             numeric: true,
//           },
//         ]}
//       />
//     </Grid>
//   );
// };

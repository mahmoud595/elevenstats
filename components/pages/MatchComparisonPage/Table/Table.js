// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import withStyles from '@mui/styles/withStyles';
// import makeStyles from '@mui/styles/makeStyles';
// // import TableCell from '@mui/material/TableCell';
// import { Grid, TableCell } from "@mui/material";

// import { AutoSizer, Column, Table } from "react-virtualized";

// const styles = (theme) => ({
//   flexContainer: {
//     display: "flex",
//     alignItems: "center",
//     boxSizing: "border-box",
//   },
//   header: {
//     color: theme.palette.primary.main,
//     textTransform: "uppercase",
//     fontWeight: 600,
//   },
//   table: {
//     // temporary right-to-left patch, waiting for
//     // https://github.com/bvaughn/react-virtualized/issues/454
//     "& .ReactVirtualized__Table__headerRow": {
//       flip: false,
//       paddingRight: theme.direction === "rtl" ? "0 !important" : undefined,
//     },
//   },
//   tableRow: {
//     cursor: "pointer",
//   },
//   tableRowHover: {
//     "&:hover": {
//       backgroundColor: theme.palette.grey[200],
//     },
//   },
//   tableCell: {
//     flex: 1,
//   },
//   noClick: {
//     cursor: "initial",
//   },
//   column: {
//     "&:nth-child(-n+4)": {
//       backgroundColor: "#FFF9E6",
//     },
//     "&:nth-child(n+5)": {
//       borderBottom: "3px solid rgba(147,147,147, .2) !important",
//     },
//     "&:nth-child(4)": {
//       boxShadow: "  1px 0 0 0 rgba(147,147,147, .1)",
//       // borderRight: '1px solid black',
//     },
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flex: 1,
//     backgroundColor: "#FFF",
//     overflowX: "auto",
//     borderRadius: 7,
//     marginTop: "1em",
//   },
//   inputsRow: {
//     //  height: '5vh',
//   },
// }));

// class MuiVirtualizedTable extends React.PureComponent {
//   static defaultProps = {
//     headerHeight: 48,
//     rowHeight: 48,
//   };

//   getRowClassName = ({ index }) => {
//     const { classes, onRowClick } = this.props;

//     return clsx(classes.tableRow, classes.flexContainer, {
//       [classes.tableRowHover]: index !== -1 && onRowClick != null,
//     });
//   };

//   cellRenderer = ({ cellData, columnIndex }) => {
//     const { columns, classes, rowHeight, onRowClick } = this.props;

//     return (
//       <TableCell
//         component="div"
//         className={clsx(classes.tableCell, classes.flexContainer, {
//           [classes.noClick]: onRowClick == null,
//         })}
//         variant="body"
//         style={{ height: rowHeight, border: "none" }}
//         align={
//           (columnIndex != null && columns[columnIndex].numeric) || false
//             ? "right"
//             : "left"
//         }
//       >
//         {cellData}
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
//           classes.noClick,
//           classes.header
//         )}
//         variant="head"
//         style={{ height: headerHeight }}
//         align={columns[columnIndex].numeric || false ? "right" : "left"}
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
//       ...tableProps
//     } = this.props;
//     return (
//       <AutoSizer>
//         {({ height, width }) => (
//           <Table
//             height={height}
//             width={width}
//             rowHeight={rowHeight}
//             gridStyle={{
//               direction: "inherit",
//             }}
//             headerHeight={headerHeight}
//             className={classes.table}
//             {...tableProps}
//             rowClassName={this.getRowClassName}
//           >
//             {columns.map(({ dataKey, ...other }, index) => {
//               return (
//                 <Column
//                   key={dataKey}
//                   headerRenderer={(headerProps) =>
//                     this.headerRenderer({
//                       ...headerProps,
//                       columnIndex: index,
//                     })
//                   }
//                   // style={{
//                   //   '&:nth-child(-n+5)': {
//                   //     backgroundColor: 'yellow',
//                   //   },
//                   // }}
//                   // className={classes.flexContainer}
//                   className={classes.column}
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

// function createData(id, dessert, calories, fat, carbs, protein) {
//   return { id, dessert, calories, fat, carbs, protein };
// }

// const rows = [];

// for (let i = 0; i < 200; i += 1) {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   rows.push(createData(i, ...randomSelection));
// }

// // export default function ReactVirtualizedTable() {
//   const classes = useStyles();
//   return (
//     <Grid item className={classes.root}>
//       <VirtualizedTable
//         rowCount={rows.length}
//         // ==============this is afixed width should be calculated according  clomn number===============
//         width={2000}
//         rowGetter={({ index }) => rows[index]}
//         columns={[
//           {
//             width: 200,
//             label: "KickOFF",
//             dataKey: "dessert",
//           },
//           {
//             width: 120,
//             label: "MATCH",
//             dataKey: "calories",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "PROGRESS",
//             dataKey: "fat",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "FORM",
//             dataKey: "carbs",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein1",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein2",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein3",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein4",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein5",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein6",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein7",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein8",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein9",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein99",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein55",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein554",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein333",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein345",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein35455",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Protein\u00A0(g)",
//             dataKey: "protein35425363",
//             numeric: true,
//           },
//           {
//             width: 120,
//             label: "Last",
//             dataKey: "protein324553252345",
//             numeric: true,
//           },
//         ]}
//       />
//     </Grid>
//   );
// }

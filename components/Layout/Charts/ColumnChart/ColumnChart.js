// import React, { useRef, useLayoutEffect } from "react";
// import { Grid, Typography, Button } from "@mui/material";
// import makeStyles from "@mui/styles/makeStyles";
// // import * as am4core from "@amcharts/amcharts4/core";
// // import * as am4charts from "@amcharts/amcharts4/charts";
// import LeagueGoalsHeader from "../../HomePage/KeyStatistics/LeagueGoalsCard/LeagueGoalsHeader/LeagueGoalsHeader";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // marginTop: '2.1em',

//     backgroundColor: "#fff",
//     borderRadius: "5px",
//     width: 450,
//     // padding: '0.9em 0 0.6em 0',
//   },
// }));
// export const ColumnChart = React.memo(({ id }) => {
//   const classes = useStyles();
//   const nchart = useRef(null);
//   useLayoutEffect(() => {
//     let chart;
//     Promise.all([
//       import("@amcharts/amcharts4/core"),
//       import("@amcharts/amcharts4/charts"),
//     ])
//       .then((modules) => {
//         const am4core = modules[0];
//         const am4charts = modules[1];
// am4core.addLicense(process.env.NEXT_AMCHART_LICENCE)

//         chart = am4core.create(id, am4charts.XYChart);
//         chart.scrollbarX = new am4core.Scrollbar();

//         chart.scrollbarX.minHeight = 4;
//         chart.scrollbarX.startGrip.maxHeight = 4;
//         chart.scrollbarX.startGrip.maxWidth = 4;
//         chart.scrollbarX.startGrip.paddingLeft = 0;
//         chart.scrollbarX.startGrip.rotation = 90;
//         chart.scrollbarX.startGrip.paddingTop = 0;

//         chart.scrollbarX.endGrip.maxHeight = 4;
//         chart.scrollbarX.endGrip.maxWidth = 4;
//         chart.scrollbarX.endGrip.paddingLeft = 0;
//         chart.scrollbarX.endGrip.rotation = 90;
//         chart.scrollbarX.endGrip.paddingTop = 0;

//         chart.scrollbarY = new am4core.Scrollbar();

//         chart.scrollbarY.minWidth = 4;
//         chart.scrollbarY.startGrip.maxHeight = 4;
//         chart.scrollbarY.startGrip.maxWidth = 4;
//         chart.scrollbarY.startGrip.paddingLeft = 0;
//         chart.scrollbarY.startGrip.paddingTop = 0;
//         chart.scrollbarY.endGrip.maxHeight = 4;
//         chart.scrollbarY.endGrip.maxWidth = 4;
//         chart.scrollbarY.endGrip.paddingLeft = 0;
//         chart.scrollbarY.endGrip.paddingTop = 0;

//         // Add data
//         chart.data = [];

//         // Create axes
//         var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

//         categoryAxis.dataFields.category = "country";
//         categoryAxis.renderer.grid.template.location = 0;
//         categoryAxis.renderer.minGridDistance = 20;
//         categoryAxis.renderer.maxWidth = 40;
//         //  categoryAxis.renderer.minGridDistance = 20;
//         //  categoryAxis.contentWidth = 2000;

//         categoryAxis.renderer.labels.template.horizontalCenter = "middle";

//         //  categoryAxis.renderer.labels.template.truncate = true;

//         //  categoryAxis.renderer.cellStartLocation = 0.1;
//         //  categoryAxis.renderer.cellEndLocation = 0.9;

//         //   categoryAxis.renderer.labels.template.ellipsis = '...';
//         //  categoryAxis.renderer.labels.template.resizable = true;
//         var label = categoryAxis.renderer.labels.template;

//         label.maxWidth = 10;

//         label.truncate = true;
//         label.resizable = true;
//         label.tooltipText = "{category}";

//         //  categoryAxis.events.on('sizechanged', function (ev) {
//         //    var axis = ev.target;
//         //    var cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex);
//         //    if (cellWidth < axis.renderer.labels.template.maxWidth) {
//         //      // axis.renderer.labels.template.rotation = -45;
//         //      // axis.renderer.labels.template.horizontalCenter = 'right';
//         //      // axis.renderer.labels.template.verticalCenter = 'middle';
//         //      axis.renderer.labels.template.maxWidth = 100;
//         //      axis.renderer.labels.template.truncate = true;
//         //      axis.renderer.labels.template.resizable = true;
//         //    } else {
//         //      axis.renderer.labels.template.rotation = 0;
//         //      axis.renderer.labels.template.maxWidth = 50;
//         //      axis.renderer.labels.template.horizontalCenter = 'middle';
//         //      axis.renderer.labels.template.verticalCenter = 'top';
//         //    }
//         //  });

//         var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//         valueAxis.renderer.minWidth = 50;

//         // Create series
//         var series = chart.series.push(new am4charts.ColumnSeries());
//         series.sequencedInterpolation = true;
//         series.dataFields.valueY = "visits";
//         series.dataFields.categoryX = "country";
//         series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
//         series.columns.template.strokeWidth = 0;
//         //  series.columns.template.minWidth = 10;
//         series.columns.template.column.fillOpacity = 1;

//         //  series.columns.template.marginRight = 10;
//         //   series.columns.template.

//         var bullet = series.bullets.push(new am4charts.Bullet());
//         var image = bullet.createChild(am4core.Image);
//         image.width = 12;
//         image.height = 12;
//         image.horizontalCenter = "middle";
//         image.verticalCenter = "middle";
//         image.propertyFields.href = "bullet";
//         image.filters.push(new am4core.DropShadowFilter());

//         var bullet2 = series.bullets.push(new am4charts.LabelBullet());
//         bullet2.label.text = "{visits}";
//         bullet2.label.fill = am4core.color("#FFF");
//         bullet2.locationY = 0.5;
//         bullet2.zIndex = 2;

//         series.tooltip.pointerOrientation = "vertical";

//         // on hover, make corner radiuses bigger
//         var hoverState = series.columns.template.column.states.create("hover");
//         hoverState.properties.cornerRadiusTopLeft = 0;
//         hoverState.properties.cornerRadiusTopRight = 0;
//         hoverState.properties.fillOpacity = 1;

//         series.columns.template.adapter.add("fill", function (fill, target) {
//           return chart.colors.getIndex(target.dataItem.index);
//         });

//         // Cursor
//         chart.cursor = new am4charts.XYCursor();

//         nchart.current = chart;
//       })
//       .catch((e) => {
//         console.error("Error when creating chart", e);
//       });

//     return () => {
//       nchart.current.dispose();
//     };
//   }, [id]);

//   return (
//     <Grid item container direcion="column" className={classes.root}>
//       <LeagueGoalsHeader />
//       <Grid container>
//         <div
//           id={id}
//           ref={nchart}
//           style={{ width: 450, height: 285, backgroundColor: "#FFF" }}
//         ></div>
//       </Grid>
//     </Grid>
//   );
// });

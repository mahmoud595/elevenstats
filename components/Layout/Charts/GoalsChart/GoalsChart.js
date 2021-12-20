// import React, { useRef, useLayoutEffect } from "react";
// import makeStyles from "@mui/styles/makeStyles";
// // import * as am4core from "@amcharts/amcharts4/core";
// // import * as am4charts from "@amcharts/amcharts4/charts";
// import { useMediaQuery } from "@mui/material";

// const useStyles = makeStyles(({ palette }) => ({}));

// export const GoalsChart = React.memo(
//   ({ id, data = chartData, conceded, twoCharts, goalRange }) => {
//     const classes = useStyles();
//     const nchart = useRef(null);
//     const md = useMediaQuery("(max-width:1265px)");
//     const sm = useMediaQuery("(max-width:640px)");

//     useLayoutEffect(() => {
//       let chart;

//       const createChart = async () => {
//         const modules = await Promise.all([
//           import("@amcharts/amcharts4/core"),
//           import("@amcharts/amcharts4/charts"),
//         ]);
//         const am4core = modules[0];
//         const am4charts = modules[1];
//         am4core.addLicense(process.env.NEXT_AMCHART_LICENCE);

//         // const chartData = [
//         //   {
//         //     category: "FTS",
//         //     first: 6,
//         //     second: 2,
//         //     bullet1: "/liverpoolChart.png",
//         //     bullet2: "/unitedChart.png",
//         //     color1: am4core.color("#75AF63"),
//         //     color2: am4core.color("#D5435C"),
//         //   },
//         //   {
//         //     category: "OVER 0.5",
//         //     first: 3.5,
//         //     second: 1.5,
//         //     bullet1: "/liverpoolChart.png",
//         //     bullet2: "/unitedChart.png",
//         //     color1: am4core.color("#75AF63"),
//         //     color2: am4core.color("#D5435C"),
//         //   },
//         //   {
//         //     category: "OVER 1.5",
//         //     first: 6,
//         //     second: 1,
//         //     bullet1: "/liverpoolChart.png",
//         //     bullet2: "/unitedChart.png",
//         //     color1: am4core.color("#75AF63"),
//         //     color2: am4core.color("#D5435C"),
//         //   },
//         //   {
//         //     category: "OVER 2.5",
//         //     first: 4.8,
//         //     second: 3,
//         //     bullet1: "/liverpoolChart.png",
//         //     bullet2: "/unitedChart.png",
//         //     color1: am4core.color("#75AF63"),
//         //     color2: am4core.color("#D5435C"),
//         //   },
//         //   {
//         //     category: "OVER 3.5",
//         //     first: 5.5,
//         //     second: 3.5,
//         //     bullet1: "/liverpoolChart.png",
//         //     bullet2: "/unitedChart.png",
//         //     color1: am4core.color("#75AF63"),
//         //     color2: am4core.color("#D5435C"),
//         //   },
//         // ];

//         chart = am4core.create(id, am4charts.XYChart);

//         //xAxis

//         var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());

//         xAxis.dataFields.category = "name";
//         xAxis.renderer.cellStartLocation = 0.1;
//         xAxis.renderer.cellEndLocation = 0.7;

//         xAxis.renderer.grid.template.location = 30;
//         // xAxis.renderer.minGridDistance = 50;
//         xAxis.renderer.minGridDistance = 10;
//         // xAxis.renderer.maxGridDistance = 15;

//         xAxis.renderer.minLabelPosition = 0.05;
//         xAxis.renderer.maxLabelPosition = 0.95;

//         //labelx

//         var labelx = xAxis.renderer.labels.template;
//         labelx.horizontalCenter = "middle";

//         // new

//         if (data.length > 6) {
//           labelx.wrap = true;
//           labelx.maxWidth = 50;
//         } else {
//           labelx.maxWidth = 120;
//         }

//         labelx.tooltipText = "{name}";
//         // labelx.location = 0.4;
//         // labelx.maxWidth = 4;
//         labelx.fontSize = "1rem";
//         labelx.fontSize = twoCharts && conceded ? (md ? 9 : 7) : 9;
//         labelx.fontWeight = "600";
//         labelx.truncate = twoCharts && ((conceded && !md) || sm) && true;
//         labelx.maxWidth = twoCharts && (conceded && !md ? 80 : sm && 60);
//         labelx.resizable = true;

//         xAxis.adapter.add("getTooltipText", (text, target) => {
//           return ">>> " + text + " <<<";
//         });

//         //yAxis

//         var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
//         yAxis.min = 0;
//         //       yAxis.max = 100;
//         yAxis.renderer.minGridDistance = 20;
//         //labely

//         var labely = yAxis.renderer.labels.template;
//         labely.fontSize = 8;
//         labely.fontWeight = "800";

//         function createSeries(value, name, href, color) {
//           var series = chart.series.push(new am4charts.ColumnSeries());
//           series.dataFields.valueY = value;
//           series.dataFields.categoryX = "name";
//           series.name = name;

//           series.columns.template.tooltipText = "Value: {valueY}";
//           series.tooltip.fontSize = 10;
//           series.tooltip.fontWeight = "600";

//           //color

//           series.columns.template.propertyFields.fill = color;
//           series.columns.template.width = conceded
//             ? am4core.percent(70)
//             : am4core.percent(50);

//           //images

//           var bullet = series.bullets.push(new am4charts.Bullet());
//           var image = bullet.createChild(am4core.Image);

//           image.horizontalCenter = "middle";
//           image.verticalCenter = "middle";
//           image.width = 15;
//           image.height = 15;
//           image.y = am4core.percent(100);
//           image.propertyFields.href = href;
//           image.propertyFields.fill = "color";

//           return series;
//         }

//         chart.data = data;
//         chart.maskBullets = false;

//         createSeries("t1", "localName", "bullet1", "color1");
//         createSeries("t2", "visitorName", "bullet2", "color2");

//         nchart.current = chart;
//       };

//       createChart();
//       return () => {
//         // console.log("goals chart disposed");
//         chart?.dispose();
//       };
//     }, [data, conceded, md, twoCharts, goalRange]);

//     return (
//       <div
//         id={id}
//         ref={nchart}
//         style={{
//           width: "100%",
//           height: "100%",
//           flex: 1,
//           backgroundColor: "#FFF",
//         }}
//       ></div>
//     );
//   }
// );

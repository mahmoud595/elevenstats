// import React, { useRef, useLayoutEffect } from "react";

// // import * as am4core from "@amcharts/amcharts4/core";
// // import * as am4charts from "@amcharts/amcharts4/charts";

// export const SolidGaugeChart = ({ id = "SolidGaugeChartdiv" }) => {
//   // console.log(data);
//   //   const classes = useStyles();
//   const nChart = useRef(null);

//   useLayoutEffect(() => {
//     let chart;

//     const createChart = async () => {
//       const modules = await Promise.all([
//         import("@amcharts/amcharts4/core"),
//         import("@amcharts/amcharts4/charts"),
//       ]);
//       const am4core = modules[0];
//       const am4charts = modules[1];
//       am4core.addLicense(process.env.NEXT_PUBLIC_AMCHART_LICENCE);

//       // var chart = am4core.create(id, am4charts.RadarChart);

//       let container = am4core.create(id, am4core.Container);
//       container.width = 175;
//       container.height = 170;
//       container.layout = "horizontal";

//       let chart = container.createChild(am4charts.RadarChart);

//       // Add data
//       chart.data = [
//         {
//           category: "Research",
//           value: 70,
//           full: 100,
//           toolTipText:
//             "Adjusted rating based on the selected league for transfer.",
//         },
//         {
//           category: "Marketing",
//           value: 90,
//           full: 100,
//           toolTipText: "Original rating based on player's domestic league.",
//         },
//       ];

//       // Make chart not full circle
//       chart.startAngle = -90;
//       chart.endAngle = 180;
//       chart.innerRadius = am4core.percent(35);

//       // Set number format
//       // chart.numberFormatter.numberFormat = "#.#'%'";

//       // Create axes
//       var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
//       categoryAxis.dataFields.category = "category";
//       categoryAxis.renderer.grid.template.disabled = true;
//       categoryAxis.renderer.labels.template.disabled = true;
//       categoryAxis.renderer.minGridDistance = 10;

//       var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
//       valueAxis.renderer.grid.template.strokeOpacity = 0;
//       valueAxis.min = 0;
//       valueAxis.max = 100;
//       valueAxis.renderer.labels.template.disabled = true;
//       valueAxis.strictMinMax = true;

//       var series2 = chart.series.push(new am4charts.RadarColumnSeries());
//       series2.dataFields.valueX = "value";
//       series2.dataFields.categoryY = "category";
//       series2.clustered = false;
//       series2.columns.template.strokeWidth = 0;

//       series2.columns.template.tooltipText =
//         "[#022A54 font-size: 12px]{toolTipText}[/]";
//       series2.tooltip.getFillFromObject = false;

//       series2.tooltip.background.fill = am4core.color("#FFF");

//       series2.columns.template.radarColumn.cornerRadius = 20;

//       series2.columns.template.adapter.add("fill", function (fill, target) {
//         return target.dataItem.index === 0 ? "#FC7D58" : "#6DFFB9";
//       });

//       var label = chart.radarContainer.createChild(am4core.Label);
//       label.isMeasured = false;
//       label.fontSize = "2rem";
//       label.horizontalCenter = "middle";
//       label.verticalCenter = "middle";
//       label.moveTo({ x: -2, y: 3 });
//       label.text = "70";
//       label.fill = "#FC7D58";
//       // label.paddingBottom = 80;

//       var circle = container.createChild(am4core.Circle);
//       circle.fill = am4core.color("#FC7D58");
//       circle.opacity = 0.3;
//       circle.horizontalCenter = "left";
//       circle.verticalCenter = "top";
//       circle.moveTo({ x: 68, y: 68 });
//       // circle.horizontalCenter = "middle";
//       // circle.verticalCenter = "middle";
//       circle.height = 34;
//       circle.width = 34;
//       circle.isMeasured = false;

//       // Add cursor
//       // chart.cursor = new am4charts.RadarCursor();

//       // markerTemplate.dx = 50
//       nChart.current = chart;
//     };

//     createChart();
//     return () => {
//       // console.log("pie chart disposed");
//       chart?.dispose();
//     };
//     // Chart code goes here
//   }, [id]);
//   return <div id={id} ref={nChart}></div>;
// };

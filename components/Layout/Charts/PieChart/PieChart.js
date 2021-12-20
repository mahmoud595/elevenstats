// import React, { useRef, useLayoutEffect } from "react";
// import { useMediaQuery } from "@mui/material";

// // import * as am4core from "@amcharts/amcharts4/core";
// // import * as am4charts from "@amcharts/amcharts4/charts";

// export const PieChart = ({
//   id,
//   data,
//   innerRadius = 50,
//   strokeWidth = 0,
//   legendPosition = "left",
//   legendValign = "bottom",
//   h2h,
// }) => {
//   // console.log(data);
//   //   const classes = useStyles();
//   const nChart = useRef(null);
//   const sm = useMediaQuery("(max-width:640px)");

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

//       chart = am4core.create(id, am4charts.PieChart);
//       let newData = data;
//       if (h2h) {
//         newData = data.map(({ team, value, href, color }) => {
//           if (value === 0) {
//             return;
//           } else {
//             return {
//               team,
//               value,
//               href,
//               color,
//             };
//           }
//         });
//       }

//       chart.data = newData;

//       var pieSeries = chart.series.push(new am4charts.PieSeries());
//       pieSeries.dataFields.value = "value";
//       pieSeries.dataFields.category = "team";
//       pieSeries.slices.template.propertyFields.fill = "color";
//       pieSeries.slices.template.stroke = am4core.color("#fff");
//       pieSeries.slices.template.strokeWidth = strokeWidth;
//       pieSeries.slices.template.strokeOpacity = 1;

//       pieSeries.ticks.template.disabled = true;
//       if (!h2h) {
//         pieSeries.labels.template.disabled = true;
//       }
//       if (h2h) {
//         pieSeries.alignLabels = false;
//         pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
//         pieSeries.labels.template.radius = am4core.percent(-40);
//         pieSeries.labels.template.fill = am4core.color("white");
//         pieSeries.labels.template.fontSize = sm ? 8 : 12;
//       }

//       // Let's cut a hole in our Pie chart the size of 40% the radius
//       chart.innerRadius = am4core.percent(innerRadius);

//       // Disable ticks and labels

//       // Disable tooltips
//       // pieSeries.slices.template.tooltipText = '';
//       if (!h2h) {
//         let label1 = pieSeries.createChild(am4core.Label);
//         label1.align = "center";
//         label1.horizontalCenter = "middle";
//         label1.verticalCenter = "bottom";
//         label1.text = "[#46103F  text-transform: uppercase]Overall[/] ";
//         label1.fontSize = 10;

//         let label2 = pieSeries.createChild(am4core.Label);
//         label2.align = "center";
//         label2.horizontalCenter = "middle";
//         label2.verticalCenter = "top";
//         label2.text = "[bold #46103F]{values.value.sum}[/] ";
//         label2.fontSize = 10;
//       }

//       // Add a legend
//       chart.legend = new am4charts.Legend();
//       chart.legend.position = legendPosition;
//       chart.legend.valign = legendValign;
//       chart.legend.fontSize = 12;

//       pieSeries.legendSettings.valueText = "{value}";
//       var marker = chart.legend.markers.template;
//       // marker.disposeChildren();
//       marker.width = h2h ? 20 : 10;
//       marker.height = h2h ? 20 : 10;

//       /* Add custom image instead */
//       if (h2h) {
//         chart.legend.width = 140;
//         var flag = marker.createChild(am4core.Image);
//         flag.width = 20;
//         flag.height = 20;
//         flag.dx = 120;
//         flag.dy = 10;

//         flag.verticalCenter = "middle";
//         flag.horizontalCenter = "right";
//         flag.propertyFields.href = "href";
//         // flag.href =
//         //   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/flag_sweden.svg';
//         //   flag.
//       }

//       // markerTemplate.dx = 50
//       nChart.current = chart;
//     };

//     createChart();
//     return () => {
//       // console.log("pie chart disposed");
//       chart?.dispose();
//     };
//     // Chart code goes here
//   }, [id, data, innerRadius, strokeWidth, legendPosition, legendValign, sm]);
//   return (
//     <div id={id} ref={nChart} style={{ width: "100%", height: "100%" }}></div>
//   );
// };

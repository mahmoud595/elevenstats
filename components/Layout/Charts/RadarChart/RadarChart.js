// import { useRef, useLayoutEffect } from "react";

// const data = [
//   {
//     attribute: "Off the ball movement",
//     value: 90,
//     color: "#1BD47B",
//   },
//   {
//     attribute: "Build up passing",
//     value: 83,
//     color: "#00A249",
//   },
//   {
//     attribute: "Final third passing",
//     value: 63,
//     color: "#FC7D58",
//   },
//   {
//     attribute: "Passing efficiency",
//     value: 81,
//     color: "#00A249",
//   },
//   {
//     attribute: "penalties",
//     value: 90,
//     color: "#1BD47B",
//   },
//   {
//     attribute: "Crossing",
//     value: 33,
//     color: "#D7A300",
//   },
//   {
//     attribute: "Dribbling",
//     value: 82,
//     color: "#00A249",
//   },
//   {
//     attribute: "Finishing",
//     value: 65,
//     color: "#FC7D58",
//   },
// ];
// export const RadarChart = ({ id }) => {
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
//       am4core.options.autoSetClassName = true;
//       am4core.addLicense(process.env.NEXT_PUBLIC_AMCHART_LICENCE);

//       var chart = am4core.create(id, am4charts.RadarChart);

//       chart.data = data;

//       var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//       valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
//       valueAxis.renderer.axisFills.template.fillOpacity = 0;

//       var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//       categoryAxis.dataFields.category = "attribute";

//       categoryAxis.renderer.labels.template.adapter.add(
//         "text",
//         function (text) {
//           // let label = categoryAxis.createChild(am4core.Label);

//           // label.dy = 100;
//           // console.log(label.dy);
//           const label = "{value}";
//           console.log(label);
//           const label2 = `[font-size:12px #5B7590]${text} [#fff]... [{color} font-size:13px font-weight:600]${label}`;
//           // label.fontSize = 12;

//           return label2;
//         }
//       );
//       var series = chart.series.push(new am4charts.RadarSeries());
//       series.dataFields.valueY = "value";
//       series.dataFields.categoryX = "attribute";

//       series.name = "attributes";
//       series.strokeWidth = 2;

//       var circle = series.bullets.push(new am4charts.CircleBullet());
//       circle.fill = "#1890FF";
//       series.sequencedInterpolation = true;
//       series.tooltip.pointerOrientation = "vertical";
//       series.stroke = "#246BFD";
//       series.fillOpacity = 0.6;
//       series.fill = "#CDDCFB";
//     };
//     createChart();
//     return () => {
//       // console.log("pie chart disposed");
//       chart?.dispose();
//     };
//   }, []);

//   return (
//     <div id={id} ref={nChart} style={{ width: "100%", height: "100%" }}></div>
//   );
// };

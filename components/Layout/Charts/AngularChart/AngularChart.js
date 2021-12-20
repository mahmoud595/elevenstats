// import dynamic from "next/dynamic";

// import React, { useRef, useLayoutEffect } from "react";
// import { Grid, Typography, Button } from "@mui/material";
// import makeStyles from "@mui/styles/makeStyles";
// // import * as am4core from "@amcharts/amcharts4/core";
// // import * as am4charts from "@amcharts/amcharts4/charts";

// // const am4core = dynamic(import("@amcharts/amcharts4/core"), {
// //   // ssr: false,
// //   suspense: true,
// // });

// // const am4charts = dynamic(import("@amcharts/amcharts4/charts"), {
// //   // ssr: false,
// //   suspense: true,
// // });

// export const AngularChart = ({ winner }) => {
//   const nchart = useRef(null);

//   useLayoutEffect(() => {
//     let chart;
//     // Promise.all([
//     //   import("@amcharts/amcharts4/core"),
//     //   import("@amcharts/amcharts4/charts"),
//     // ])

//     //   .then((modules) => {
//     const createChart = async () => {
//       const modules = await Promise.all([
//         import("@amcharts/amcharts4/core"),
//         import("@amcharts/amcharts4/charts"),
//       ]);
//       const am4core = modules[0];
//       const am4charts = modules[1];
//       am4core.addLicense(process.env.NEXT_PUBLIC_AMCHART_LICENCE);
//       chart = am4core.create("chartdiv", am4charts.GaugeChart);
//       nchart.current = chart;
//       var chartMin = -100;
//       var chartMax = 100;

//       var data = {
//         score: winner
//           ? winner[1] > 100
//             ? 100
//             : winner[1] < -100
//             ? -100
//             : winner[1]
//           : 0,
//         gradingData: [
//           {
//             color: "#11C56E",
//             lowScore: -100,
//             highScore: -80,
//           },
//           {
//             color: "#2CE58C",
//             lowScore: -80,
//             highScore: -60,
//           },
//           {
//             color: "#F6C205",
//             lowScore: -60,
//             highScore: -40,
//           },
//           {
//             color: "#F37056",
//             lowScore: -40,
//             highScore: -20,
//           },
//           {
//             color: "#F35655",
//             lowScore: -20,
//             highScore: 0,
//           },
//           {
//             color: "#F35655",
//             lowScore: 0,
//             highScore: 20,
//           },
//           {
//             color: "#F37056",
//             lowScore: 20,
//             highScore: 40,
//           },
//           {
//             color: "#F6C205",
//             lowScore: 40,
//             highScore: 60,
//           },
//           {
//             color: "#2CE58C",
//             lowScore: 60,
//             highScore: 80,
//           },
//           {
//             color: "#11C56E",
//             lowScore: 80,
//             highScore: 100,
//           },
//         ],
//       };

//       /**
//   Grading Lookup
//    */
//       function lookUpGrade(lookupScore, grades) {
//         // Only change code below this line
//         for (var i = 0; i < grades.length; i++) {
//           if (
//             grades[i].lowScore < lookupScore &&
//             grades[i].highScore >= lookupScore
//           ) {
//             return grades[i];
//           }
//         }
//         return null;
//       }

//       // create chart

//       chart.hiddenState.properties.opacity = 0;
//       chart.fontSize = 11;
//       chart.innerRadius = am4core.percent(80);
//       chart.resizable = true;

//       /**
//        * Normal axis
//        */

//       var axis = chart.xAxes.push(new am4charts.ValueAxis());
//       axis.min = chartMin;
//       axis.max = chartMax;
//       axis.strictMinMax = true;
//       axis.renderer.radius = am4core.percent(80);
//       axis.renderer.inside = true;
//       axis.renderer.line.strokeOpacity = 1;
//       axis.renderer.ticks.template.disabled = false;
//       axis.renderer.ticks.template.strokeOpacity = 1;
//       axis.renderer.ticks.template.strokeWidth = 0.5;
//       axis.renderer.ticks.template.length = 5;
//       axis.renderer.grid.template.disabled = true;
//       axis.renderer.labels.template.radius = am4core.percent(18);
//       axis.renderer.labels.template.fontSize = "0.6em";

//       /**
//        * Axis for ranges
//        */

//       var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
//       axis2.min = chartMin;
//       axis2.max = chartMax;
//       axis2.strictMinMax = true;
//       axis2.renderer.labels.template.disabled = true;
//       axis2.renderer.ticks.template.disabled = true;
//       axis2.renderer.grid.template.disabled = false;
//       axis2.renderer.grid.template.opacity = 0.5;
//       axis2.renderer.labels.template.bent = true;
//       axis2.renderer.labels.template.fill = am4core.color("#000");
//       axis2.renderer.labels.template.fontWeight = "bold";
//       axis2.renderer.labels.template.fillOpacity = 1;

//       /**
//   Ranges
//   */

//       for (let grading of data.gradingData) {
//         var range = axis2.axisRanges.create();
//         range.axisFill.fill = am4core.color(grading.color);
//         range.axisFill.fillOpacity = 1;
//         range.axisFill.zIndex = -1;
//         range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
//         range.endValue =
//           grading.highScore < chartMax ? grading.highScore : chartMax;
//         range.grid.strokeOpacity = 0;
//         range.stroke = am4core.color(grading.color).lighten(-0.1);
//         range.label.inside = true;
//         // range.label.text = grading.title.toUpperCase();
//         range.label.inside = true;
//         range.label.location = 0.5;
//         range.label.inside = true;
//         range.label.radius = am4core.percent(10);
//         range.label.paddingBottom = -5; // ~half font size
//         range.label.fontSize = "0.9em";
//       }

//       // var matchingGrade = lookUpGrade(data.score, data.gradingData);

//       /**
//        * Label 1
//        */

//       var label = chart.radarContainer.createChild(am4core.Label);
//       label.isMeasured = false;
//       label.fontSize = "1rem";
//       label.horizontalCenter = "middle";
//       label.verticalCenter = "middle";
//       label.moveTo({ x: 0, y: 8 });
//       label.text = winner ? `${winner[0]} Is` : "Both Teams are";
//       label.fill = "black";
//       label.paddingBottom = 80;

//       /**
//        * Label 2
//        */

//       var label2 = chart.radarContainer.createChild(am4core.Label);
//       label2.isMeasured = false;
//       label2.fontSize = "1rem";
//       label2.x = am4core.percent(50);
//       // label2.paddingBottom = 15;
//       label2.horizontalCenter = "middle";
//       label2.verticalCenter = "middle";
//       //label.dataItem = data;
//       // label.text = "Liverpool"
//       //label.text = "{score}";
//       label2.paddingBottom = 35;

//       /**
//        * Label 3
//        */

//       var label3 = chart.radarContainer.createChild(am4core.Label);
//       label3.isMeasured = false;
//       label3.fontSize = "1rem";
//       label3.horizontalCenter = "middle";
//       label3.verticalCenter = "middle";
//       label3.text = "In Terms Of\n Points Per Game";
//       label3.textAlign = "middle";
//       label3.fill = "black";
//       // label3.paddingBottom = 10;

//       /**
//        * Hand
//        */

//       var hand = chart.hands.push(new am4charts.ClockHand());
//       hand.axis = axis2;
//       hand.innerRadius = am4core.percent(55);
//       hand.startWidth = 8;
//       hand.pin.disabled = true;
//       hand.value = data.score;
//       hand.fill = am4core.color("#444");
//       hand.stroke = am4core.color("#000");

//       hand.events.on("positionchanged", function () {
//         label2.text = winner ? `${Math.abs(winner[1])}% Better` : "equal";
//         // var value2 = axis.positionToValue(hand.currentPosition);
//         var matchingGrade = lookUpGrade(
//           axis.positionToValue(hand.currentPosition),
//           data.gradingData
//         );

//         // label2.text = matchingGrade.title.toUpperCase();
//         label2.fill = am4core.color(matchingGrade?.color);
//       });
//     };

//     createChart();
//     return () => {
//       // nchart.current.dispose();
//       // console.log("angular chart disposed");

//       chart?.dispose();
//     };
//     // Chart code goes here
//     // })
//     // .catch((e) => {
//     //   console.error("Error when creating chart", e);
//     // });
//   }, [winner]);

//   return (
//     <Grid container style={{ width: "100%", height: "100%" }}>
//       <div
//         id="chartdiv"
//         ref={nchart}
//         style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}
//       ></div>
//     </Grid>
//   );
// };

// import React, { useRef, useLayoutEffect, useState } from "react";
// import { useMediaQuery, Typography } from "@mui/material";

// // import * as am4core from "@amcharts/amcharts4/core";
// // import * as am4charts from "@amcharts/amcharts4/charts";

// export const TopFivePlayersChart = ({
//   id,
//   data,
//   color = "rgba(251, 82, 102, 1)",
//   goalsType,
//   cardsType,
//   maxValue,
// }) => {
//   //   const classes = useStyles();
//   const nChart = useRef(null);
//   // console.log(goalsType, cardsType);
//   const sm = useMediaQuery("(max-width:640px)");
//   const [count, setCount] = useState();
//   let num = 0;
//   useLayoutEffect(() => {
//     let chart;
//     console.log("run effect");
//     const createChart = async () => {
//       // Promise.all([
//       //   import("@amcharts/amcharts4/core"),
//       //   import("@amcharts/amcharts4/charts"),
//       // ])
//       //   .then((modules) => {

//       const modules = await Promise.all([
//         import("@amcharts/amcharts4/core"),
//         import("@amcharts/amcharts4/charts"),
//       ]);
//       const am4core = modules[0];
//       const am4charts = modules[1];
//       am4core.addLicense(process.env.NEXT_PUBLIC_AMCHART_LICENCE);

//       chart = am4core.create(id, am4charts.XYChart);
//       nChart.current = chart;
//       chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

//       chart.paddingBottom = 30;
//       // chart.paddingTop = 30;

//       data.forEach(({ player, goals, cards, goalsPerMatch, cardsPerMatch }) => {
//         if (
//           (goalsType === "total" && goals !== 0) ||
//           (goalsType === "perMatch" && goalsPerMatch !== 0) ||
//           (cardsType === "total" && cards !== 0) ||
//           (cardsType === "perMatch" && cardsPerMatch !== 0)
//         ) {
//           let value = goalsType
//             ? goalsType === "total"
//               ? goals
//               : goalsPerMatch?.toFixed(2)
//             : cardsType
//             ? cardsType === "total"
//               ? cards
//               : cardsPerMatch?.toFixed(2)
//             : 0;

//           chart.data.push({
//             name:
//               player?.commonName?.length >= 15
//                 ? `${player?.commonName?.slice(0, 12)}...`
//                 : player?.commonName,
//             steps: value,
//             href: player?.imagePath || "",
//             steps2: 8,
//             playerCountry: player?.country?.imagePath || "",
//             maxValue: maxValue,
//           });
//         } else {
//           num++;
//           setCount(num);
//         }
//       });

//       var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//       categoryAxis.dataFields.category = "name";
//       categoryAxis.renderer.grid.template.strokeOpacity = 0;
//       // categoryAxis.renderer.grid.template.width = 10;
//       categoryAxis.renderer.minGridDistance = 10;
//       categoryAxis.renderer.labels.template.dy = 35;
//       categoryAxis.renderer.tooltip.dy = 35;
//       categoryAxis.renderer.labels.template.fontSize = sm ? 8 : 12;
//       // categoryAxis.renderer.labels.template.truncate = true;
//       // categoryAxis.renderer.labels.template.maxWidth = sm ? 70 : 100;
//       // categoryAxis.renderer.cellStartLocation = -0.5;
//       // categoryAxis.renderer.cellStartLocation = 0.5;
//       // categoryAxis.renderer.cellStartLocation = 0;
//       // categoryAxis.renderer.cellEndLocation = 1;

//       var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//       valueAxis.renderer.inside = true;
//       valueAxis.renderer.labels.template.disabled = true;
//       valueAxis.renderer.grid.template.strokeOpacity = 0;
//       valueAxis.min = 0;
//       valueAxis.max = +maxValue >= 1 ? maxValue + 1 : +maxValue + 0.05;

//       valueAxis.cursorTooltipEnabled = false;
//       valueAxis.renderer.baseGrid.strokeOpacity = 0;

//       var newseries = chart.series.push(new am4charts.ColumnSeries());
//       newseries.dataFields.valueY = "maxValue";
//       newseries.dataFields.categoryX = "name";
//       // newseries.columnsContainer.zIndex = 10000;
//       newseries.clustered = false;
//       // newseries.mainContainer.mask = undefined;

//       var bullet3 = newseries.bullets.push(new am4charts.Bullet());
//       bullet3.dy = -15;
//       bullet3.zIndex = 9000;
//       var image2 = bullet3.createChild(am4core.Image);
//       image2.width = sm ? 28 : 40;
//       image2.height = 22;
//       image2.zIndex = 9000;
//       image2.horizontalCenter = "middle";
//       image2.verticalCenter = "middle";
//       image2.propertyFields.href = "playerCountry";
//       // image2.filters.push(new am4core.DropShadowFilter());

//       var columnTemplate2 = newseries.columns.template;
//       // columnTemplate2.width = sm ? am4core.percent(30) : am4core.percent(30);
//       columnTemplate2.width = sm ? 28 : 40;
//       columnTemplate2.column.cornerRadius(60, 60, 10, 10);
//       columnTemplate2.strokeOpacity = 0;
//       var gradient = new am4core.LinearGradient();
//       gradient.addColor("rgba(234, 237, 242, 1)");
//       gradient.addColor("rgba(234, 237, 242, 0.4)");
//       gradient.rotation = 90;
//       columnTemplate2.fill = gradient;

//       var series = chart.series.push(new am4charts.ColumnSeries());
//       series.dataFields.valueY = "steps";
//       series.dataFields.categoryX = "name";

//       // series.columnsContainer.zIndex = 100;
//       series.columns.template.width = am4core.percent(30);
//       series.columns.template.tooltipText = "{name} : {valueY}";
//       series.tooltip.label.fontSize = 14;
//       var columnTemplate = series.columns.template;
//       // columnTemplate.width = sm ? am4core.percent(30) : am4core.percent(30);
//       columnTemplate.width = sm ? 28 : 40;
//       // columnTemplate.maxWidth = 45;

//       columnTemplate.column.cornerRadius(60, 60, 0, 0);
//       columnTemplate.strokeOpacity = 0;
//       var gradient = new am4core.LinearGradient();
//       gradient.addColor(am4core.color(color));

//       columnTemplate.fill = gradient;

//       series.mainContainer.mask = undefined;

//       var bullet = columnTemplate.createChild(am4charts.CircleBullet);
//       bullet.circle.radius = sm ? 13 : 20;
//       bullet.valign = "bottom";
//       bullet.align = "center";
//       bullet.isMeasured = true;
//       bullet.mouseEnabled = false;
//       bullet.verticalCenter = "middle";
//       bullet.interactionsEnabled = false;
//       bullet.dy = 14;

//       var bullet2 = series.bullets.push(new am4charts.LabelBullet());
//       bullet2.label.text = "{steps}";
//       bullet2.label.fill = am4core.color("#FFF");
//       bullet2.label.fontWeight = 700;
//       bullet2.label.fontSize = sm ? 8 : 10;
//       bullet2.locationY = 0.2;
//       bullet2.zIndex = 2;

//       var outlineCircle = bullet.createChild(am4core.Circle);

//       outlineCircle.adapter.add("radius", function (radius, target) {
//         var circleBullet = target.parent;

//         return circleBullet.circle.pixelRadius + 5;
//       });
//       outlineCircle.adapter.add("fill", function (radius, target) {
//         var circleBullet = target.parent;

//         return (circleBullet.circle.fill = am4core.color("#EFF1F5"));
//       });
//       var image = bullet.createChild(am4core.Image);
//       image.width = sm ? 30 : 40;
//       image.height = sm ? 30 : 40;
//       image.horizontalCenter = "middle";
//       image.verticalCenter = "middle";
//       image.propertyFields.href = "href";
//       // image.dy = 5;

//       image.adapter.add("mask", function (mask, target) {
//         var circleBullet = target.parent;
//         return circleBullet.circle;
//       });
//     };

//     createChart();
//     return () => {
//       console.log("player chart disposed 1");
//       chart?.dispose();
//       // console.log("player chart disposed 2");
//       // if (nChart?.current) {
//       //   nChart?.current?.dispose();
//       // }
//     };
//     // })
//     // .catch((e) => {
//     //   console.error("Error when creating chart", e);
//     // });
//   }, [id, data, color, sm, maxValue]);

//   return (
//     <>
//       {count == data?.length || !data?.length ? (
//         <Typography>No Data Yet For This Season</Typography>
//       ) : (
//         <div
//           id={id}
//           ref={nChart}
//           style={{ width: "100%", height: "100%" }}
//         ></div>
//       )}
//     </>
//   );
// };

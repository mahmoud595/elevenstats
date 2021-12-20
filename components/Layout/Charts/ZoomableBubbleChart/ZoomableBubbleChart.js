// import React, { useRef, useLayoutEffect, useState } from "react";
// import { useMediaQuery } from "@mui/material";

// export const ZoomableBubbleChart = ({ id, chartExporting, mark, history }) => {
//   const nChart = useRef(null);
//   const sm = useMediaQuery("(max-width:907px)");
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

//       chart = am4core.create(id, am4charts.XYChart);
//       nChart.current = chart;
//       chart.hiddenState.properties.opacity = 0;

//       /**
//        * ---------------------------------------
//        * This demo was created using amCharts 4.
//        *
//        * For more information visit:
//        * https://www.amcharts.com/
//        *
//        * Documentation is available at:
//        * https://www.amcharts.com/docs/v4/
//        * ---------------------------------------
//        */

//       // Themes begin

//       // Themes end

//       var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
//       valueAxisX.renderer.ticks.template.disabled = true;
//       valueAxisX.renderer.axisFills.template.disabled = true;
//       valueAxisX.min = 0;
//       valueAxisX.max = 100;
//       var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
//       valueAxisY.renderer.ticks.template.disabled = true;
//       valueAxisY.renderer.axisFills.template.disabled = true;
//       valueAxisY.min = 0;
//       valueAxisY.max = 100;
//       var series = chart.series.push(new am4charts.LineSeries());
//       series.dataFields.valueX = "x";
//       series.dataFields.valueY = "y";
//       series.dataFields.value = "value";
//       series.strokeOpacity = 0;
//       series.sequencedInterpolation = true;
//       series.tooltip.pointerOrientation = "vertical";

//       var bullet = series.bullets.push(new am4core.Circle());
//       bullet.fill = am4core.color("#ff0000");
//       bullet.propertyFields.fill = "color";
//       bullet.strokeOpacity = 0;
//       bullet.strokeWidth = 2;
//       bullet.fillOpacity = 0.5;
//       bullet.stroke = am4core.color("#ffffff");
//       bullet.hiddenState.properties.opacity = 0;
//       bullet.tooltipText =
//         "Shooting: {valueX.value}\nGoalKeeping:{valueY.value}";

//       var outline = chart.plotContainer.createChild(am4core.Circle);
//       outline.fillOpacity = 0;
//       outline.strokeOpacity = 0.8;
//       outline.stroke = am4core.color("#ff0000");
//       outline.strokeWidth = 2;
//       outline.hide(0);

//       var blurFilter = new am4core.BlurFilter();
//       outline.filters.push(blurFilter);

//       bullet.events.on("over", function (event) {
//         var target = event.target;
//         outline.radius = target.pixelRadius + 2;
//         outline.x = target.pixelX;
//         outline.y = target.pixelY;
//         outline.show();
//       });

//       bullet.events.on("out", function (event) {
//         outline.hide();
//       });

//       var hoverState = bullet.states.create("hover");
//       hoverState.properties.fillOpacity = 1;
//       hoverState.properties.strokeOpacity = 1;

//       history
//         ? series.heatRules.push({
//             target: bullet,
//             min: 2,
//             max: 30,
//             property: "radius",
//           })
//         : series.heatRules.push({
//             target: bullet,
//             min: 2,
//             max: 60,
//             property: "radius",
//           });

//       bullet.adapter.add("tooltipY", function (tooltipY, target) {
//         return -target.radius;
//       });
//       if (!history) {
//         chart.cursor = new am4charts.XYCursor();
//         chart.cursor.behavior = "zoomXY";
//         chart.cursor.snapToSeries = series;

//         chart.scrollbarX = new am4core.Scrollbar();
//         chart.scrollbarY = new am4core.Scrollbar();
//       }

//       chart.data = [
//         {
//           color: "#eea638",
//           value: 1,
//           x: 15,
//           y: 77.185,
//         },
//         {
//           color: "#d8854f",
//           x: 30,
//           y: 77.185,
//           value: 0.9,
//         },
//         {
//           color: "#de4c4f",
//           x: 50,
//           y: 70.874,
//           value: 0.8,
//         },
//         {
//           color: "#de4c4f",
//           x: 10,
//           y: 51.498,
//           value: 0.7,
//         },
//         {
//           color: "#86a965",
//           x: 70,
//           y: 76.128,
//           value: 0.7,
//         },

//         {
//           color: "#8aabb0",
//           x: 90,
//           y: 76.128,
//           value: 0.6,
//         },
//       ];

//       chartExporting && chartExporting(chart);

//       //   var options = chart.exporting.getFormatOptions("png");
//       //   options.keepTainted = true;
//       //   chart.exporting.setFormatOptions("png");
//       let watermark;
//       watermark = mark && new am4core.Image();
//       if (watermark) {
//         watermark.href = "/Eleven-Stats-Watermark.png";
//         chart.plotContainer.children.push(watermark);
//         watermark.align = "center";
//         watermark.valign = "center";
//         watermark.marginRight = 10;
//         watermark.marginBottom = 5;
//         watermark.width = sm ? 370 : 600;
//         watermark.height = 400;
//       }

//       //   var pattern = new am4core.Pattern();
//       //   pattern.addElement(watermark.group);
//       //   pattern.width = 550;
//       //   pattern.height = 300;
//       //   pattern.x = 20;
//     };
//     createChart();

//     return () => {
//       chart?.dispose();
//       // console.log("player chart disposed 2");
//       // if (nChart?.current) {
//       //   nChart?.current?.dispose();
//       // }
//     };
//   }, [id, sm]);
//   return (
//     <div
//       id={id}
//       ref={nChart}
//       style={{
//         width: "100%",
//         height: "100%",
//         // background: "center no-repeat url('./Eleven Stats Watermark.png')",
//         // backgroundSize: "50% 40px",
//       }}
//     ></div>
//   );
// };

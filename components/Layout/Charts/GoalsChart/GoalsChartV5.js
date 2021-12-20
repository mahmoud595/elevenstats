import React, { useRef, useLayoutEffect, useState } from "react";
import { useMediaQuery, Typography } from "@mui/material";

// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";

export const GoalsChartV5 = ({ id, data, conceded, twoCharts, goalRange }) => {
  const md = useMediaQuery("(max-width:1265px)");
  const sm = useMediaQuery("(max-width:640px)");
  const nchart = useRef(null);
  console.log(data, id, conceded, twoCharts);
  useLayoutEffect(() => {
    let chart;
    let root;
    const createChart = async () => {
      const modules = await Promise.all([
        import("@amcharts/amcharts5"),
        import("@amcharts/amcharts5/xy"),
      ]);
      const am5 = modules[0];
      const am5xy = modules[1];
      root = am5.Root.new(id);
      am5.addLicense(process.env.NEXT_PUBLIC_AMCHART_LICENCE);

      root.container.children.push(am5xy.XYChart.new(root, {}));
      chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
        })
      );

      var xRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 10,
        cellStartLocation: 0.1,
        cellEndLocation: 0.7,
      });
      xRenderer.labels.template.setAll({
        minPosition: 0.05,
        maxPosition: 0.95,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15,
      });

      var xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "name",
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {}),
        })
      );
      xAxis.get("renderer").labels.template.setAll({
        textAlign: "center",
        oversizedBehavior: twoCharts && ((conceded && !md) || sm) && "truncate",
        maxWidth: twoCharts && (conceded && !md ? 80 : sm && 60),
        fontSize: twoCharts && conceded ? (md ? 9 : 7) : 9,
      });

      var yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 0.3,
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      yAxis.get("renderer").labels.template.setAll({
        fontSize: 8,
      });

      function createSeries(value, name, href, color) {
        var series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: value,
            categoryXField: "name",

            tooltip: am5.Tooltip.new(root, {
              //   labelText: "Value: {valueY}",
              fontSize: 10,
            }),
          })
        );

        series.columns.template.setAll({
          cornerRadiusTL: 10,
          cornerRadiusTR: 10,
          templateField: color,
        });
        // series.columns.template.adapters.add("fill", (fill, target) => {
        //   return color;
        // });
        let circleTemplate = am5.Template.new({});

        // series.bullets.push(function () {
        //   let bulletContainer = am5.Container.new(root, {});
        //   let circle = bulletContainer.children.push(
        //     am5.Circle.new(
        //       root,
        //       {
        //         radius: 25,
        //       },
        //       circleTemplate
        //     )
        //   );
        //   let maskCircle = bulletContainer.children.push(
        //     am5.Circle.new(root, { radius: 27 })
        //   );
        //   let imageContainer = bulletContainer.children.push(
        //     am5.Container.new(root, {
        //       mask: maskCircle,
        //     })
        //   );
        //   let image = imageContainer.children.push(
        //     am5.Picture.new(root, {
        //       templateField: href,
        //       centerX: am5.p50,
        //       centerY: am5.p50,
        //       width: 40,
        //       height: 40,
        //     })
        //   );

        // });
        series.bullets.push(function (root, series, dataItem) {
          return am5.Bullet.new(root, {
            locationY: 1,
            sprite: am5.Picture.new(root, {
              width: 24,
              height: 24,
              centerY: am5.p50,
              centerX: am5.p50,

              src: dataItem.dataContext[`${href}`],
            }),
          });
        });

        series.data.setAll(data);
        series.appear(1000);

        // series.columns.template.adapters.add("fill", (fill, target) => {
        //   return color;
        // });
      }

      chart.appear(1000, 100);
      xAxis.data.setAll(data);

      createSeries("t1", "localName", "bullet1", "color1");
      createSeries("t2", "visitorName", "bullet2", "color2");
      nchart.current = chart;
    };
    createChart();
    return () => {
      chart?.dispose();
    };
  }, [id, data, conceded, twoCharts, goalRange]);
  return (
    <div
      id={id}
      ref={nchart}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#FFF",
      }}
    ></div>
  );
};

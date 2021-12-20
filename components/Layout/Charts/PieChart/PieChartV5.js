import React, { useRef, useLayoutEffect } from "react";
import { useMediaQuery } from "@mui/material";

export const PieChartV5 = ({
  id,
  data,
  innerRadius = 50,
  strokeWidth = 0,
  legendPosition = "left",
  legendValign = "bottom",
  h2h,
}) => {
  const nChart = useRef(null);
  const sm = useMediaQuery("(max-width:640px)");
  const md = useMediaQuery("(max-width:960px)");
  useLayoutEffect(() => {
    let chart;
    let root;
    const createChart = async () => {
      const modules = await Promise.all([
        import("@amcharts/amcharts5/index"),
        import("@amcharts/amcharts5/percent"),
        import("@amcharts/amcharts5/themes/Responsive"),
      ]);
      const am5 = modules[0];
      const am5percent = modules[1];
      const ResponsiveTheme = modules[2];
      am5.addLicense(process.env.NEXT_PUBLIC_AMCHART_LICENCE);
      root = am5.Root.new(id);
      const responsive = ResponsiveTheme.default.newEmpty(root);

      chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          innerRadius: innerRadius,
        })
      );

      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "team",
          alignLabels: h2h && false,
          legendLabelText: "[fontSize: 12px fontWeight: 600]{team}[/]",
          legendValueText: "[fontSize: 12px fontWeight: 600]{value}[/]",
        })
      );

      let newData = data;
      let colors = [];
      if (h2h) {
        newData = data.map(({ team, value, href, color }) => {
          series.get("colors").set("colors", colors);
          if (value === 0) {
            colors.push(null);
            series.slices.template.set("stroke", null);

            return {
              team: null,
              value: null,
              href: null,
              color: null,
            };
          } else {
            colors.push(color);

            series.slices.template.set("stroke", am5.color("#Fff"));

            return {
              team,
              value,
              href,
              color,
            };
          }
        });
      }

      series.ticks.template.set("visible", false);
      if (!h2h) {
        series.labels.template.set("visible", false);
      }
      if (h2h) {
        series.labels.template.setAll({
          radius: am5.percent(10),
          fill: am5.color("#fff"),
          //   text: "{value.percent.formatNumber('#.0')}%",
          text: "[]{value}[/]",
          x: am5.percent(50),
          centerX: am5.percent(50),
          fontSize: sm ? 8 : 12,
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 40,
          paddingRight: 40, // centerX: am5.percent(50),
          textAlign: "center",
        });
      }

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Picture.new(root, {
            width: 32,
            height: 32,
            x: am5.percent(45),
            y: am5.percent(10),
            centerX: am5.percent(50),
            centerY: am5.percent(50),
            // src: series.data.values.href,
          }),
        });
      });

      series.ticks.template.setAll({
        strokeWidth: strokeWidth,
        strokeOpacity: 1,
      });

      if (!h2h) {
        let label1 = chart.children.push(
          am5.Label.new(root, {
            textAlign: "center",
            centerX: am5.percent(50),
            centerY: am5.percent(100),
            text: "[#46103F  text-transform: uppercase]Overall[/] ",
            fontSize: 10,
          })
        );
        label1.data.setAll(series.dataItems);

        let label2 = chart.children.push(
          am5.Label.new(root, {
            textAlign: "center",
            centerX: am5.percent(50),
            centerY: am5.percent(0),
            text: "[bold #46103F]{values.value.sum}[/] ",
            fontSize: 10,
          })
        );
        label2.data.setAll(series.dataItems);
      }
      var legend = chart.children.push(
        am5.Legend.new(root, {
          name: "legends",
          centerX: am5.percent(50),
          x: am5.percent(90),
          y: am5.percent(30),
          marginTop: 15,
          marginRight: 30,
          layout: root.verticalLayout,
          width: 140,
        })
      );

      responsive.addRule({
        name: "sprite",
        relevant: (width, height) => (width < md ? 900 : 700),
        applying: function () {
          chart.set("layout", root.horizontalLayout);
          legend.set("centerX", am5.percent(0));
          legend.set("x", am5.percent(md ? 50 : 75));
        },
      });
      root.setThemes([responsive]);
      series.data.setAll(newData);
      series.appear();
      chart.appear(1000, 100);
      console.log(series.dataItems);
      legend.data.setAll(series.dataItems);
    };
    createChart();
    return () => {
      chart?.dispose();
    };
  }, [
    id,
    data,
    innerRadius,
    strokeWidth,
    legendPosition,
    legendValign,
    sm,
    md,
  ]);
  return (
    <div id={id} ref={nChart} style={{ width: "100%", height: "100%" }}></div>
  );
};

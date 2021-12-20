import React, { useRef, useLayoutEffect } from "react";
import { Grid } from "@mui/material";

export const AngularChartV5 = ({ winner }) => {
  const nchart = useRef(null);

  useLayoutEffect(() => {
    let chart;
    let root;
    const createChart = async () => {
      const modules = await Promise.all([
        import("@amcharts/amcharts5"),
        import("@amcharts/amcharts5/xy"),
        import("@amcharts/amcharts5/radar"),
      ]);
      const am5 = modules[0];
      const am5xy = modules[1];
      const am5radar = modules[2];

      am5.addLicense(process.env.NEXT_PUBLIC_AMCHART_LICENCE);
      root = am5.Root.new("chartdiv");
      const score = winner
        ? winner[1] >= 100
          ? 100
          : winner[1] <= -100
          ? -100
          : winner[1]
        : 0;
      // Create chart
      // https://www.amcharts.com/docs/v5/charts/radar-chart/
      var chart = root.container.children.push(
        am5radar.RadarChart.new(root, {
          panX: false,
          panY: false,
          startAngle: 180,
          endAngle: 360,
        })
      );

      // Create axis and its renderer
      // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
      var axisRenderer = am5radar.AxisRendererCircular.new(root, {
        innerRadius: -30,
        // strokeOpacity: 1,
        // strokeWidth: 15,
        // inside: true,
      });

      axisRenderer.grid.template.setAll({
        stroke: root.interfaceColors.get("background"),
        visible: true,
        // strokeOpacity: 0.8,
      });
      axisRenderer.labels.template.setAll({
        // inside: true,
        fontSize: "1em",
        // inside: true,
      });

      var xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 0,
          min: -100,
          max: 100,
          //   strictMinMax: true,
          renderer: axisRenderer,
        })
      );

      // Add clock hand
      // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
      var axisDataItem = xAxis.makeDataItem({});

      var clockHand = am5radar.ClockHand.new(root, {
        pinRadius: am5.percent(0),
        radius: am5.percent(60),
        bottomWidth: 8,
        fill: am5.color("#fff"),
        centerX: am5.percent(-50),
        centerY: am5.percent(60),
        y: 10,
      });

      var bullet = axisDataItem.set(
        "bullet",
        am5xy.AxisBullet.new(root, {
          sprite: clockHand,
        })
      );

      xAxis.createAxisRange(axisDataItem);

      function lookUpGrade(lookupScore, grades) {
        // Only change code below this line
        for (var i = 0; i < grades.length; i++) {
          if (
            grades[i].lowScore <= lookupScore &&
            grades[i].highScore >= lookupScore
          ) {
            return grades[i];
          }
        }
        return null;
      }

      var label1 = chart.radarContainer.children.push(
        am5.Label.new(root, {
          fill: am5.color("#000"),
          centerX: am5.percent(50),
          textAlign: "center",
          centerY: am5.percent(50),
          fontSize: "1rem",
          //   inside: true,
          paddingBottom: 80,
          //   x: 0,
          //   y: 8,
          text: winner ? `${winner[0]} Is` : "Both Teams are",
        })
      );

      var label2 = chart.radarContainer.children.push(
        am5.Label.new(root, {
          fill: am5.color("#000"),
          centerX: am5.percent(50),
          textAlign: "center",
          centerY: am5.percent(70),
          fontSize: "1rem",
          //   inside: true,
          paddingBottom: 35,
          //   x: am5.percent(50),
        })
      );

      var label3 = chart.radarContainer.children.push(
        am5.Label.new(root, {
          fill: am5.color("#000"),
          centerX: am5.percent(50),
          textAlign: "center",
          centerY: am5.percent(40),
          fontSize: "1rem",
          //   inside: true,
          paddingBottom: 35,
          text: "In Terms Of\n Points Per Game",
        })
      );
      axisDataItem.set("value", score);

      bullet.get("sprite").on("rotation", function () {
        var value = axisDataItem.get("value");
        var fill = am5.color("#444");

        xAxis.axisRanges.each(function (axisRange) {
          //   axisRange.set("endValue", 100);
          //   console.log(axisRange.get("endValue"));

          if (
            value >= axisRange.get("value") &&
            value <= axisRange.get("endValue")
          ) {
            fill = axisRange.get("axisFill").get("fill");
          }
        });

        var matchingGrade = lookUpGrade(value, bandsData);
        label2.set("text", winner ? `${Math.abs(winner[1])}% Better` : "equal");
        label2.set("fill", am5.color(matchingGrade?.color));
      });

      //   chart.bulletsContainer.set("mask", undefined);

      var bandsData = [
        {
          color: "#11C56E",
          lowScore: -100,
          highScore: -80,
        },
        {
          color: "#2CE58C",
          lowScore: -80,
          highScore: -60,
        },
        {
          color: "#F6C205",
          lowScore: -60,
          highScore: -40,
        },
        {
          color: "#F37056",
          lowScore: -40,
          highScore: -20,
        },
        {
          color: "#F35655",
          lowScore: -20,
          highScore: 0,
        },
        {
          color: "#F35657",
          lowScore: 0,
          highScore: 20,
        },
        {
          color: "#F37056",
          lowScore: 20,
          highScore: 40,
        },
        {
          color: "#F6C205",
          lowScore: 40,
          highScore: 60,
        },
        {
          color: "#2CE58C",
          lowScore: 60,
          highScore: 80,
        },
        {
          color: "#11C56E",
          lowScore: 80,
          highScore: 100,
        },
      ];

      am5.array.each(bandsData, function (data) {
        var axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));

        axisRange.setAll({
          value: data.lowScore > -100 ? data.lowScore : -100,
          endValue: data.highScore < 100 ? data.highScore : 100,
        });

        axisRange.get("axisFill").setAll({
          visible: true,
          fill: am5.color(data.color),
          fillOpacity: 1,
        });

        axisRange.get("label").setAll({
          //   inside: true,
          fontSize: "2em",
          fill: root.interfaceColors.get("background"),
        });
      });

      // Make stuff animate on load
      chart.appear(1000, 100);
    };
    createChart();

    return () => {
      chart?.dispose();
    };
  }, [winner]);
  return (
    <Grid container style={{ width: "100%", height: "100%" }}>
      <div
        id="chartdiv"
        ref={nchart}
        style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}
      ></div>
    </Grid>
  );
};

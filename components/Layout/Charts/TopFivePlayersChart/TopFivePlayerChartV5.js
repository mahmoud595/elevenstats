import React, { useRef, useLayoutEffect, useState } from "react";
import { useMediaQuery, Typography } from "@mui/material";

// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const TopFivePlayerChartV5 = ({
  id,
  data,
  color = "rgba(251, 82, 102, 1)",
  goalsType,
  cardsType,
  maxValue,
}) => {
  const sm = useMediaQuery("(max-width:640px)");
  const [count, setCount] = useState();
  let num = 0;
  const nchart = useRef(null);

  useLayoutEffect(() => {
    let chart;
    let root;
    const newData = [];

    const createChart = async () => {
      const modules = await Promise.all([
        import("@amcharts/amcharts5"),
        import("@amcharts/amcharts5/xy"),
      ]);
      const am5 = modules[0];
      const am5xy = modules[1];

      root = am5.Root.new(id);
      am5.addLicense(process.env.NEXT_PUBLIC_AMCHART_LICENCE);

      // root.setThemes([am5themes_Animated.new(root)]);
      data?.forEach(
        ({ player, goals, cards, goalsPerMatch, cardsPerMatch }) => {
          if (
            (goalsType === "total" && goals !== 0) ||
            (goalsType === "perMatch" && goalsPerMatch !== 0) ||
            (cardsType === "total" && cards !== 0) ||
            (cardsType === "perMatch" && cardsPerMatch !== 0)
          ) {
            let value = goalsType
              ? goalsType === "total"
                ? goals
                : goalsPerMatch?.toFixed(2)
              : cardsType
              ? cardsType === "total"
                ? cards
                : cardsPerMatch?.toFixed(2)
              : 0;

            newData.push({
              name:
                player?.commonName?.length >= 15
                  ? `${player?.commonName?.slice(0, 12)}...`
                  : player?.commonName,
              steps: +value,
              pictureSettings: {
                src: player?.imagePath || "",
              },
              steps2: 8,
              playerCountry: {
                src: player?.country?.imagePath || "",
              },
              maxValue: maxValue,
            });
          } else {
            num++;
            setCount(num);
          }
        }
      );
      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "none",
          wheelY: "none",
          paddingBottom: 0,
          paddingTop: 60,
          layout: root.verticalLayout,
        })
      );

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

      let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 10 });
      xRenderer.grid.template.set("visible", false);

      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          paddingTop: 40,
          categoryField: "name",
          renderer: xRenderer,
          // paddingLeft: 40,
          // width: 200,
        })
      );

      let yRenderer = am5xy.AxisRendererY.new(root, {});
      // yRenderer.grid.template.set("strokeDasharray", [3]);
      yRenderer.grid.template.set("visible", false);

      // const max = +maxValue >= 1 ? maxValue + 1 : +maxValue + 0.05;
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          min: 0,
          max: +maxValue >= 1 ? maxValue : +maxValue,
          renderer: yRenderer,
          visible: false,
          // categoryField: "",
        })
      );
      // yAxis.get("yRenderer").labels.template.setAll({
      //   visible: false,
      // });

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      xAxis.data.setAll(newData);

      xAxis.get("renderer").labels.template.setAll({
        textAlign: "center",
        oversizedBehavior: "truncate",
        maxWidth: 10,
        fontSize: 12,
        ellipsis: "...",
      });

      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Income",
          valueYField: "maxValue",
          categoryXField: "name",
          xAxis: xAxis,
          yAxis: yAxis,
          // sequencedInterpolation: false,
          // calculateAggregates: false,
          // maskBullets: false,
          clustered: false,
          // width: am5.percent(20),

          // width: 10,
        })
      );
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Income",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "steps",
          categoryXField: "name",
          sequencedInterpolation: false,
          calculateAggregates: false,
          maskBullets: false,
          clustered: false,
        })
      );
      series2.columns.template.setAll({
        cornerRadiusBR: 50,
        cornerRadiusTR: 50,
        cornerRadiusBL: 50,
        cornerRadiusTL: 50,
        strokeOpacity: 0,
        width: sm ? 28 : 40,

        //   fillOpacity: 0.8,
      });
      series.columns.template.setAll({
        strokeOpacity: 0,
        cornerRadiusBR: 50,
        cornerRadiusTR: 50,
        cornerRadiusBL: 50,
        cornerRadiusTL: 50,
        width: sm ? 28 : 40,

        //   fillOpacity: 0.8,
      });

      series2.columns.template.set(
        "fillGradient",
        am5.LinearGradient.new(root, {
          stops: [
            {
              color: am5.color("rgba(234, 237, 242, 1)"),
            },
            {
              color: am5.color("rgba(234, 237, 242, 0.4)"),
            },
          ],
          rotation: 90,
        })
      );

      let circleTemplate = am5.Template.new({});
      let circleTemplate2 = am5.Template.new({});

      series.bullets.push(function (root, series, dataItem) {
        let bulletContainer = am5.Container.new(root, {});
        let circle = bulletContainer.children.push(
          am5.Circle.new(
            root,
            {
              radius: 25,
              // y: am5.percent(10),
            },
            circleTemplate
          )
        );

        let maskCircle = bulletContainer.children.push(
          am5.Circle.new(root, { radius: 20 })
        );

        // only containers can be masked, so we add image to another container
        let imageContainer = bulletContainer.children.push(
          am5.Container.new(root, {
            mask: maskCircle,
          })
        );

        // not working
        let image = imageContainer.children.push(
          am5.Picture.new(root, {
            templateField: "pictureSettings",
            centerX: am5.percent(50),
            centerY: am5.percent(50),
            width: 40,
            height: 40,
          })
        );

        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: bulletContainer,
        });
      });

      series.bullets.push(function (root, series, dataItem) {
        let bulletContainer = am5.Container.new(root, {});
        let circle = bulletContainer.children.push(
          am5.Circle.new(
            root,
            {
              radius: 1,
            },
            circleTemplate2
          )
        );

        let maskCircle = bulletContainer.children.push(
          am5.Circle.new(root, { radius: 40 })
        );

        // only containers can be masked, so we add image to another container
        let imageContainer = bulletContainer.children.push(
          am5.Container.new(root, {
            mask: maskCircle,
          })
        );

        // not working
        let image = imageContainer.children.push(
          am5.Picture.new(root, {
            templateField: "playerCountry",
            //   x: am5.p50,
            //   y: am5.p50,
            centerX: am5.percent(50),
            //   centery: am5.percent(0),
            //   x: am5.percent(0),
            y: am5.percent(-120),
            width: sm ? 20 : 30,
            height: 20,
          })
        );

        return am5.Bullet.new(root, {
          locationY: am5.percent(0),

          sprite: bulletContainer,
        });
      });
      chart.seriesContainer;
      // heatrule
      series.set("heatRules", [
        {
          dataField: "valueY",
          customFunction: function (sprite, min, max, value) {
            sprite.set(
              "fillGradient",
              am5.LinearGradient.new(root, {
                stops: [
                  {
                    color: am5.color("#FB5266"),
                  },
                  {
                    color: am5.color("#fff"),
                  },
                ],
              })
            );
          },
          target: series.columns.template,
          key: "fill",
        },
        {
          dataField: "valueY",
          customFunction: function (sprite, min, max, value) {
            sprite.set("fill", am5.color("#E5E7EB"));
          },
          target: circleTemplate,
          key: "fill",
        },
        {
          dataField: "valueY",
          customFunction: function (sprite, min, max, value) {
            sprite.set("fill", am5.color("#fff"));
          },
          target: circleTemplate2,
          key: "fill",
          max: +maxValue >= 1 ? maxValue : +maxValue,
        },
      ]);
      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationX: 0.5,
          locationY: 0.6,

          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fontSize: 10,
            centerX: am5.percent(50),
            centerY: am5.percent(100),
            populateText: true,
            fill: am5.color("#fff"),
          }),
        });
      });

      series.data.setAll(newData);

      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineX.set("visible", false);
      cursor.lineY.set("visible", false);
      nchart.current = chart;
      series.data.setAll(newData);
      series2.data.setAll(newData);

      series.appear();
      series2.appear();
      chart.appear(1000, 100);
    };
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    createChart();
    return () => {
      chart?.dispose();
    };
  }, [id, data, color, sm, maxValue]);
  return (
    <>
      {count == data?.length || !data?.length ? (
        <Typography id={id}>No Data Yet For This Season</Typography>
      ) : (
        <div
          id={id}
          style={{ width: "100%", height: "100%" }}
          ref={nchart}
        ></div>
      )}
    </>
  );
};

import React, { Component } from "react";
import { Card } from "antd";
//按需导入
import echarts from "echarts/lib/echarts";
//导入折线图
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/radar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
//引入echarts的主题样式
// import echartTheme from './echartTheme'
//引入样式

class EchartsTestS extends Component {
  componentDidMount() {}

  getOption = () => {
    var dataAxis = [
      "点",
      "击",
      "柱",
      "子",
      "或",
      "者",
      "两",
      "指",
      "在",
      "触",
      "屏",
      "上",
      "滑",
      "动",
      "能",
      "够",
      "自",
      "动",
      "缩",
      "放"
    ];
    var data = [
      220,
      182,
      191,
      234,
      290,
      330,
      310,
      123,
      442,
      321,
      90,
      149,
      210,
      122,
      133,
      334,
      198,
      123,
      125,
      220
    ];
    var yMax = 500;
    var dataShadow = [];
    for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }
    let option = {
      title: {
        // text: "特性示例：渐变色 阴影 点击缩放",
        // subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: "#fff"
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: "#999"
          }
        }
      },
      dataZoom: [
        {
          type: "inside"
        }
      ],
      series: [
        {
          // For shadow
          type: "bar",
          itemStyle: {
            color: "rgba(0,0,0,0.05)"
          },
          barGap: "-100%",
          barCategoryGap: "40%",
          data: dataShadow,
          animation: false
        },
        {
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.5, color: "#188df0" },
              { offset: 1, color: "#188df0" }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#2378f7" },
                { offset: 0.7, color: "#2378f7" },
                { offset: 1, color: "#83bff6" }
              ])
            }
          },
          data: data
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ReactEcharts option={this.getOption()} theme="ThemeStyle" />
      </div>
    );
  }
}
export default EchartsTestS;

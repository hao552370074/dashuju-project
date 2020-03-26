import React, { Component } from "react";
import { Card } from "antd";
//按需导入
import echarts from "echarts/lib/echarts";
//导入折线图
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
//引入echarts的主题样式
// import echartTheme from './echartTheme'
//引入样式

class EchartsTestK extends Component {
  componentDidMount() {}

  getOption = () => {
    let option = {
      title: {
        // text: "堆叠区域图"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        color: ["#4472C5"],
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        textStyle: {
          //图例文字的样式
          color: "#fff",
          fontSize: 14
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            lineStyle: {
              color: "#fff", // y轴的颜色
              width: 1 //y轴线的宽度
            }
          }
        }
      ],
      yAxis: [
        {
          axisLine: {
            lineStyle: {
              color: "#fff", // y轴的颜色//
              width: 1 //y轴线的宽度//
            }
          }
        }
      ],
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "视频广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "直接访问",
          type: "line",
          stack: "总量",
          areaStyle: {
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(220,96,35,0.80)"
              },
              {
                offset: 0.34,
                color: "rgba(96,96,35,0.50)"
              },
              {
                offset: 1,
                color: "rgba(35,96,35,0.20)"
              }
            ])
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          areaStyle: {
            normal: {
              //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(80,141,255,0.50)"
                },
                {
                  offset: 0.34,
                  color: "rgba(56,155,255,0.30)"
                },
                {
                  offset: 1,
                  color: "rgba(38,197,254,0.00)"
                }
              ])
            }
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ReactEcharts
          style={{ height: "220px" }}
          option={this.getOption()}
          theme="ThemeStyle"
        />
      </div>
    );
  }
}
export default EchartsTestK;

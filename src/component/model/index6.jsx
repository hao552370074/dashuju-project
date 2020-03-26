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

class EchartsTestP extends Component {
  componentDidMount() {}

  getOption = () => {
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      // legend: {
      //     data: ["直接访问"]
      // },
      // toolbox: {
      //     show: true,
      //     feature: {
      //         mark: {
      //             show: true
      //         },
      //         dataView: {
      //             show: true,
      //             readOnly: true
      //         },
      //         magicType: {
      //             show: false,
      //             type: ["line", "bar", "stack", "tiled"]
      //         },
      //         restore: {
      //             show: true
      //         },
      //         saveAsImage: {
      //             show: true
      //         }
      //     }
      // },
      calculable: true,
      xAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              width: 0,
              color: "rgb(239, 244, 247)"
            },
            show: false
          },
          position: "bottom",
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#C4EAFC",
              width: 0
            }
          }
        }
      ],
      yAxis: [
        {
          type: "category",
          data: ["区域三", "区域二", "区域一"],
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgb(218, 232, 242)",
              width: 0,
              type: "dashed"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              width: 0,
              type: "dashed",
              color: "rgb(255, 255, 255)"
            }
          },
          axisTick: {
            show: false,
            length: 0,
            lineStyle: {
              width: 0
            }
          },
          position: "top",
          axisLabel: {
            show: true,
            margin: 10,
            interval: 0,
          },
          nameLocation: "end",
          splitArea: {
            show: false
          }
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          stack: "总量",
          barCategoryGap: 10,
          data: [320, 302, 301],
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "insideRight",
              },
              // borderWidth: 0,
              // borderColor: "red",
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#c4965a"
                },
                {
                  offset: 1,
                  color: "#fff606"
                }
              ])
            }
          }
        }
      ],
      grid: {
        top:"20px",
        left:'50px',
        backgroundColor: "rgb(255, 255, 255)",
        borderWidth: 0,
        borderColor: "rgb(255, 255, 255)",
        height:70
      },
      backgroundColor: "rgba(0, 0, 0, 0)",
    };
    return option;
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ReactEcharts
          style={{ height: "330px" }}
          option={this.getOption()}
          theme="ThemeStyle"
        />
      </div>
    );
  }
}
export default EchartsTestP;

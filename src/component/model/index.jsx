import React, { Component } from "react";
import { Card } from "antd";
//按需导入
import echarts from "echarts/lib/echarts";
//导入折线图
import "echarts/lib/chart/line";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
//引入echarts的主题样式
// import echartTheme from './echartTheme'
//引入样式

class EchartsTest extends Component {
  componentWillMount() {
    // echarts.registerTheme("ThemeStyle", echartTheme) //注入主题
  }

  getOption = () => {
    let option = {
      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross"
        }
      },
      legend: {
        top: 14,
        left: 100,
        textStyle: {
          color: "#ffffff"
        },
        data: ["节能率", "节能率2"]
      },
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "#d14a61"
            }
          },
          axisPointer: {
            label: {
              formatter: function(params) {
                return (
                  "新增数量  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              }
            }
          },
          data: [
            "2016-1",
            "2016-2",
            "2016-3",
            "2016-4",
            "2016-5",
            "2016-6",
            "2016-7",
            "2016-8",
            "2016-9",
            "2016-10",
            "2016-11",
            "2016-12"
          ],
        },
        {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            // onZero: false,
            lineStyle: {
              color: "#67ebff"
            }
          },
          axisPointer: {
              label: {
                color:'red',
              formatter: function(params) {
                return (
                  "新增数量  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              }
            }
          }
        }
      ],
      yAxis: {
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "#67ebff",
            width: 1
          }
        },
        splitLine: {
          //网格线
          lineStyle: {
            color: "#67EEFF",
            type: "dashed" //设置网格线类型 dotted：虚线   solid:实线
          },
          show: true //隐藏或显示
        }
      },
      series: [
        {
          lineStyle: {
            normal: {
              color: "#F25357"
            }
          },
          color: "#F25357",
          name: "节能率2",
          type: "line",
          xAxisIndex: 1,
          smooth: true,
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            400,
            48.7,
            18.8,
            6.0,
            2.3
          ]
        },
        {
          lineStyle: {
            normal: {
              color: "#4dc9a2"
            }
          },
          color: "#4dc9a2",
          name: "节能率",
          type: "line",
          smooth: true,
          data: [
            3.9,
            5.9,
            11.1,
            18.7,
            48.3,
            69.2,
            231.6,
            46.6,
            55.4,
            18.4,
            10.3,
            0.7
          ]
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
export default EchartsTest;

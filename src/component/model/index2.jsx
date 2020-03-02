import React, { Component } from "react";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/radar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

class EchartsTest extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['预算分配', '实际开销']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '销售', max: 6500},
                { name: '管理', max: 16000},
                { name: '信息技术', max: 30000},
                { name: '客服', max: 38000},
                { name: '研发', max: 52000},
                { name: '市场', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '预算分配'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '实际开销',
                }
            ]
        }]
    });
  }
  render() {
    return (
      <div
        id="main"
        style={{ width: '100%', height: '100%'}}
      ></div>
    );
  }
}
export default EchartsTest;

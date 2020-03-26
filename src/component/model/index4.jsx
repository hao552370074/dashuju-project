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

class EchartsTestV extends Component {
  componentDidMount() {}
  
  getOption = () => {
    let option = {
      title: {
        // text: '南丁格尔玫瑰图',
        // subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            // dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            // restore: {show: true},
            // saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [30,70],
            center: ['50%', '40%'],
            roseType: 'area',
            color:['#019cff','#0088de','#0173bc','#015f9c'],
            data: [
                {value: 10, name: 'c类型：33%'},
                {value: 5, name: 'a类型：25%'},
                {value: 15, name: 'c类型：33%'},
                {value: 25, name: 'b类型：44%'},
                {value: 20, name: 'a类型：55%'},
                {value: 35, name: 'd类型：13%'},
                {value: 30, name: 'c类型：33%'},
                // {value: 40, name: 'rose8'}
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
export default EchartsTestV;

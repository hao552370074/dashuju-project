// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

// 蚂蚁可视化
import { Stat } from "g2";
import createG2 from "g2-react";

import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, Progress } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Model2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // routerParams: props.match.params,
      data: [
        {
          item: '实例一',
          count: 40,
          percent: 0.4,
          value: 20,
        },
        {
          item: '实例二',
          count: 21,
          percent: 0.21,
          value: 20,
        },
        {
          item: '实例三',
          count: 17,
          percent: 0.17,
          value: 20,
        },
        {
          item: '实例四',
          count: 13,
          percent: 0.13,
          value: 20,
        },
        {
          item: '实例五',
          count: 9,
          percent: 0.09,
          value: 20,
        },
      ],
      width: 600,
      forceFit: true,
      height: 400,
      plotCfg: {
        margin: [30, 40, 90, 80],
        background: {
          stroke: '#ccc',
          lineWidth: 1,
        }
      },
      datas: [
        {
          type: '分类一',
          value: 27,
        },
        {
          type: '分类二',
          value: 25,
        },
        {
          type: '分类三',
          value: 18,
        },
        {
          type: '分类四',
          value: 15,
        },
        {
          type: '分类五',
          value: 10,
        },
        {
          type: '其它',
          value: 5,
        },
      ],

    };
  }
  render() {
    console.log(this.props);
    // const Pie = createG2(chart => {
    //   chart.coord("theta");
    //   chart
    //     .intervalStack()
    //     .position(Stat.summary.proportion('count'))
    //     .color("item", ["#0000FF", "#0044FF", "#0088FF", "#00BBFF", "#00FFFF"]);
    //   chart.render();
    // });
    // const RingPlot = createG2(chart=> {
    //   chart.coord("polar");
    //   chart.intervalStack()
    //     .position(Stat.summary.proportion('count'))
    //     .color("item", ["#0000FF", "#0044FF", "#0088FF", "#00BBFF", "#00FFFF"]);
    //   chart.render();
    // });
    return (
      <div className="model-main">
        {/* <Pie
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          // plotCfg={this.state.plotCfg}
          ref="myChart"
        />
        <RingPlot data={this.state.data}
          width={this.state.width}
          height={this.state.height}></RingPlot> */}
        <div className="title">
          <p>智慧楼宇体征指数</p>
        </div>
        <div className="LeftContent" style={{ margin: 15 }}>
          <div className="DivMain" style={{ margin: "60px auto 10px" }}>
            <div style={{ margin: "0 0 0 20px" }}>温感报警</div>
            <Progress
              style={{ width: "60%", display: "block", margin: "0 20px 0 0" }}
              strokeColor={{
                from: "#108ee9",
                to: "#87d068"
              }}
              status="active"
              percent={70}
              strokeLinecap="square"
            />
          </div>
          <div className="DivMain" style={{ margin: "10px auto" }}>
            <div style={{ margin: "0 0 0 20px" }}>烟感报警</div>
            <Progress
              style={{ width: "60%", display: "block", margin: "0 20px 0 0" }}
              strokeColor={{
                from: "#108ee9",
                to: "#87d068"
              }}
              status="active"
              percent={90}
              strokeLinecap="square"
            />
          </div>
          <div className="DivMain" style={{ margin: "10px auto" }}>
            <div style={{ margin: "0 0 0 20px" }}>手动报警</div>
            <Progress
              style={{ width: "60%", display: "block", margin: "0 20px 0 0" }}
              strokeColor={{
                from: "#108ee9",
                to: "#87d068"
              }}
              status="active"
              percent={30}
              strokeLinecap="square"
            />
          </div>
          <div className="DivMain" style={{ margin: "10px auto" }}>
            <div style={{ margin: "0 0 0 20px" }}>
              其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它
            </div>
            <Progress
              style={{ width: "60%", display: "block", margin: "0 20px 0 0" }}
              strokeColor={{
                from: "#108ee9",
                to: "#87d068"
              }}
              status="active"
              percent={50}
              strokeLinecap="square"
            />
          </div>
        </div>
        <div className="LeftContent" style={{ margin: 15 }}>
          <div id="main" style={{ width: "100%", height: "100%" }}></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
  }
}

export default Model2;

// 蚂蚁可视化
import { Stat } from "g2";
import createG2 from "g2-react";

import G2 from "@antv/g2";

import EchartsTest from "./model/index";

import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, Progress } from "antd";
const { Header, Sider, Content, Footer } = Layout;
// ss
class Model2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // routerParams: props.match.params,
      data: [
        {
          item: "实例一",
          count: 40,
          percent: 0.4,
          value: 20
        },
        {
          item: "实例二",
          count: 21,
          percent: 0.21,
          value: 20
        },
        {
          item: "实例三",
          count: 17,
          percent: 0.17,
          value: 20
        },
        {
          item: "实例四",
          count: 13,
          percent: 0.13,
          value: 20
        },
        {
          item: "实例五",
          count: 9,
          percent: 0.09,
          value: 20
        }
      ],
      width: 600,
      forceFit: true,
      height: 400,
      plotCfg: {
        margin: [30, 40, 90, 80],
        background: {
          stroke: "#ccc",
          lineWidth: 1
        }
      },
    };
  }
  render() {

    // const Pie = createG2(chart => {
    //   chart.coord("Radar");
    //   chart
    //     .intervalStack()
    //     .position(Stat.summary.proportion("count"))
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
        <div className="title">
          <p>智慧楼宇体征指数</p>
        </div>

        <div className="content-left">
          <div className="LeftContent" style={{ margin: 15 }}>
            <p>消防系统</p>
            <div className="DivMain" style={{ margin: "14px auto 10px" }}>
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
            <p>暖通空调</p>
            <div className="DivMain" style={{ margin: "14px auto 10px" }}>
              <div style={{ margin: "0 0 0 20px" }}>
                空&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调
              </div>
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
              <div style={{ margin: "0 0 0 20px" }}>
                排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;风
              </div>
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
              <div style={{ margin: "0 0 0 20px" }}>
                制&nbsp;&nbsp;冷&nbsp;&nbsp;机
              </div>
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
                新&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;风
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
            <p>消防系统</p>
            <div className="DivMain" style={{ margin: "14px auto 10px" }}>
              {/* <EchartsTest></EchartsTest> */}
              {/* <Pie
                data={this.state.data}
                width={this.state.width}
                height={this.state.height}
                // plotCfg={this.state.plotCfg}
                ref="myChart"
              /> */}
              {/* <RingPlot
                data={this.state.data}
                width={this.state.width}
                height={this.state.height}
              ></RingPlot> */}
            </div>
          </div>
          {/* <EchartsTest></EchartsTest> */}
        </div>
        <div style={{ float: "left" ,width:'60%',height:'100vh'}}>
          <div id="container"></div>
        </div>
        <div className="content-left" style={{ float: "right" }}>
          <div className="LeftContent" style={{ margin: 15 }}>
            <p>消防系统</p>
            <div className="DivMain" style={{ margin: "14px auto 10px" }}>
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
            <p>消防系统</p>
            <div className="DivMain" style={{ margin: "14px auto 10px" }}>
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
            <p>消防系统</p>
            <div className="DivMain" style={{ margin: "14px auto 10px" }}>
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
        </div>
      </div>
    );
  }

  componentDidMount() {
    const data = [
      { item: '事例一', count: 40, percent: 0.4 },
      { item: '事例二', count: 21, percent: 0.21 },
      { item: '事例三', count: 17, percent: 0.17 },
      { item: '事例四', count: 13, percent: 0.13 },
      { item: '事例五', count: 9, percent: 0.09 }
    ];
    const chart = new G2.Chart({
      container: 'container',
      forceFit: true,
      height: 500,
      animate: false
    });
    chart.source(data, {
      percent: {
        formatter: val => {
          val = (val * 100) + '%';
          return val;
        }
      }
    });
    chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    });
    chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    // 辅助文本
    chart.guide().html({
      position: [ '50%', '50%' ],
      html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
      alignX: 'middle',
      alignY: 'middle'
    });
    const interval = chart.intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + val;
        }
      })
      .tooltip('item*percent', (item, percent) => {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });
    chart.render();
    interval.setSelected(data[0]);
  }
}

export default Model2;

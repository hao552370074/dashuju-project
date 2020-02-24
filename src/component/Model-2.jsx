// 蚂蚁可视化
// import { Stat } from "g2";
// import createG2 from "g2-react";

// import F2 from "@antv/f2";
// import _ from "lodash";

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
      number: "0",
      number1: "0"
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
            {/* <canvas width="100px" height="500px" id="light"></canvas> */}
            <div className="DivMain" style={{ margin: "14px auto 10px" }}>
              {/* <img
                style={{
                  opacity: 1,
                  position: "absolute",
                  left: "353px",
                  height: 200,
                  top: 300,
                  zIndex: 0
                }}
                src={require("../img/dian.gif")}
                alt=""
              /> */}
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
            <p>能源管理</p>
            {/* <canvas width="100px" height="500px" id="light"></canvas> */}
            <div className="DivMain" style={{ margin: "40px auto 10px" }}>
              <span style={{ color: "#fff" }}>
                今日总能耗
                <h2 style={{ color: "#ffcc5e" }}>{this.state.number}</h2>kwh
              </span>
              <span style={{ color: "#fff" }}>
                今日电功率
                <h2 style={{ color: "#ffcc5e" }}>{this.state.number1}</h2>kw
              </span>
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
          {/* <div className="LeftContent" style={{ margin: 15 }}> */}
          {/* <p>消防系统</p> */}
          {/* <div className="DivMain" style={{ margin: "14px auto 10px" }}> */}
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
          {/* </div> */}
          {/* </div> */}
          {/* <EchartsTest></EchartsTest> */}
        </div>

        <div style={{ float: "left", width: "60%", height: "80vh" }}>
          <div id="container"></div>
        </div>

        <div className="content-left" style={{ float: "right" }}>
          <div className="LeftContent" style={{ margin: 15 }}>
            <p>防盗管理</p>
            <div className="DivMain" style={{ margin: "40px auto 10px" }}>
              <span>
                状态<p>撤防</p>
              </span>
              <span>
                总数<p>56</p>
              </span>
              <span>
                报警<p>10</p>
              </span>
              <span>
                开启<p>17</p>
              </span>
            </div>
          </div>
          <div className="LeftContent" style={{ margin: 15 }}>
            <p>视频监控</p>
            <div className="DivMain" style={{ margin: "14px auto 10px" }}>
              <div style={{ margin: "0 0 0 20px" }}>录像机</div>
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
              <div style={{ margin: "0 0 0 20px" }}>摄像机</div>
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
                矩&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;阵
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
            <p>信息发布</p>
            <div className="DivMain" style={{ margin: "40px auto 10px" }}>
              <span>
                总数<p>2</p>
              </span>
              <span>
                温度<p>37</p>
              </span>
              <span>
                亮度<p>正常</p>
              </span>
              <span>
                开启<p>2</p>
              </span>
            </div>
          </div>
        </div>

        {/* <div style={{backgroundColor:'red',width:200,height:80,position:'fixed',bottom:0}}></div> */}
        <div
          style={{
            // backgroundColor: "red",
            width: "100%",
            height: "20vh",
            float: "left"
          }}
        >
          <div className="sss">
            <div>
              <img src={require("../img/照明.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/安全.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/夜间.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/电梯 (1).png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/门禁.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/能耗数据.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/统计.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/音乐.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/统计 (2).png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/空调.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/视频监控.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/停车管理.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/排水.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/消防.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/信息发布.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/电子.png")} alt="" srcset="" />
            </div>
            <div>
              <img src={require("../img/配电管理.png")} alt="" srcset="" />
            </div>
          </div>
          <div className='ssone'>
            <div>
            <span>安防<br/>管理</span>
            <img src={require('../img/cl.png')} alt=""/>
            </div>
            <div>
            <span>设备<br/>管理</span>
            <img src={require('../img/cl.png')} alt=""/>
            </div>
            <div>
            <span className='spans'>设备<br/>管理</span>
            <img src={require('../img/center.png')} alt=""/>
            </div>
            <div>
            <span>运营<br/>管理</span>
            <img src={require('../img/cl.png')} alt=""/>
            </div>
            <div>
            <span>节能<br/>管理</span>
            <img src={require('../img/cl.png')} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.numberGrow(1, 236);
    this.numberGrow(2, 6.12);
    //     console.log(G2);
    //     const { DataView } = DataSet;
    // const data = [
    //   { item: 'Design', a: 70, b: 30 },
    //   { item: 'Development', a: 60, b: 70 },
    //   { item: 'Marketing', a: 50, b: 60 },
    //   { item: 'Users', a: 40, b: 50 },
    //   { item: 'Test', a: 60, b: 70 },
    //   { item: 'Language', a: 70, b: 50 },
    //   { item: 'Technology', a: 50, b: 40 },
    //   { item: 'Support', a: 30, b: 40 },
    //   { item: 'Sales', a: 60, b: 40 },
    //   { item: 'UX', a: 50, b: 60 }

    // ];
    // const dv = new DataView().source(data);
    // dv.transform({
    //   type: 'fold',
    //   fields: [ 'a', 'b' ], // 展开字段集
    //   key: 'user', // key字段
    //   value: 'score' // value字段
    // });
    // const chart = new G2.Chart({
    //   container: 'container',
    //   forceFit: true,
    //   height: 500,
    //   padding: [ 20, 20, 95, 20 ]
    // });
    // chart.source(dv, {
    //   score: {
    //     min: 0,
    //     max: 80
    //   }
    // });
    // chart.coord('polar', {
    //   radius: 0.8
    // });
    // chart.axis('item', {
    //   line: null,
    //   tickLine: null,
    //   grid: {
    //     lineStyle: {
    //       lineDash: null
    //     },
    //     hideFirstLine: false
    //   }
    // });
    // chart.axis('score', {
    //   line: null,
    //   tickLine: null,
    //   grid: {
    //     type: 'polygon',
    //     lineStyle: {
    //       lineDash: null
    //     }
    //   }
    // });
    // chart.legend('user', {
    //   marker: 'circle',
    //   offset: 30
    // });
    // chart.line().position('item*score').color('user')
    //   .size(2);
    // chart.point().position('item*score').color('user')
    //   .shape('circle')
    //   .size(4)
    //   .style({
    //     stroke: '#fff',
    //     lineWidth: 1,
    //     fillOpacity: 1
    //   });
    // chart.area().position('item*score').color('user');
    // chart.render();
  }

  numberGrow = (ss, sss) => {
    let _this = this;
    let step;
    if (ss == 1) {
      step = 7200 / (8 * 100);
    } else {
      step = 7200 / (80 * 100);
    }
    let current = 0;
    let start = 0;
    let t = setInterval(() => {
      start += step;
      if (start > _this.value) {
        clearInterval(t);
        start = _this.value;
        t = null;
      }
      if (current === start) {
        return;
      }
      current = start;
      // ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
      if (ss == 1) {
        _this.setState({
          number: current
        });
        if (current > sss) {
          _this.setState({
            number: sss
          });
          clearInterval(t);
        }
      } else {
        _this.setState({
          number1: current
        });
        if (current > sss) {
          _this.setState({
            number1: sss
          });
          clearInterval(t);
        }
      }
      // console.log(current);
    }, 10);
  };
}

export default Model2;

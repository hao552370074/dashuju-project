// 蚂蚁可视化
// import { Stat } from "g2";
// import createG2 from "g2-react";

// import F2 from "@antv/f2";
// import _ from "lodash";

import EchartsTestS from "./model/index3";
import EchartsTest7 from "./model/index7";
import EchartsTest8 from "./model/index8";
import EchartsTestV from "./model/index4";
import EchartsTestK from "./model/index5";
import EchartsTestP from "./model/index6";
import G2 from "@antv/g2";

import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, Progress } from "antd";
const { Header, Sider, Content, Footer } = Layout;
// ss
class Model3 extends Component {
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
      <div
        className="model-main"
        style={{ backgroundImage: "none", backgroundColor: "#032030" }}
      >
        <div className="title">
          <p>智慧楼宇体征指数</p>
        </div>

        <div className="content-left">
          <div
            className="LeftContent"
            style={{ margin: 15, background: "none" }}
          >
            <span style={{ color: "#fff", fontSize: "16px" }}>温度监测</span>
            <EchartsTestS></EchartsTestS>
          </div>
          <div style={{ margin: "15px", background: "none" }}>
            <span style={{ color: "#fff", fontSize: "16px" }}>
              人员流动监测
            </span>
            <p style={{ margin: "15px", marginLeft: "40px", color: "#fff" }}>
              外出人员：
              <span style={{ fontSize: "20px", color: "#01edff" }}>236人</span>
            </p>
            <p style={{ margin: "15px", marginLeft: "40px", color: "#fff" }}>
              来访人员：
              <span style={{ fontSize: "20px", color: "#01edff" }}>76人</span>
            </p>
          </div>
          <div
            className="LeftContent"
            style={{ margin: 15, background: "none" }}
          >
            <span style={{ color: "#fff", fontSize: "16px" }}>危险源监测</span>
            <EchartsTestV></EchartsTestV>
          </div>
          <div
            className="LeftContent"
            style={{ margin: "15px 0 0 15px", background: "none" }}
          >
            <span style={{ color: "#fff", fontSize: "16px" }}>温度监测</span>
            <div className="model" style={{ marginTop: "40px" }}>
              <Progress
                type="circle"
                strokeColor="#dcb90d"
                percent={75}
                width={60}
                format={percent => `北1# ${percent}℃`}
              />
              <Progress
                type="circle"
                strokeColor="#05b4bc"
                percent={75}
                width={60}
                format={percent => `北2# ${percent}℃`}
              />
              <Progress
                type="circle"
                strokeColor="#dcb90d"
                percent={75}
                width={60}
                format={percent => `北3# ${percent}℃`}
              />
              <Progress
                type="circle"
                strokeColor="#05b4bc"
                percent={75}
                width={60}
                format={percent => `北4# ${percent}℃`}
              />
            </div>
            <div className="model">
              <Progress
                type="circle"
                strokeColor="#dcb90d"
                percent={75}
                width={60}
                format={percent => `北5# ${percent}℃`}
              />
              <Progress
                type="circle"
                strokeColor="#05b4bc"
                percent={75}
                width={60}
                format={percent => `北6# ${percent}℃`}
              />
              <Progress
                type="circle"
                strokeColor="#dcb90d"
                percent={75}
                width={60}
                format={percent => `南1# ${percent}℃`}
              />
              <Progress
                type="circle"
                strokeColor="#05b4bc"
                percent={75}
                width={60}
                format={percent => `南2# ${percent}℃`}
              />
            </div>
            {/* <div className="model">
              <div style={{ float: "left" }}>
                <img src={require("../img/model4-2.png")}></img>
                <div style={{ position: "absolute", top: "0px" }}>
                  <p style={{ fontSize: "12px" }}>
                    北5#<br></br>
                  </p>
                  <p style={{ color: "#ddb910" }}>32℃</p>
                </div>
              </div>
              <div style={{ float: "left" }}>
                <img src={require("../img/model4-1.png")}></img>
                <div style={{ position: "absolute", top: "0px" }}>
                  <p style={{ fontSize: "12px", color: "#03b4b7" }}>
                    北6#<br></br>
                  </p>
                  <p style={{ color: "#ddb910", color: "#03b4b7" }}>29℃</p>
                </div>
              </div>
              <div style={{ float: "left" }}>
                <img src={require("../img/model4-2-2.png")}></img>
                <div style={{ position: "absolute", top: "0px" }}>
                  <p style={{ fontSize: "12px" }}>
                    南1#<br></br>
                  </p>
                  <p style={{ color: "#ddb910" }}>32℃</p>
                </div>
              </div>
              <div style={{ float: "left" }}>
                <img src={require("../img/model4-1-1.png")}></img>
                <div style={{ position: "absolute", top: "0px" }}>
                  <p style={{ fontSize: "12px", color: "#03b4b7" }}>
                    南2#<br></br>
                  </p>
                  <p style={{ color: "#ddb910", color: "#03b4b7" }}>27℃</p>
                </div>
              </div>
            </div>
            <div className="model">
              <div style={{ float: "left" }}>
                <img src={require("../img/model4-2.png")}></img>
                <div style={{ position: "absolute", top: "0px" }}>
                  <p style={{ fontSize: "12px" }}>
                    北1#<br></br>
                  </p>
                  <p style={{ color: "#ddb910" }}>32℃</p>
                </div>
              </div>
              <div style={{ float: "left" }}>
                <img src={require("../img/model4-1.png")}></img>
                <div style={{ position: "absolute", top: "0px" }}>
                  <p style={{ fontSize: "12px", color: "#03b4b7" }}>
                    北2#<br></br>
                  </p>
                  <p style={{ color: "#ddb910", color: "#03b4b7" }}>29℃</p>
                </div>
              </div>
              <div style={{ float: "left" }}>
                <img src={require("../img/model4-2-2.png")}></img>
                <div style={{ position: "absolute", top: "0px" }}>
                  <p style={{ fontSize: "12px" }}>
                    北3#<br></br>
                  </p>
                  <p style={{ color: "#ddb910" }}>32℃</p>
                </div>
              </div>
              <div style={{ float: "left" }}>
                <img src={require("../img/model4-1-1.png")}></img>
                <div style={{ position: "absolute", top: "0px" }}>
                  <p style={{ fontSize: "12px", color: "#03b4b7" }}>
                    北4#<br></br>
                  </p>
                  <p style={{ color: "#ddb910", color: "#03b4b7" }}>27℃</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div style={{ float: "left", width: "60%", height: "80vh" }}>
          <div id="container"></div>
        </div>

        <div className="content-left" style={{ float: "right" }}>
          <div
            className="LeftContent"
            style={{ margin: 15, background: "none", height: "150px" }}
          >
            <span style={{ color: "#fff", fontSize: "16px" }}>
              门禁系统报警
            </span>
            <EchartsTestP></EchartsTestP>
            {/* <div style={{ margin: "20px" }}>
              <div style={{ color: "#fff" }}>
                <span>区域一</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi.png")}
                    alt=""
                  />
                </span>
                <span>575台</span>
              </div>
              <div style={{ color: "#fff" }}>
                <span>区域二</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi-2.png")}
                    alt=""
                  />
                </span>
                <span>350台</span>
              </div>
              <div style={{ color: "#fff" }}>
                <span>区域三</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi-3.png")}
                    alt=""
                  />
                </span>
                <span>575台</span>
              </div>
            </div> */}
          </div>
          <div
            className="LeftContent"
            style={{ margin: 15, backgroundImage: "none", height: "150px" }}
          >
            <span style={{ color: "#fff", fontSize: "16px" }}>
              消防系统监测
            </span>
            <EchartsTest7></EchartsTest7>
            {/* <div style={{ margin: "20px" }}>
              <div style={{ color: "#fff" }}>
                <span>温感报警</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi.png")}
                    alt=""
                  />
                </span>
                <span>65</span>
              </div>
              <div style={{ color: "#fff" }}>
                <span>烟感报警</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi-2.png")}
                    alt=""
                  />
                </span>
                <span>589</span>
              </div>
              <div style={{ color: "#fff" }}>
                <span>手动报警</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi-3.png")}
                    alt=""
                  />
                </span>
                <span>558</span>
              </div>
              <div style={{ color: "#fff" }}>
                <span>其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi-3.png")}
                    alt=""
                  />
                </span>
                <span>789</span>
              </div> */}
            {/* </div> */}
          </div>
          <div
            className="LeftContent"
            style={{ margin: 15, backgroundImage: "none", height: "120px" }}
          >
            <div style={{ color: "#fff", fontSize: "16px" }}>电梯运行监测</div>
            <div style={{ margin: "20px", float: "left" }}>
              <h4 style={{ color: "#fff" }}>电梯运行次数(每天)</h4>
              <h2 style={{ color: "#fff", color: "#ffd200" }}>398次</h2>
            </div>
            <div style={{ margin: "20px", float: "left" }}>
              <h4 style={{ color: "#fff" }}>故障次数(每天)</h4>
              <h2 style={{ color: "#fff", color: "#ffd200" }}>0次</h2>
            </div>
          </div>

          <div
            className="LeftContent"
            style={{ margin: 15, backgroundImage: "none", height: "150px" }}
          >
            <span style={{ color: "#fff", fontSize: "16px" }}>安防报警</span>
            <EchartsTest8></EchartsTest8>
            {/* <div style={{ margin: "20px" }}>
              <div style={{ color: "#fff" }}>
                <span style={{color:'#01d2d6'}}>温感报警</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi.png")}
                    alt=""
                  />
                </span>
                <span>65</span>
              </div>
              <div style={{ color: "#fff" }}>
                <span style={{color:'#01d2d6'}}>烟感报警</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi-2.png")}
                    alt=""
                  />
                </span>
                <span>589</span>
              </div>
              <div style={{ color: "#fff" }}>
                <span style={{color:'#01d2d6'}}>手动报警</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi-3.png")}
                    alt=""
                  />
                </span>
                <span>558</span>
              </div>
              <div style={{ color: "#fff" }}>
                <span style={{color:'#01d2d6'}}>其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他</span>
                <span>
                  <img
                    style={{ margin: "0 20px" }}
                    src={require("../img/zhuzi-3.png")}
                    alt=""
                  />
                </span>
                <span>789</span>
              </div>
            </div> */}
          </div>

          <div
            className="LeftContent"
            style={{ margin: 15, backgroundImage: "none", height: "240px" }}
          >
            <EchartsTestK></EchartsTestK>
          </div>
        </div>

        {/* <div style={{backgroundColor:'red',width:200,height:80,position:'fixed',bottom:0}}></div> */}
        <div
          style={{
            // backgroundColor: "red",
            width: "100%",
            height: "37px",
            float: "left"
          }}
        >
          {/* <div className="sss" style={{ background: "none" }}>
            111
          </div> */}
          <div
            className="ssones"
            style={{ position: "relative", top: "-80px" }}
          >
            <div>
              <span>
                安防
                <br />
                管理
              </span>
              <img src={require("../img/cl.png")} alt="" />
            </div>
            <div>
              <span>
                设备
                <br />
                管理
              </span>
              <img src={require("../img/cl.png")} alt="" />
            </div>
            <div>
              <span className="spans">
                设备
                <br />
                管理
              </span>
              <img src={require("../img/center.png")} alt="" />
            </div>
            <div>
              <span>
                运营
                <br />
                管理
              </span>
              <img src={require("../img/cl.png")} alt="" />
            </div>
            <div>
              <span>
                节能
                <br />
                管理
              </span>
              <img src={require("../img/cl.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.numberGrow(1, 236);
    this.numberGrow(2, 6.12);
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

export default Model3;

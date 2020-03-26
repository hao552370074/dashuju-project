import EchartsTest from "./model/index";

import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, Progress } from "antd";
import "./homecss.scss";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Model1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerParams: props.match.params
    };
  }
  render() {
    console.log(this,'this');
    return (
      <div className="m-main">
        {/* <img src={require('../img/timg.gif')} alt=""/> */}
        <div className="nav-content">
          <p>艾贝斯灯联网数据可视化</p>
          <div>
            <span>
              <span>
                <img src={require("../img/定位.png")} alt="" />
              </span>
              <span>成都</span>
            </span>
            <span>
              <span>
                <img src={require("../img/天气.png")} alt="" />
              </span>
              <span>多云 32℃</span>
            </span>
            <span>
              <span>
                <img src={require("../img/时间.png")} alt="" />
              </span>
              <span>6 ：00</span>
            </span>
            <span>
              <span>
                <img src={require("../img/时间.png")} alt="" />
              </span>
              <span>18：30</span>
            </span>
            <span className="vb">
              <span>2019-04-28 14：04:48 星期日</span>
            </span>
          </div>
        </div>

        <div className="left-content">
          <div>
            <span>设备状态</span>
            <p>
              配电箱数量 <i>9 8 0 0 台</i>
            </p>
            <div
              style={{
                float: "left",
                width: "30%",
                textAlign: "center",
                position: "relative"
              }}
            >
              <p>在线数量</p>
              <h3 style={{ color: "#17d3fe" }}>10000台</h3>
              <h2
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "25%",
                  fontSize: "15px",
                  color: "#1dd7ff"
                }}
              >
                60%
                <br />
                在线率
              </h2>
              <img width="80" src={require("../img/yuan.png")} alt="" />
            </div>
            <div
              style={{
                float: "left",
                width: "30%",
                textAlign: "center",
                margin: "0 10px",
                position: "relative"
              }}
            >
              <p>离线数量</p>
              <h3 style={{ color: "#17d3fe" }}>10000台</h3>
              <h2
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "25%",
                  fontSize: "15px",
                  color: "#36febc"
                }}
              >
                60%
                <br />
                离线率
              </h2>
              <img width="80" src={require("../img/yuan1.png")} alt="" />
            </div>
            <div
              style={{
                float: "left",
                width: "30%",
                textAlign: "center",
                position: "relative",
                margin: "0 0 40px 0"
              }}
            >
              <p>告警数量</p>
              <h3 style={{ color: "#17d3fe" }}>10000台</h3>
              <h2
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "25%",
                  fontSize: "15px",
                  color: "#ff8243"
                }}
              >
                60%
                <br />
                告警率
              </h2>
              <img width="80" src={require("../img/yuan2.png")} alt="" />
            </div>
          </div>
          <div>
            <span>单灯状态</span>
            <p>
              单灯数量 <i>9 8 0 0 台</i>
            </p>
            <div
              style={{
                float: "left",
                width: "30%",
                textAlign: "center",
                position: "relative"
              }}
            >
              <p>在线数量</p>
              <h3 style={{ color: "#17d3fe" }}>10000台</h3>
              <h2
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "25%",
                  fontSize: "15px",
                  color: "#1dd7ff"
                }}
              >
                60%
                <br />
                在线率
              </h2>
              <img width="80" src={require("../img/yuan.png")} alt="" />
            </div>
            <div
              style={{
                float: "left",
                width: "30%",
                textAlign: "center",
                margin: "0 10px",
                position: "relative"
              }}
            >
              <p>离线数量</p>
              <h3 style={{ color: "#17d3fe" }}>10000台</h3>
              <h2
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "25%",
                  fontSize: "15px",
                  color: "#36febc"
                }}
              >
                60%
                <br />
                离线率
              </h2>
              <img width="80" src={require("../img/yuan1.png")} alt="" />
            </div>
            <div
              style={{
                float: "left",
                width: "30%",
                textAlign: "center",
                position: "relative",
                margin: "0 0 80px 0"
              }}
            >
              <p>告警数量</p>
              <h3 style={{ color: "#17d3fe" }}>10000台</h3>
              <h2
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "25%",
                  fontSize: "15px",
                  color: "#ff8243"
                }}
              >
                60%
                <br />
                告警率
              </h2>
              <img width="80" src={require("../img/yuan2.png")} alt="" />
            </div>
          </div>
          <div>
            <span>开关灯计划</span>
            <p>
              控制模式 <i>经纬控制</i>
            </p>
            <p>
              昨日开关时间 <i>18：00~07：00</i>
            </p>
            <p>
              今日计划时间 <i>18：30~07：00</i>
            </p>
          </div>
        </div>

        <div className="center-content">
          <span>
            单灯亮灯图 <i>能耗热力图</i> <i>能耗柱状图</i>
          </span>
          <div className="bjs"></div>
          <div style={{ overflow: "hidden" }}>
            <div style={{ float: "left", width: "33%" }}>
              <span>告警计划</span>
              <p>
                告警总数 <i>888</i>
              </p>
              <p>
                待处理警告 <i>8</i>
              </p>
              <p>
                已处理警告 <i>880</i>
              </p>
            </div>
            <div style={{ float: "left", width: "33%" }}>
              <span>告警项目分布</span>
              <p>
                告警总数 <i>888</i>
              </p>
              <p>
                待处理警告 <i>8</i>
              </p>
              <p>
                已处理警告 <i>880</i>
              </p>
            </div>
            <div style={{ float: "left", width: "33%" }}>
              <span>最新告警</span>
              <p></p>
              <i>
                某某设备异常告警,某某设备异常告警,某某设备异常告警,某某设备异常告警,
              </i>
              <i>
                某某设备异常告警,某某设备异常告警,某某设备异常告警,某某设备异常告警,
              </i>
            </div>
          </div>
          <div style={{}}>
            <span>工单生命周期分布</span>
            <p style={{ display: "inline-block" }}>
              本月工单总数 <i>9 8 7 6 5 单</i>
            </p>
            <p style={{ display: "inline-block", margin: "0 40px" }}>
              待处理警告 <i>8</i>
            </p>
            <p style={{ display: "inline-block" }}>
              已处理警告 <i>880</i>
            </p>
            <div className="ktext">
              <p>
                <i>创建10</i>
              </p>
              <p>
                <i>创建10</i>
              </p>
              <p>
                <i>创建10</i>
              </p>
              <p>
                <i>创建10</i>
              </p>
              <p>
                <i>创建10</i>
              </p>
              <p>
                <i>创建10</i>
              </p>
              <p>
                <i>创建10</i>
              </p>
              <p style={{ width: "45px", textAlign: "right" }}>
                <i>创建10</i>
              </p>
            </div>
            <div className="kkk">
              <p>26%</p>
              <p>10%</p>
              <p>10%</p>
              <p>10%</p>
              <p>12%</p>
              <p>40%</p>
              <p>10%</p>
              <p>20%</p>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div style={{marginBottom:'30px'}}>
            <span>能耗数据</span>
            <p style={{fontSize:'12px'}}>昨日能耗</p>
            <h3 style={{textAlign:'center',color:'#17d3fe'}}> 9 8 0 0 0 K W H</h3>
            <Progress
              style={{ width: "100%", display: "block", margin: "0 20px 0 0", }}
              strokeColor={{
                from: "#108ee9",
                to: "#87d068"
              }}
              status="active"
              percent={90}
              strokeLinecap="square"
            />
          </div>
          <div style={{marginBottom:'30px'}}>
            <p style={{fontSize:'12px'}}>本月能耗</p>
            <h3 style={{textAlign:'center',color:'#17d3fe'}}> 9 8 0 0 0 K W H</h3>
            <Progress
              style={{ width: "100%", display: "block", margin: "0 20px 0 0", }}
              strokeColor={{
                from: "#108ee9",
                to: "#87d068"
              }}
              status="active"
              percent={70}
              strokeLinecap="square"
            />
          </div>
          <div style={{marginBottom:'30px'}}>
            <p style={{fontSize:'12px'}}>上月能耗</p>
            <h3 style={{textAlign:'center',color:'#17d3fe'}}> 9 8 0 0 0 K W H</h3>
            <Progress
              style={{ width: "100%", display: "block", margin: "0 20px 0 0", }}
              strokeColor={{
                from: "#108ee9",
                to: "#87d068"
              }}
              status="active"
              percent={30}
              strokeLinecap="square"
            />
          </div>
          <div>
            <EchartsTest></EchartsTest>
          </div>
        </div>
      </div>
    );
  }
}

export default Model1;


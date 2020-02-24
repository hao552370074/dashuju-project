import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button } from "antd";
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
    console.log(this.props);
    return (
      <div className="m-main">
        {/* <img src={require('../img/timg.gif')} alt=""/> */}
        <div className="nav-content">
          <p>艾贝斯灯联网数据可视化</p>
          <div>
            <span>
              <span><img src={require('../img/定位.png')} alt=""/></span>
              <span>成都</span>
            </span>
            <span>
              <span><img src={require('../img/天气.png')} alt=""/></span>
              <span>多云 32℃</span>
            </span>
            <span>
              <span><img src={require('../img/时间.png')} alt=""/></span>
              <span>6 ：00</span>
            </span>
            <span>
              <span><img src={require('../img/时间.png')} alt=""/></span>
              <span>18：30</span>
            </span>
            <span className='vb'>
              <span>2019-04-28 14：04:48 星期日</span>
            </span>
          </div>
        </div>

        <div className="left-content">
          <div>
            <span>设备状态</span>
          </div>
        </div>



      </div>
    );
  }
}

export default Model1;

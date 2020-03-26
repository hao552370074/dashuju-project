import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Button } from "antd";
import history from "./history/history";
import Model1 from "./component/Model-1";
import Model2 from "./component/Model-2";
import Model3 from "./component/Model-3";

import "./App.scss";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // routerParams:props.match.params,
      routeName: ""
    };
  }

  componentDidMount(){
    const getScrollPosition = (el = window) => ({
      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    });
    // 事例
    getScrollPosition(); // {x: 0, y: 200}
  }

  render() {
    console.log(window.location);
    console.log(this, "this");
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">模型</Menu.Item>
            <Menu.Item key="3">关于</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ height: "100vh" }}>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[
                window.location.pathname.replace("/", "") || "1"
              ]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    数据可视化
                  </span>
                }
              >
                <Menu.Item key="Model-1" onClick={() => this.ModelBtn(1)}>
                  Model-1
                </Menu.Item>
                <Menu.Item key="Model-2" onClick={() => this.ModelBtn(2)}>
                  Model-2
                </Menu.Item>
                <Menu.Item key="3" onClick={() => this.ModelBtn(3)}>
                  Model-3
                </Menu.Item>
                <Menu.Item key="4">Model-4</Menu.Item>
                <Menu.Item key="5">Model-5</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="6">option5</Menu.Item>
                <Menu.Item key="7">option6</Menu.Item>
                <Menu.Item key="8">option7</Menu.Item>
                <Menu.Item key="9">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="10">option9</Menu.Item>
                <Menu.Item key="11">option10</Menu.Item>
                <Menu.Item key="12">option11</Menu.Item>
                <Menu.Item key="13">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.routeName}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#0a011c",
                padding: 0,
                margin: 0,
                minHeight: 280
              }}
            >
              <Route path="/Model-1" component={Model1}></Route>
              <Route path="/Model-3" component={Model3}></Route>
              {/* <Route path="/Model-2" component={Model2}></Route> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  ModelBtn = i => {
    if (i == 1) {
      history.push("/Model-1", "哈哈");
      this.setState({
        routeName: "Model-1"
      });
    } else if (i == 2) {
      history.push("/Model-2", "哈哈");
      this.setState({
        routeName: "Model-2"
      });
      // 改变为大屏幕
      console.log(this.props);
      this.props.iss(2);
    } else if (i == 3) {
      history.push("/Model-3", "Model-3");
      this.setState({
        routeName: "Model-3"
      });
      this.props.iss(3);
    }
  };
}

// export default App

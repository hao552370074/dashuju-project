import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Button } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // routerParams:props.match.params,
    };
  }
  render() {
    console.log(this);
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
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ height: "100vh" }}>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
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
                <Menu.Item key="1">Model-1</Menu.Item>
                <Menu.Item key="2">Model-2</Menu.Item>
                <Menu.Item key="3">Model-3</Menu.Item>
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
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

// export default App

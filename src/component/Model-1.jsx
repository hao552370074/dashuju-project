import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button } from "antd";
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
    return <div>
        1
    </div>;
  }
}

export default Model1;

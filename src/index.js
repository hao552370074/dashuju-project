import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import { Router, Link, Route } from "react-router-dom";
import history from "./history/history";
import Model2 from "../src/component/Model-2";
import Model3 from "../src/component/Model-3";

import G2 from "@antv/g2";

// 判断替换整个显示的渲染页面
var ss = (p) => {
  var ifs = 0;
  if (p) {
    ifs = p;
  }
  ReactDOM.render(
    <Router history={history}>
      {ifs ==0? <App iss={ss} /> : ifs ==2?<Model2></Model2>:<Model3></Model3>}
    </Router>,
    document.getElementById("root")
  );
};
ss();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

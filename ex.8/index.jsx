import React from "react";
import ReactDom from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDom.render(
  <Family lastName="Oliveira">
    <Member name="Thiago " />
    <Member name="Amanda " />
    <Member name="Dolores " />
  </Family>,
  document.getElementById("app")
);
import React from "react";

export default props => (
  <div>
    <h3>Familia</h3>
    { React.Children.map(props.children, child => React.cloneElement(child, {...props})) }
  </div>
);
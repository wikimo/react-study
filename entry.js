require("./style.css");

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldComponent from './demo';

ReactDOM.render(
  <HelloWorldComponent />,
  document.getElementById('mountNode')
);
import React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css';

import 'antd/dist/antd.js'

import '@material-ui/core/index.js'

import "rxjs";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import { Button as Btn1 } from 'reactstrap';

import { Provider } from 'react-redux';

import './index.css';

export default () => {
  return <div>
      webpack react 123
      <Button type="primary">你好</Button>
      <Btn1 />
    </div>
}
import React  from 'react'
import ReactRouterDemo from './react-router-demo';
import ReactVirtualizedDemo from './react-virtualized-demo'
import ReactReduxDemo from './react-redux-demo'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1> React 全家桶环境</h1>
      {/* <h2>React Router Demo</h2>
      <ReactRouterDemo /> */}
      {/* <h2>react-virtualized Demo</h2>
      <ReactVirtualizedDemo /> */}
      <h2>react-redux Demo</h2>
      <ReactReduxDemo />
    </div>
  );
}

export default App;

import React from 'react'
import { AutoSizer, List } from 'react-virtualized';
import { generateRandomList } from './util';
import 'antd/es/avatar/style/css';
import './index.css'

const listHeight = 300;
const overscanRowCount = 10;
const listRowHeight = 50;
const list = generateRandomList();
const rowCount = list.length;


function _getDatum(index) {
  return list[index];
}

function NormalMessage({ data, style, index }) {
  return <div className="row" style={style}>
  <div
    className="letter"
    style={{
      backgroundColor: data.color,
    }}>
    {data.name.charAt(0)}
  </div>
  <div>
    <div className="name">{data.name}</div>
    <div className="index">
      This is row {index}
    </div>
    {data.imgSrc ? <img className="img" src={data.imgSrc} /> : null}
  </div>
</div>
}

function  _rowRenderer({index, isScrolling, key, style}) {
  const datum = _getDatum(index);
  return (
    <NormalMessage data={datum} style={style} index={index} key={key} />
  );
}

function Demo() {
  return (
    <div className="react-virtualized-demo">
      <AutoSizer disableHeight>
        {({width}) => (
          <List
            className="list"
            height={listHeight}
            overscanRowCount={overscanRowCount}
            rowCount={rowCount}
            rowHeight={listRowHeight}
            rowRenderer={_rowRenderer}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  )
}

export default Demo;
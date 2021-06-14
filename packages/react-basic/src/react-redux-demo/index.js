import React from 'react'
import { Provider, connect } from './react-redux/src'
import { createStore } from './redux/src'
import rootReducer from './reducers'

const store = createStore(rootReducer)

function Child(props) {
  return <div>
    <div>name: {props.name}</div>
    <div>age: {props.age}</div>
    <button onClick={() => props.dispatch({
        type: 'CHANGE_NAME',
        data: Math.random()
      })}
    >
      change name
    </button>
    <button onClick={() => props.dispatch({
        type: 'CHANGE_AGE',
        data: Math.random()
      })}
    >
      change age
    </button>
  </div>
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age
  }
}

const mapDispatchToProps = dispatch => ({
  // onClick: () => dispatch()
})

const ConnectChild = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Child)

function Demo() {
  return <Provider store={store}>
    <ConnectChild />
  </Provider>
}
export default Demo;
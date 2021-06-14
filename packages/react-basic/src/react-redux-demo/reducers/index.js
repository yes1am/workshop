const initState = {
  name: 'michael',
  age: 20
}

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return Object.assign({}, state, {
        name: action.data
      })
    case 'CHANGE_AGE':
      return Object.assign({}, state, {
        age: action.data
      })
    default:
      return state
  }
}

export default reducer;
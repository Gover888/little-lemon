import {ADD_TO_TEMP_SELECTED} from '../Const'

const initTempSelected = {}

const tempSelectedReducer = (prevState = initTempSelected, action) => {
  switch (action.type) {
    case ADD_TO_TEMP_SELECTED:
      return {...prevState, ...action.payload}
    default:
      return prevState
  }
}

export default tempSelectedReducer
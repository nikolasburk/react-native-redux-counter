import * as counterAction from './counter.actionTypes'

export const increase = (increaseCount) => {
  return {
    type: counterAction.INCREASE,
    increaseCount: increaseCount
  }
}

export const decrease = (decreaseCount) => {
  return {
    type: counterAction.DECREASE,
    decreaseCount: decreaseCount
  }
}

export const increment = () => {
  return {
    type: counterAction.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: counterAction.DECREMENT
  }
}

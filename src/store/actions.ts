// actions
import actionTypes from './action-types'

export const addTodo = (todo) => ({ type: actionTypes.ADD_TODO, todo })
export const asyncAddToDo = (todo) => (dispatch) => setTimeout(() => dispatch(addTodo(todo)), 2000)

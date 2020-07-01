import actionTypes from './action-types'

export const exampleInitialState = {
    todos: ['hello next-redux'],
}

// REDUCERS(reducer)
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            // eslint-disable-next-line no-case-declarations
            const todos = [...state.todos]
            todos.push(action.todo)
            return { ...state, todos }
        default:
            return state
    }
}

import { createStore, combineReducers, applyMiddleware } from 'redux'
import Immutable from 'immutable'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer, exampleInitialState } from './reducers'

// import createSagaMiddleware from 'redux-saga';//选这个 或者上面的那个redux-thunk  这个需要安装yarn add next-redux-saga redux-saga --save
// initialState

// const reducers = combineReducers({
//   reducer
// });

// state日志
const logger = createLogger({
    stateTransformer: (state) => Immutable.fromJS(state).toJS(),
})

// store
export function initializeStore(initialState = exampleInitialState) {
    return createStore(
        reducer,
        initialState,
        process.env.NODE_ENV === 'production'
            ? applyMiddleware(thunk)
            : applyMiddleware(thunk, logger)
    )
}

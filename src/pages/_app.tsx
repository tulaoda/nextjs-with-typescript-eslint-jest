import App from 'next/app'
import React from 'react'
import withReduxStore from 'lib/with-redux-store' //高阶组件
import { Provider } from 'react-redux'

// @withReduxStore
class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)

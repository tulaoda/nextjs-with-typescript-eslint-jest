import App, { AppProps } from 'next/app'
import React from 'react'
import withReduxStore from 'lib/with-redux-store' //高阶组件
import { Provider } from 'react-redux'
import { withRouter } from 'next/router'
import 'css/index.less'

interface AppProp extends AppProps {
    reduxStore: any
}

// @withReduxStore
class MyApp extends App<AppProp> {

    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withReduxStore(withRouter(MyApp))

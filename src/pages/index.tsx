/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

import Nav from 'components/header'
import Banner from 'components/banner'
import Footer from 'components/footer'
// import Feature7 from './Feature7';
// import Feature0 from './Feature0';
import {
    Nav31DataSource,
    Banner10DataSource,
    // Feature70DataSource,
    // Feature00DataSource,
    Footer10DataSource,
} from 'api/data.source'
// import './less/antMotionStyle.less';

let isMobile
enquireScreen((b) => {
    isMobile = b
})

const { location = {} } = typeof window !== 'undefined' ? window : {}

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobile,
            show: !location.port, // 如果不是 dva 2.0 请删除
        }
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b })
        })
        // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
        /* 如果不是 dva 2.0 请删除 start */
        if (location.port) {
            // 样式 build 时间在 200-300ms 之间;
            setTimeout(() => {
                this.setState({
                    show: true,
                })
            }, 500)
        }
        /* 如果不是 dva 2.0 请删除 end */
    }

    render() {
        const children = [
            <Nav
                id="Nav3_1"
                key="Nav3_1"
                dataSource={Nav31DataSource}
                isMobile={this.state.isMobile}
            />,
            <Banner
                id="Banner1_0"
                key="Banner1_0"
                dataSource={Banner10DataSource}
                isMobile={this.state.isMobile}
            />,
            // <Feature7
            //   id="Feature7_0"
            //   key="Feature7_0"
            //   dataSource={Feature70DataSource}
            //   isMobile={this.state.isMobile}
            // />,
            // <Feature0
            //   id="Feature0_0"
            //   key="Feature0_0"
            //   dataSource={Feature00DataSource}
            //   isMobile={this.state.isMobile}
            // />,
            <Footer
                id="Footer1_0"
                key="Footer1_0"
                dataSource={Footer10DataSource}
                isMobile={this.state.isMobile}
            />,
        ]
        return (
            <div
                className="templates-wrapper"
                ref={(d) => {
                    this.dom = d
                }}
            >
                {/* 如果不是 dva 2.0 替换成 {children} start */}
                {this.state.show && children}
                {/* 如果不是 dva 2.0 替换成 {children} end */}
            </div>
        )
    }
}

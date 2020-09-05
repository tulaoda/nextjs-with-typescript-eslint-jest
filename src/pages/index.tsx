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
import { setRem } from 'lib/rem.ts'

let isMobile
enquireScreen((b) => {
    isMobile = b
})

interface IProps {}

interface IState {
    isMobile: boolean
}

export default class Home extends React.PureComponent<IProps, IState> {
    dom: HTMLDivElement
    constructor(props) {
        super(props)
        this.state = {
            isMobile,
        }
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b })
            if (!!b) {
                setRem()
                // 改变窗口大小时重新设置 rem
                window.onresize = function () {
                    setRem()
                }
            }
        })
    }

    render() {
        const { isMobile } = this.state
        const children = [
            <Nav
                id="Nav3_1"
                key="Nav3_1"
                dataSource={Nav31DataSource}
                isMobile={isMobile}
            />,
            <Banner
                id="Banner1_0"
                key="Banner1_0"
                dataSource={Banner10DataSource}
                isMobile={isMobile}
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
                isMobile={isMobile}
            />,
        ]
        return (
            <div
                className="templates-wrapper"
                ref={(d) => {
                    this.dom = d
                }}
            >
                {children}
            </div>
        )
    }
}

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { setRem } from 'lib/rem.ts'

export default class MyDocument extends Document {
    componentDidMount() {
        const ua = navigator.userAgent
        let userAgent
        if (
            ua.indexOf('Android') > 0 ||
            ua.indexOf('iPhone') > 0 ||
            ua.indexOf('iPad') > 0
        ) {
            //移动端
            userAgent = 'mobile'
            setRem()
            // 改变窗口大小时重新设置 rem
            window.onresize = function () {
                setRem()
            }
        } else {
            userAgent = 'pc'
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

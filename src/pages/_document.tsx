import Document, { Html, Head, Main, NextScript } from 'next/document'
import { setRem } from 'lib/rem.ts'

export default class MyDocument extends Document {
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

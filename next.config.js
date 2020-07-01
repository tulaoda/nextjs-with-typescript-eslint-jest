const path = require('path')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
// const withLess = require('@zeit/next-less') //需要使用less不实用scss的大佬,把withSass替换成withSass即可,如果都需要就都引入
const withPlugins = require('next-compose-plugins') //结合sass css
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const withAntd = require('./next-antd.config')

const isProd = process.env.NODE_ENV === 'production'

function HACK_removeMinimizeOptionFromCssLoaders(config) {
    console.warn(
        'HACK: Removing `minimize` option from `css-loader` entries in Webpack config'
    )
    config.module.rules.forEach((rule) => {
        if (Array.isArray(rule.use)) {
            rule.use.forEach((u) => {
                if (u.loader === 'css-loader' && u.options) {
                    delete u.options.minimize
                }
            })
        }
    })
}

const nextConfig = {
    assetPrefix: isProd ? 'https://blog.wipi.tech/ramiko/' : '/',
    // experimental: {
    //     basePath: isProd ? '' : '/api',
    // },
    webpack: (config) => {
        HACK_removeMinimizeOptionFromCssLoaders(config)
        return config
    },
    distDir: 'dist',
}

module.exports = withPlugins(
    [
        [withCss],
        [
            withSass,
            {
                // cssModules: true,
                // cssLoaderOptions: {
                //     localIdentName: '[local]___[hash:base64:5]',
                // },
            },
        ],
        [
            withAntd,
            {
                // cssModules: true,
                // cssLoaderOptions: {
                //     sourceMap: false,
                //     importLoaders: 1,
                // },
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                    // modifyVars: antdVariables
                },
            },
        ],
    ],
    nextConfig
)

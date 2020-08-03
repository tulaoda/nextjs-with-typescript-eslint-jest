const path = require('path')
const fs = require('fs')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins') //结合sass css
const withAntd = require('./next-antd.config')
const lessToJS = require('less-vars-to-js')
const childProcess = require('child_process')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
    fs.readFileSync(
        path.resolve(__dirname, './src/assets/antd-custom.less'),
        'utf8'
    )
)

function RemoveMinimizeOptionFromCssLoaders(config) {
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

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: '/',
    // experimental: {
    //     basePath: isProd ? '' : '/api',
    // },
    webpack: (config) => {
        RemoveMinimizeOptionFromCssLoaders(config)
        if (isProd) {
            // 生成提交日志
            // %H提交对象（commit）的完整哈希字串  %ad作者修订日期（可以用 --date= 选项定制格式）
            isProd &&
                childProcess.exec(
                    'git log --pretty="%H - %ad" --date=iso-local --since="2020-01-01"',
                    function (error, stdout) {
                        if (!error) {
                            const DIST_PATH = path.resolve(__dirname, './.next')
                            fs.appendFileSync(
                                `${DIST_PATH}/web-commit.log`,
                                '',
                                'utf-8'
                            )
                            fs.writeFileSync(
                                `${DIST_PATH}/web-commit.log`,
                                stdout,
                                'utf-8'
                            )
                        }
                    }
                )
        }
        return config
    },
    typescript: {
        ignoreBuildErrors: true,
    },
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
                        modifyVars: themeVariables,
                    },
                },
            },
        ],
    ],
    nextConfig
)

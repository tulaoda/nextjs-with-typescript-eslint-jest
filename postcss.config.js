module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                'ie >= 8', // 兼容IE7以上浏览器
                'Firefox >= 3.5', // 兼容火狐版本号大于3.5浏览器
                'chrome  >= 35', // 兼容谷歌版本号大于35浏览器,
                'opera >= 11.5', // 兼容欧朋版本号大于11.5浏览器,
                'chrome  >= 36', // 如果需要适配的浏览器完全兼容则不会添加前缀
            ],
        },
        'postcss-pxtorem': {
            rootValue: 16, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            propList: ['*'],
        },
    },
}

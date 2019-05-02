module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        disableHostCheck: true,
        proxy: {
            '/portal': {                        // 自訂 local 端的位置
                target: 'https://portal.devel.starlordtech.com/',  // 遠端 URL Domain
                changeOrigin: true,
                pathRewrite: {
                    '^/portal': ''
                }
            }
        },
        progress: true
    }
}
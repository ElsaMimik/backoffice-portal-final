module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        disableHostCheck: true,
        proxy: {
            '/backoffice': {
                target: 'https://backoffice-api.devel.starlordtech.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/backoffice': ''
                }
            }
        },
        progress: true
    }
}
module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        disableHostCheck: true,
        proxy: {
            '/portal': {
                target: 'https://portal.devel.starlordtech.com/api/v1/',
                changeOrigin: true,
                pathRewrite: {
                    '^/portal': ''
                }
            }
        },
        progress: true
    },
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    }
}

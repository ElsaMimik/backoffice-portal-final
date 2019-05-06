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
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/base/_reset.scss";
                        @import "@/assets/css/layout/_layout.scss";
                        @import "@/assets/css/components/_components.scss";
                    `
            }
        }
    },
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    }
}

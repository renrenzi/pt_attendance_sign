
module.exports = {
    devServer: {
        port: 8080,
        open: true,
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            'dev-api': {
                target: 'http://localhost:9527/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/dev-api': '' // dev 环境
                }
            }
        }

    },
}

module.exports = {
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 1005,
        hot: true,
        proxy: {
            '/api': {
                target: "http://59.111.104.104:8086",
                changeOrigin: true,
                pathRewrite: {
                    '^/api/': ''
                }
            }
        }
    },
}
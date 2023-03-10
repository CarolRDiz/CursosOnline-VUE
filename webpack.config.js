const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
          'process.env.VUE_APP_ROOT_API': JSON.stringify(process.env.VUE_APP_ROOT_API)
        })
    ],
}
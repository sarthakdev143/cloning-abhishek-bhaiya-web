const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
    if (env === 'production') {
        const htmlPlugin = config.plugins.find(
            (plugin) => plugin instanceof HtmlWebpackPlugin
        );
        if (htmlPlugin) {
            htmlPlugin.options.publicPath = '/cloning-abhishek-bhaiya-web/';
        }
    }
    return config;
};

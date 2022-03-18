module.exports = {
    outputDir: "dist",
    filenameHashing: false,
    productionSourceMap: false,
    devServer: {proxy: "http://localhost:8081"},
    configureWebpack: {performance: {hints: false}}
};
var path = require("path")

module.exports = {
  // 빌드 파일 설정
  outputDir : path.resolve(__dirname, "../minimalStoreApi/public/front"), 
  devServer: { 
    proxy: { // proxyTable 설정 
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    } 
  },
  "transpileDependencies": [
    "vuetify"
  ],
}
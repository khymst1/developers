const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/common/common.scss";'
      }
    }
  }
}


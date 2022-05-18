const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  configureWebpack: (config) => {
    return {
      devServer: {
        proxy: {
          "/wp-json": {
            target: "https://wordpress",
            secure: false,
            changeOrigin: true,
          },
        },
      },
    };
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
});

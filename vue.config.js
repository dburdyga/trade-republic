module.exports = {
  pluginOptions: {
    svgSprite: {
      dir: "src/assets/icons",
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: "img/icons.svg",
      },
      pluginOptions: {
        plainSprite: true,
      },
    },
  },
  lintOnSave: false,

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/base/variables.scss";',
      },
    },
  },

  chainWebpack: (config) => {
    config.module.rule("svg-sprite").use("svgo-loader").loader("svgo-loader");
  },
};

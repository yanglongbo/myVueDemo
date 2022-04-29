module.exports = {
    plugins: {
      autoprefixer: {
        Browserslist: ["Android >= 4.0", "iOS >= 7"],
      },
      "postcss-pxtorem": {
        rootValue: 75, //参照750px尺寸的设计稿,为方便开发计算，让1rem=100px，那么html的fontSize=设计稿元素宽度/7.5（rem）
        propList: ["*"],
      },
    },
  };
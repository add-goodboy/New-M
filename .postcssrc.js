module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    // postcss-pxtorem:将 px 转换为 rem
    'postcss-pxtorem': {
      // rootValue: 37.5,
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // propList表示要配置的CSS属性 * 表示所有
      propList: ['*']
    }
  }
}

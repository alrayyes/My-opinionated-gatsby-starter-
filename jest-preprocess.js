const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
  plugins: ["emotion"],
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require("babel-jest").createTransformer(babelOptions)

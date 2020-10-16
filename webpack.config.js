const path = require("path");       // Same as -> import path from "path" but can't use because webpack is not modern js
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;						//WEBPACK_ENV package.json의 dev:assets, build:assests의 것과 같아야 함
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");		// assets폴더 안의 js 폴더 안의 main.js 경로를 나타냄
const OUTPUT_DIR = path.join(__dirname, "static");				// static 폴더로 보내라

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {                                 // when meeting a module
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },                                    // follw the rules
      {
        test: /\.(scss)$/,                  // which ends with scss
        use: ExtractCSS.extract([           // then use these plugin
          {
            loader: "css-loader"            // 3. with css-loader, webpack can understand CSS
          },
          {
            loader: "postcss-loader",       // 2. gets the CSS and transform CSS with plugin
            options: {
              postcssOptions: {
                plugins() {
                  return [autoprefixer({ browsers: "cover 99.5%" })];
                }
              }
            }
          },
          {
            loader: "sass-loader"           // 1. sass-loader gets Sass or SCSS and transform to normal CSS
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
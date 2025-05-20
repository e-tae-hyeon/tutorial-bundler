const path = require("path");

module.exports = {
  mode: "development",
  entry: "./main.tsx", // 어떤 파일을 진입점으로 번들링할지
  output: {
    filename: "bundle.js", // 번들로 만들어질 파일 이름
    path: path.resolve(__dirname, "dist"), // 번들 파일이 어디에 저장될지
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts와 .tsx 파일을 대상으로
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", // 최신 JS 문법을 변환해요
                "@babel/preset-react", // JSX를 변환해요
                "@babel/preset-typescript", // 타입스크립트를 변환해요
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // .css 파일을 처리해요
        use: [
          "style-loader", // CSS를 <style> 태그로 주입해요
          "css-loader", // CSS를 JavaScript 모듈로 변환해요
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 이미지 파일 확장자
        type: "asset", // Asset Modules 사용
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 폰트 파일 확장자
        type: "asset/resource", // 폰트는 항상 별도 파일로 내보내요
        generator: {
          filename: "assets/[name][ext]", // 원하는 폴더와 이름 형태로 설정
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // .tsx 확장자도 처리할 수 있게 해요
  },
};

const path = require('path')
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@/components/ui": path.resolve(
              __dirname,
              "./components/ui"
            ),
            "global.css": path.resolve(__dirname, "./global.css"),
          },
        },
      ],
      "@babel/plugin-transform-modules-commonjs",
      "react-native-reanimated/plugin",
    ],
  };
};

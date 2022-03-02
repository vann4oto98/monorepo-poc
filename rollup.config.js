import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

export default (opts) => {
  const options = Object.assign(
    {
      css: true
    },
    opts
  );

  return {
    input: options.input,
    output: [
      { format: "cjs", file: "./dist/index.cjs.js", sourcemap: false },
      { format: "es", file: "./dist/index.es.js", sourcemap: false }
    ],

    external: [
      "react",
      "react-dom",
      "prop-types",
      "react-helmet",
      "styled-components",
      "classnames",
      "core-js"
    ],

    plugins: [
      nodeResolve({
        extensions: [".js", ".jsx"]
      }),
      commonjs({
        namedExports: {
          "react-is": [
            "isForwardRef",
            "isValidElementType",
            "ForwardRef",
            "Memo",
            "isFragment"
          ],
          "react/jsx-runtime": ["jsx", "jsxs"],
          "prop-types": ["elementType"]
        }
      }),
      babel({
        exclude: "node_modules/**",
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              useBuiltIns: "entry",
              targets: "> 0.25%, not dead",
              corejs: "3.0.0"
            }
          ],
          "@babel/react"
        ]
      })
    ]
  };
};

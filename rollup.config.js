import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

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
      {
        file: "dist/components.esm.js",
        format: "es"
      },
      {
        file: "dist/components.cjs.js",
        format: "cjs"
      }
    ],
    plugins: [
      resolve({
        extensions: [".js", ".jsx"]
      }),
      commonjs({
        namedExports: {
          "react-is": [
            "isForwardRef",
            "isValidElementType",
            "ForwardRef",
            "isFragment"
          ],
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
    ],
    external: [
      "react",
      "react-dom",
      "@mui/material",
      "react-is",
      "react/jsx-runtime"
    ]
  };
};

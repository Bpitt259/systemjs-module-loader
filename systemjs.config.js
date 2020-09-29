"use strict";

System.config({
  baseUrl: "../src",
  paths: {
    "unpkg:*": "//unpkg.com/*",
  },
  map: {
    "plugin-babel": "unpkg:systemjs-plugin-babel@0/plugin-babel.js",
    "systemjs-babel-build":
      "unpkg:systemjs-plugin-babel@0/systemjs-babel-browser.js",
  },
  transpiler: "plugin-babel",
  babelOptions: {
    sourceMaps: false,
    stage0: true,
  },
});

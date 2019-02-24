module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "flowtype"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "flowtype/require-valid-file-annotation": [
      2,
      "always",
      {
         "annotationStyle": "line"
      }
    ],
    "flowtype/no-weak-types": [2],
    "flowtype/require-return-type": [2, "always"],
  },
  "overrides": {
    "files": [
      "setupTests.js",
      "*.test.js"
    ],
    "settings": {
      "flowtype": {
        "onlyFilesWithFlowAnnotation": true
      }
    }
  }
};

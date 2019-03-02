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
    "es6": true,
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "flowtype/require-valid-file-annotation": [
      "error",
      "always",
      {
         "annotationStyle": "line"
      }
    ],
    "flowtype/no-weak-types": ["error"],
    "flowtype/require-return-type": ["error", "always"],
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
    },
    "rules": {
      "global-require": "off"
    }
  }
};

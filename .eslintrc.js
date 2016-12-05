const branch = require('child_process').execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const warnOrError = branch === "master" ? "error" : "warn"

module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 7,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            warnOrError,
            2,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            warnOrError,
            "unix"
        ],
        "semi": [
            warnOrError,
            "never"
        ],
        "no-warning-comments": [ "off" ],
        "comma-dangle": [ "off" ],
        "no-console": [ "off" ],
        "no-unused-vars": [ warnOrError ],

        "object-curly-spacing": [ warnOrError, "always" ],
        "comma-spacing": [ warnOrError, {
          "before": false,
          "after": true
        } ],
        "array-bracket-spacing": [ warnOrError, "never" ],
        "computed-property-spacing": [ warnOrError, "never"],
        "space-in-parens": [ warnOrError, "never" ]
    }
};

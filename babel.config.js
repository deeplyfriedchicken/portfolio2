/* eslint-disable */
module.exports = {
    "presets": [
        [
            "@babel/env",
            {
                "useBuiltIns": "entry",
                "corejs": "3.0.0",
            }
        ],
        "@babel/typescript",
        "@babel/preset-react",
    ],
    "plugins": [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
};
const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(".","build"),
        filename : "bundle.js"
    },
    mode : "development",

    module : {
        rule : [
            {test: /\.css$/, use:["style-loader","css-loader"]}
        ],
    },
}
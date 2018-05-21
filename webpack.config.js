const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "react",
                        "es2015",
                        "stage-2"
                    ]
                }
            },
            {
                test:/\.(sass|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
};

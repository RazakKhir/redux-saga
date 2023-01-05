const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/i,
                use: [
                    {loader: "css-loader"},
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true,
                        }
                    }
                ],
            },
            // {
            //     test: /\.(jpg|png|svg|gif)$/,  --> for now, not using any image file extension. once use, enable this part
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: "url-loader?limit=1000",
            //             options: {
            //                 sourceMap: true,
            //             }
            //         },
            //         {
            //             loader: 'file-loader',
            //         }
            //     ]
            // }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
};
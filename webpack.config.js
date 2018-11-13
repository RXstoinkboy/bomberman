module.exports = {
    entry: {
index: './src/js/index.js' // tutaj podajemy sciezke do plików wyjsciowych, każdy plik to osobna własciowść,
},
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'bundle-[name].js'
    },
    watch: true,
    mode: "development", //ta opcja zostanie pominięta jeżeli użyjemy npm run build
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env", {
                            targets: {
                                browsers: ['> 1%']
                            }
                        }]]
                    }
                }
            }
        ]
    }
}

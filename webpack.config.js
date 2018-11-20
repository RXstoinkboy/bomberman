module.exports = {
    entry: {
index: './src/js/index.mjs',
characters: './src/js/Characters.mjs',
VAR: './src/js/VAR.mjs' // tutaj podajemy sciezke do plików wyjsciowych, każdy plik to osobna własciowść,
},
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'bundle-[name].mjs'
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

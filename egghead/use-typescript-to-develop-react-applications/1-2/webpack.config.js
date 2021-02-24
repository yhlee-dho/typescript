module.export = {
    devtool: 'inline-source-map',
    entry: './sec/app/tsx',
    output: {
        path: __dirname + 'public',
        filename: 'build/app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader'}
            
        ]
    }
}
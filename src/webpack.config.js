import path from "path"
module.exports = {
    module: {
        rules: [
            {
                test: /\.(html)$/,
                include: path.join(__dirname, 'src/assets/excelHtml.html'),
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            }
        ],
    },
};

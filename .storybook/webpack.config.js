const path = require('path');

module.exports = async ({config}) => {
    config.module.rules.push({
        test: /\.less$/,
        include: path.resolve(__dirname, '../packages/'),
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        mode: `local`,
                        localIdentName: `vzd__[name]__[local]`,
                    },
                }
            },
            {
                loader: 'less-loader',
            },
        ],
    });

    return config;
};

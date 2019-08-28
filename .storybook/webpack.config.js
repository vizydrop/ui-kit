const path = require('path');

module.exports = async ({config}) => {
    let babelLoader;

    config.module.rules
        .some((rule) => {
            loader = rule.use.find((mw) => mw.loader === `babel-loader`);

            if (loader) {
                babelLoader = loader;
                return true;
            }
        });

    // support commonjs modules
    babelLoader.options.sourceType = 'unambiguous';

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

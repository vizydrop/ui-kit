const macros = require(`babel-plugin-macros`);
const reactPreset = require(`@babel/preset-react`);
const {createTransformer} = require(`babel-jest`);
const transformClassProperties = require(`@babel/plugin-proposal-class-properties`);

module.exports = createTransformer({
    babelrc: false,
    presets: [
        reactPreset,
        [require.resolve(`@babel/preset-env`), {
            targets: {
                node: `8.9`,
            },
        }],
    ],
    plugins: [
        macros,
        transformClassProperties,
    ],
});

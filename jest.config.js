module.exports = {
    transform: {'^.+\\.jsx?$': `./jest/fileTransformer.js`},
    moduleNameMapper: {
        "\\.(css|less)$": `identity-obj-proxy`,
    },
    moduleDirectories: [
        `node_modules`,
    ],
};

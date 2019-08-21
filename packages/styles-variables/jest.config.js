module.exports = {
    transform: {'^.+\\.jsx?$': `<rootDir>/jest/fileTransformer.js`},
    moduleDirectories: [
        `node_modules`,
    ],
};

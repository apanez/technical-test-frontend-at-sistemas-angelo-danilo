/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    setupFiles: [
        "./src/setupJest.js"
    ],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
    testEnvironment: 'jsdom'
};

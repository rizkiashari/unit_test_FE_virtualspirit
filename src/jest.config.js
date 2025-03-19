module.exports = {
    collectCoverage: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/components/**",
        "!<rootDir>/src/*.config.js",
    ],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    // ignore the following directories
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/src/routes/**',
        '<rootDir>/src/constants/**',
        '<rootDir>/src/containers/**',
        '<rootDir>/src/store/actions/**',
        '<rootDir>/src/reportWebVitals.js',
        '<rootDir>/src/App',
    ],
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
        "<rootDir>/src/App",
    ],

};
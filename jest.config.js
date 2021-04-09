module.exports = {
    moduleDirectories: ['<rootDir>/node_modules'],
    moduleNameMapper: {
        '\\.(woff2?|ttf|otf|eot|png|jpe?g|gif|svg|css|scss)$': '<rootDir>/jest.mock.js',
    },
    coveragePathIgnorePatterns: ['/node_modules/', 'styles.ts'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': 'jest-svg-transformer',
    },
    transformIgnorePatterns: ['node_modules'],
    collectCoverageFrom: ['src/**/*.tsx'],
    reporters: ['default', 'jest-junit'],
    coverageReporters: ['cobertura', 'text', 'lcov', 'html'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
};

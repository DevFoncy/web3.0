const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',

    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/components/*/*/index.{js,jsx}',
    'src/lib/*/*.{js,jsx}',
    'pages/*.{js,jsx}',
  ],
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

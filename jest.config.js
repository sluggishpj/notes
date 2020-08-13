// https://jestjs.io/docs/zh-Hans/api
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['text', 'text-summary'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  }
}

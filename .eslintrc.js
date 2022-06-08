module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    // 结尾不使用分号
    semi: ['error', 'never'],
    'import/prefer-default-export': 0,
    'template-curly-spacing': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'import/no-unresolved': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'no-script-url': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-bitwise': 0,
    'import/extensions': 0,
    'func-names': 'warn',
    'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}

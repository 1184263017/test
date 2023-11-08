module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['error', 'windows'],
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'res', // for Express responses
          'item', // for Express responses
          'state', // for vuex state 解决assignment to property of function parameter ‘state‘
          'config', // for vuex state 解决assignment to property of function parameter ‘state‘
        ],
      },
    ],
  },
};

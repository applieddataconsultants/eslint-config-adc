module.exports = {
  extends: ['./index.js', 'plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    'react/sort-prop-types': 1,
    'react/self-closing-comp': 1,

    // JSX-specific.
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-equals-spacing': 1,
    'react/jsx-indent-props': [1, 2],
    'react/jsx-space-before-closing': 1,
    'react/jsx-wrap-multilines': 1,
  },
  parserOptions: {ecmaFeatures: {jsx: true}},
}

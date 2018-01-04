module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    // Possible Errors.
    'no-console': 0,
    'no-extra-parens': 0,
    'no-regex-spaces': 1,
    'no-unsafe-negation': 2,
    'valid-jsdoc': 1,

    // Best Practices.
    'dot-location': [1, 'property'],
    'dot-notation': 1,
    'no-floating-decimal': 1,
    'no-implicit-coercion': 1,
    'no-multi-spaces': 1,
    'wrap-iife': 1,
    yoda: 1,

    // Variables.
    'no-shadow': 2,
    'no-undef-init': 1,
    'no-unused-vars': [1, {argsIgnorePattern: '^_'}],

    // Stylistic Issues.
    'array-bracket-spacing': [1, 'never'],
    'block-spacing': [1, 'always'],
    'comma-dangle': [1, 'always-multiline'],
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 1,
    'eol-last': 1,
    'func-call-spacing': 1,
    indent: [1, 2],
    'jsx-quotes': 1,
    'key-spacing': 1,
    'keyword-spacing': 1,
    'linebreak-style': 1,
    'lines-around-comment': 1,
    'lines-around-directive': 1,
    'new-parens': 1,
    'no-multiple-empty-lines': 1,
    'no-trailing-spaces': 1,
    'no-whitespace-before-property': 1,
    'object-curly-newline': 1,
    'object-curly-spacing': [1, 'never'],
    'quote-props': [1, 'as-needed'],
    quotes: [1, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    semi: [1, 'never'],
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': 1,
    'spaced-comment': 1,

    // Node.
    'handle-callback-err': 2,
    'no-path-concat': 2,

    // ECMAScript 6.
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'generator-star-spacing': 1,
    'no-useless-computed-key': 1,
    'rest-spread-spacing': 1,
    'template-curly-spacing': [1, 'never'],
    'yield-star-spacing': 1,
  },
}

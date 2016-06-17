[![npm](https://img.shields.io/npm/v/eslint-config-adc.svg)](https://npmjs.org/package/eslint-config-adc) [![js-adc-style](https://img.shields.io/badge/code%20style-adc-brightgreen.svg)](https://github.com/applieddataconsultants/eslint-config-adc)

An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for Node/JS projects at Applied Data Consultants. Intended not only for linting but also for formatting per the `--fix` flag.

### Setup

```sh
npm install eslint-config-standard -g
```

Then add the following to your `.eslintrc`

```
{
  "extends": "adc"
}
```

If you are developing a React project, use the following instead:

```
{
  "extends": "adc/react"
}
```

### Project badge

Use this in one of your projects? Include one of these badges in your readme to let people know that your code is using the adc style.

[![js-adc-style](https://img.shields.io/badge/code%20style-adc-brightgreen.svg)](https://github.com/applieddataconsultants/eslint-config-adc)

```markdown
[![js-adc-style](https://img.shields.io/badge/code%20style-adc-brightgreen.svg)](https://github.com/applieddataconsultants/eslint-config-adc)
```

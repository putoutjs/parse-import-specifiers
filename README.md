# parse-import-specifiers [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/parse-import-specifiers.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/parse-import-specifiers "npm"

Parse [`ImportSpecifiers`](https://github.com/estree/estree/blob/master/es2015.md#importspecifier) to 3 arrays according to type.

## Install

```
npm i parse-import-specifiers
```

## API

```js
const {
    defaults,
    namespaces,
    imports,
} = parseSpecifiers(specifiers);

for (const spec of defaults) {
}

for (const spec of namespaces) {
}

for (const spec of imports) {
}
```

## License

MIT

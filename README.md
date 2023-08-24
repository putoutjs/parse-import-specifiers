# parse-import-specifiers [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/parse-import-specifiers.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/parse-import-specifiers "npm"

Parse [`ImportSpecifiers`](https://github.com/estree/estree/blob/master/es2015.md#importspecifier) to `3 arrays` according to type.

## Reasoning

There is `3` types of `ImportSpecifiers`:

- ✅[`ImportDefaultSpecifier`](https://github.com/estree/estree/blob/master/es2015.md#importdefaultspecifier)

```js
import test from 'supertape';
```

- ✅[`ImportNamespaceSpecifier`](https://github.com/estree/estree/blob/master/es2015.md#importnamespacespecifier)

```js
import * as test from 'supertape';
```

- ✅[`ImportSpecifier`](https://github.com/estree/estree/blob/master/es2015.md#importspecifier)

```js
import {stub} from 'supertape';
```

So:

- ☝️ *When you [generate code](https://github.com/putoutjs/printer) you should remember that after code transformations `ImportDefaultSpecifier` can be at the placce of an array.*
- ☝️ *When you check [specifiers to destructure](https://github.com/coderaiser/putout/tree/master/packages/eslint-plugin-putout/lib/multiple-properties-destructuring#readme) you should distinguish Import Specifiers from each other to determine what to do next*.

## Install

```
npm i parse-import-specifiers
```

## API

```js
const {parseImportSpecifiers} = require('parse-imports-specifiers');
const {
    defaults,
    namespaces,
    imports,
} = parseImportSpecifiers(specifiers);

for (const spec of defaults) {}

for (const spec of namespaces) {}

for (const spec of imports) {}
```

## License

MIT

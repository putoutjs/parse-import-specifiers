'use strict';

const {test} = require('supertape');
const {parseImportSpecifiers} = require('..');

test('putout: printer: arrow', (t) => {
    const importDefault = {
        type: 'ImportDefaultSpecifier',
    };
    
    const importSpecifier = {
        type: 'ImportSpecifier',
    };
    
    const importNamespaceSpecifier = {
        type: 'ImportNamespaceSpecifier',
    };
    
    const result = parseImportSpecifiers([
        importDefault,
        importSpecifier,
        importNamespaceSpecifier,
    ]);
    
    const defaults = [importDefault];
    const namespaces = [importNamespaceSpecifier];
    const imports = [importSpecifier];
    
    const expected = {
        defaults,
        namespaces,
        imports,
    }
    
    t.deepEqual(result, expected);
    t.end();
});

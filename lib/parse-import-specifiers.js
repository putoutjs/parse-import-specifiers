'use strict';

module.exports.parseImportSpecifiers = (specifiers) => {
    const defaults = [];
    const namespaces = [];
    const imports = [];
    
    for (const spec of specifiers) {
        if (spec.type === 'ImportDefaultSpecifier') {
            defaults.push(spec);
            continue;
        }
        
        if (spec.type === 'ImportNamespaceSpecifier') {
            namespaces.push(spec);
            continue;
        }
        
        if (spec.type === 'ImportSpecifier') {
            imports.push(spec);
            continue;
        }
    }
    
    return {
        defaults,
        namespaces,
        imports,
    };
};

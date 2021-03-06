'use strict';

module.exports = {
    'env': {
        'node': true,
        'browser': true,
        'mocha': true
    },
    'extends': 'xo',
    'rules': {
        'no-multiple-empty-lines': ['error', { 'max': 3 }],
        'no-multi-spaces': ['error', { 'exceptions': { 'VariableDeclarator': true } }],
        'padded-blocks': 0,
        'space-before-function-paren': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'max-params': ['error', 5]
    }
}

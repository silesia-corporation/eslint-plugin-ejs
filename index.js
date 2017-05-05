'use strict';

module.exports = {
    rules: {
        'no-func-definitions': require('./lib/rules/no-func-definitions'),
        'no-global-variables': require('./lib/rules/no-global-variables'),
        'no-string-concatenations': require('./lib/rules/no-string-concatenations'),
        'no-unwanted-literals': require('./lib/rules/no-unwanted-literals'),
        'no-variable-declarations': require('./lib/rules/no-variable-declarations')
    },
    configs: {
        recommended: {
            rules: {
                'ejs/no-func-definitions': 1,
                'ejs/no-global-variables': 1,
                'ejs/no-string-concatenations': 1,
                'ejs/no-view-onoff-binding': 1,
                'ejs/no-unwanted-literals': 1,
                'ejs/no-variable-declarations': 1
            }
        }
    }
};

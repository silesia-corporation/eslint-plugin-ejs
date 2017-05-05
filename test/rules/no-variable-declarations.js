'use strict';

import test from 'ava';
import rule from '../../lib/rules/no-variable-declarations';
import AvaRuleTester from 'eslint-ava-rule-tester';

const ruleTester = new AvaRuleTester(test, {
    env: {
        es6: true
    }
});

test("rule is defined", t => {
    t.truthy(rule);
});

ruleTester.run('no-variable-declarations', rule, {
    valid: [
        'for (var i =0; i<10; i++) { y = i; }'
    ],
    invalid: [
        {
            code: 'var y = 1;',
            errors: [{ message: 'Variable declaration: y' }]
        }
    ]
});


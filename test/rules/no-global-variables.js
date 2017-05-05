'use strict';

import test from 'ava';
import rule from '../../lib/rules/no-global-variables';
import AvaRuleTester from 'eslint-ava-rule-tester';

const ruleTester = new AvaRuleTester(test, {
    env: {
        es6: true
    }
});

test("rule is defined", t => {
    t.truthy(rule);
});

ruleTester.run('no-global-variables', rule, {
    valid: [
        'xyz'
    ],
    invalid: [
        {
            code: '_',
            errors: [{ message: 'Global variable usage: _' }]
        },
        {
            code: '$',
            errors: [{ message: 'Global variable usage: $' }]
        },
        {
            code: 'moment',
            errors: [{ message: 'Global variable usage: moment' }]
        }
    ]
});


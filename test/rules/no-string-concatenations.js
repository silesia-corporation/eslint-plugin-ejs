'use strict';

import test from 'ava';
import rule from '../../lib/rules/no-string-concatenations';
import AvaRuleTester from 'eslint-ava-rule-tester';

const ruleTester = new AvaRuleTester(test, {
    env: {
        es6: true
    }
});

test("rule is defined", t => {
    t.truthy(rule);
});

ruleTester.run('no-string-concatenations', rule, {
    valid: [
        '"String"'
    ],
    invalid: [
        {
            code: '"String" + "concatenation"',
            errors: [{ message: 'String concatenation forbidden' }]
        }
    ]
});


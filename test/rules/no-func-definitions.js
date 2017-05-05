'use strict';

import test from 'ava';
import rule from '../../lib/rules/no-func-definitions';
import AvaRuleTester from 'eslint-ava-rule-tester';

const ruleTester = new AvaRuleTester(test, {
    env: {
        es6: true
    }
});

test("rule is defined", t => {
    t.truthy(rule);
});

ruleTester.run('no-func-definitions', rule, {
    valid: [
        ''
    ],
    invalid: [
        {
            code: '_.each(comments, function(comment) {})',
            errors: [{ message: 'Functions should not be defined in templates' }]
        }
    ]
});


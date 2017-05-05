'use strict';

import test from 'ava';
import rule from '../../lib/rules/no-unwanted-literals';
import AvaRuleTester from 'eslint-ava-rule-tester';

const ruleTester = new AvaRuleTester(test, {
    env: {
        es6: true
    }
});

test("rule is defined", t => {
    t.truthy(rule);
});

ruleTester.run('no-unwanted-literals', rule, {
    valid: [
        'if (isValid()) {}'
    ],
    invalid: [
        {
            code: 'if (value === "string")  {}',
            errors: [{ message: 'Use a boolean returning function instead of the condition with literal "string" in "if statement"' }]
        }
    ]
});


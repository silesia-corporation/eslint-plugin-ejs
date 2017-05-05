"use strict";

module.exports = function (context) {
    return {
        IfStatement: function (node) {
            if (node.test.operator === "===" && node.test.right.type === "Literal" && typeof(node.test.right.value) === "string") {
                context.report({
                    message: "Use a boolean returning function instead of the condition with literal \"" + node.test.right.value + "\" in \"if statement\"",
                    node: node
                });
            }
        }
    };
};

module.exports.schema = [];

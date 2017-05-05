"use strict";

module.exports = function (context) {
    return {
        BinaryExpression: function (node) {
            if (node.operator === "+" || node.operator === "+=") {
                if ((node.left.type === "Literal" && typeof(node.left.value) === "string") || (node.right.type === "Literal" && typeof(node.right.value) === "string")) {
                    context.report({
                        message: "String concatenation forbidden",
                        node: node
                    });
                }
            }
        }
    };
};

module.exports.schema = [];

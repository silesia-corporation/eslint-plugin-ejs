"use strict";

module.exports = function (context) {
    return {
        FunctionExpression: function (node) {
            if (node.parent.callee && node.parent.callee.name === "each") {
                return;
            }
            context.report({
                message: "Functions should not be defined in templates",
                node: node
            });
        }
    };
};

module.exports.schema = [];

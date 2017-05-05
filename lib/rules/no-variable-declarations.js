"use strict";

module.exports = function (context) {
    return {
        VariableDeclarator: function(node) {
            if (node.parent.parent && (node.parent.parent.type === "ForStatement" || node.parent.parent.type === "ForInStatement" )) {
                return;
            }
            context.report({
                message: "Variable declaration: " + node.id.name,
                node: node
            });
        }
    };
};

module.exports.schema = [];

"use strict";

module.exports = function (context) {
    return {
        Identifier: function (node) {
            if (node.name === "$" || node.name === "_" || node.name === "moment") {
                context.report({
                    message: "Global variable usage: " + node.name,
                    node: node
                });
            }
        }
    };
};

module.exports.schema = [];

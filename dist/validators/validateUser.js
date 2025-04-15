"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateUser = void 0;
const valibot_1 = require("valibot");
const userSchema_1 = require("../schema/userSchema");
const validateCreateUser = (body) => {
    const result = (0, valibot_1.safeParse)(userSchema_1.createUserSchema, body);
    if (!result.success) {
        throw result.issues;
    }
    return result.output;
};
exports.validateCreateUser = validateCreateUser;
//# sourceMappingURL=validateUser.js.map
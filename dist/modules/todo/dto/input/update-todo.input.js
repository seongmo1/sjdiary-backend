"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let UpdateTodoInput = class UpdateTodoInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.MinLength)(1, {
        message: 'contents is too short',
    }),
    (0, class_validator_1.MaxLength)(23, {
        message: 'contents is too long',
    }),
    __metadata("design:type", String)
], UpdateTodoInput.prototype, "contents", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateTodoInput.prototype, "startedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateTodoInput.prototype, "finishedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateTodoInput.prototype, "completedAt", void 0);
UpdateTodoInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateTodoInput);
exports.UpdateTodoInput = UpdateTodoInput;
//# sourceMappingURL=update-todo.input.js.map
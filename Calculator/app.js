#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your 1st Number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your 2nd Number",
    },
    {
        type: "list",
        name: "operation",
        message: "Select Operation",
        choices: ["+", "-", "*", "/"],
    },
])
    .then((answers) => {
    if (answers.operation == "+") {
        const result = answers.num1 + answers.num2;
        console.log("Sum", result);
    }
    else if (answers.operation == "-") {
        const result = answers.num1 - answers.num2;
        console.log("Subtract", result);
    }
    else if (answers.operation == "*") {
        const result = answers.num1 * answers.num2;
        console.log("Multiple", result);
    }
    else if (answers.operation == "/") {
        const result = answers.num1 / answers.num2;
        console.log("Division", result);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});

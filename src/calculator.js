#!/usr/bin/env node

/**
 * Supported operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (*)
 * - division (/)
 */

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function parseNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return number;
}

function calculate(operation, left, right) {
  const a = parseNumber(left);
  const b = parseNumber(right);

  switch (operation) {
    case "add":
    case "+":
      return addition(a, b);
    case "subtract":
    case "-":
      return subtraction(a, b);
    case "multiply":
    case "*":
      return multiplication(a, b);
    case "divide":
    case "/":
      return division(a, b);
    default:
      throw new Error(
        "Unsupported operation. Use add(+), subtract(-), multiply(*), or divide(/).",
      );
  }
}

function printUsage() {
  console.log("Usage: node src/calculator.js <operation> <number1> <number2>");
  console.log("Operations: add(+), subtract(-), multiply(*), divide(/)");
}

if (require.main === module) {
  const [, , operation, left, right] = process.argv;

  if (!operation || left === undefined || right === undefined) {
    printUsage();
    process.exitCode = 1;
  } else {
    try {
      const result = calculate(operation, left, right);
      console.log(result);
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
    }
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
};

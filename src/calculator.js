#!/usr/bin/env node

/**
 * Supported operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (*)
 * - division (/)
 * - modulo (%)
 * - exponentiation (^)
 * - square root (sqrt)
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

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

function parseNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return number;
}

function calculate(operation, left, right) {
  switch (operation) {
    case "sqrt":
    case "squareRoot":
    case "√": {
      const n = parseNumber(left);
      return squareRoot(n);
    }
    case "add":
    case "+":
    case "addition": {
      const a = parseNumber(left);
      const b = parseNumber(right);
      return addition(a, b);
    }
    case "subtract":
    case "-":
    case "subtraction": {
      const a = parseNumber(left);
      const b = parseNumber(right);
      return subtraction(a, b);
    }
    case "multiply":
    case "*":
    case "multiplication": {
      const a = parseNumber(left);
      const b = parseNumber(right);
      return multiplication(a, b);
    }
    case "divide":
    case "/":
    case "division": {
      const a = parseNumber(left);
      const b = parseNumber(right);
      return division(a, b);
    }
    case "modulo":
    case "%": {
      const a = parseNumber(left);
      const b = parseNumber(right);
      return modulo(a, b);
    }
    case "power":
    case "^": {
      const base = parseNumber(left);
      const exponent = parseNumber(right);
      return power(base, exponent);
    }
    default:
      throw new Error(
        "Unsupported operation. Use add(+), subtract(-), multiply(*), divide(/), modulo(%), power(^), or sqrt.",
      );
  }
}

function printUsage() {
  console.log(
    "Usage: node src/calculator.js <operation> <number1> [number2]\nFor sqrt, provide only <number1>.",
  );
  console.log(
    "Operations: add(+), subtract(-), multiply(*), divide(/), modulo(%), power(^), sqrt",
  );
}

if (require.main === module) {
  const [, , operation, left, right] = process.argv;
  const unaryOperations = new Set(["sqrt", "squareRoot", "√"]);
  const needsTwoOperands = !unaryOperations.has(operation);

  if (!operation || left === undefined || (needsTwoOperands && right === undefined)) {
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
  modulo,
  power,
  squareRoot,
  calculate,
};

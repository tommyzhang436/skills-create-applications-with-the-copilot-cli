// Supported operations:
// - addition(a, b): returns a + b
// - subtraction(a, b): returns a - b
// - multiplication(a, b): returns a * b
// - division(a, b): returns a / b (throws if b is zero)
// - modulo(a, b): returns the remainder of a divided by b (throws if b is zero)
// - power(base, exponent): returns base raised to the exponent
// - squareRoot(n): returns the square root of n (throws if n is negative)

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
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed");
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed");
  }
  return Math.sqrt(n);
}

function parseNumber(value) {
  const num = Number(value);
  if (isNaN(num)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return num;
}

function calculate(operation, left, right) {
  const a = parseNumber(left);
  const b = right !== undefined ? parseNumber(right) : undefined;

  switch (operation) {
    case "addition":
    case "+":
      return addition(a, b);
    case "subtraction":
    case "-":
      return subtraction(a, b);
    case "multiplication":
    case "*":
    case "x":
      return multiplication(a, b);
    case "division":
    case "/":
      return division(a, b);
    case "modulo":
    case "%":
      return modulo(a, b);
    case "power":
    case "**":
    case "^":
      return power(a, b);
    case "squareRoot":
    case "sqrt":
      return squareRoot(a);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

function printUsage() {
  console.log(
    "Usage: node calculator.js <operation> <number1> [number2]"
  );
  console.log(
    "Operations: addition, subtraction, multiplication, division, modulo, power, squareRoot"
  );
  console.log("Symbols: +, -, *, /, %, **, sqrt");
  console.log("Examples:");
  console.log("  node calculator.js addition 2 3");
  console.log("  node calculator.js + 10 4");
  console.log("  node calculator.js modulo 10 3");
  console.log("  node calculator.js power 2 8");
  console.log("  node calculator.js squareRoot 16");
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    printUsage();
    process.exit(1);
  }

  const [operation, leftArg, rightArg] = args;

  try {
    const result = calculate(operation, leftArg, rightArg);
    console.log(result);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
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

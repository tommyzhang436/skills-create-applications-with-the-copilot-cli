const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
} = require("../calculator");

describe("calculator basic operations", () => {
  describe("addition", () => {
    test("adds two positive numbers", () => {
      expect(addition(2, 3)).toBe(5);
    });

    test("adds negative and positive numbers", () => {
      expect(addition(-5, 2)).toBe(-3);
    });

    test("adds decimal numbers", () => {
      expect(addition(1.5, 2.5)).toBeCloseTo(4);
    });
  });

  describe("subtraction", () => {
    test("subtracts two positive numbers", () => {
      expect(subtraction(10, 4)).toBe(6);
    });

    test("subtracts resulting in negative number", () => {
      expect(subtraction(3, 8)).toBe(-5);
    });

    test("subtracts decimal numbers", () => {
      expect(subtraction(5.5, 2.2)).toBeCloseTo(3.3);
    });
  });

  describe("multiplication", () => {
    test("multiplies two positive numbers", () => {
      expect(multiplication(45, 2)).toBe(90);
    });

    test("multiplies by zero", () => {
      expect(multiplication(10, 0)).toBe(0);
    });

    test("multiplies negative and positive numbers", () => {
      expect(multiplication(-4, 3)).toBe(-12);
    });
  });

  describe("division", () => {
    test("divides two positive numbers", () => {
      expect(division(20, 5)).toBe(4);
    });

    test("divides negative numbers", () => {
      expect(division(-12, 3)).toBe(-4);
    });

    test("throws on division by zero", () => {
      expect(() => division(8, 0)).toThrow("Division by zero is not allowed.");
    });
  });

  describe("modulo", () => {
    test("matches extended example: 5 % 2", () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test("returns remainder for positive numbers", () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test("returns remainder with negative dividend", () => {
      expect(modulo(-10, 3)).toBe(-1);
    });
  });

  describe("power", () => {
    test("matches extended example: 2 ^ 3", () => {
      expect(power(2, 3)).toBe(8);
    });

    test("raises base to exponent", () => {
      expect(power(2, 8)).toBe(256);
    });

    test("supports fractional exponents", () => {
      expect(power(9, 0.5)).toBeCloseTo(3);
    });
  });

  describe("squareRoot", () => {
    test("matches extended example: √16", () => {
      expect(squareRoot(16)).toBe(4);
    });

    test("returns square root of positive number", () => {
      expect(squareRoot(81)).toBe(9);
    });

    test("returns square root of zero", () => {
      expect(squareRoot(0)).toBe(0);
    });

    test("throws for negative numbers", () => {
      expect(() => squareRoot(-1)).toThrow(
        "Square root of a negative number is not allowed.",
      );
    });
  });
});

describe("calculate", () => {
  test("supports symbol operations", () => {
    expect(calculate("+", 2, 3)).toBe(5);
    expect(calculate("-", 10, 4)).toBe(6);
    expect(calculate("*", 45, 2)).toBe(90);
    expect(calculate("/", 20, 5)).toBe(4);
    expect(calculate("%", 5, 2)).toBe(1);
    expect(calculate("^", 2, 3)).toBe(8);
    expect(calculate("%", 10, 3)).toBe(1);
    expect(calculate("^", 2, 8)).toBe(256);
    expect(calculate("√", 16)).toBe(4);
  });

  test("supports word operations", () => {
    expect(calculate("add", 2, 3)).toBe(5);
    expect(calculate("subtract", 10, 4)).toBe(6);
    expect(calculate("multiply", 45, 2)).toBe(90);
    expect(calculate("divide", 20, 5)).toBe(4);
    expect(calculate("modulo", 10, 3)).toBe(1);
    expect(calculate("power", 2, 8)).toBe(256);
    expect(calculate("sqrt", 81)).toBe(9);
    expect(calculate("squareRoot", 16)).toBe(4);
  });

  test("throws on unsupported operation", () => {
    expect(() => calculate("unknown-op", 3, 2)).toThrow("Unsupported operation");
  });

  test("throws on invalid numeric input", () => {
    expect(() => calculate("+", "abc", 2)).toThrow("Invalid number: abc");
  });

  test("throws on negative square root", () => {
    expect(() => calculate("sqrt", -4)).toThrow(
      "Square root of a negative number is not allowed.",
    );
  });
});

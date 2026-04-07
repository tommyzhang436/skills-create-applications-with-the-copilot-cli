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

describe("addition", () => {
  test("adds two positive numbers", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("adds positive and negative numbers", () => {
    expect(addition(10, -4)).toBe(6);
  });

  test("adds decimals", () => {
    expect(addition(1.5, 2.5)).toBeCloseTo(4.0);
  });

  test("adds zero", () => {
    expect(addition(5, 0)).toBe(5);
  });
});

describe("subtraction", () => {
  test("subtracts two positive numbers", () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test("result can be negative", () => {
    expect(subtraction(3, 7)).toBe(-4);
  });

  test("subtracts decimals", () => {
    expect(subtraction(5.5, 2.5)).toBeCloseTo(3.0);
  });
});

describe("multiplication", () => {
  test("multiplies two positive numbers", () => {
    expect(multiplication(45, 2)).toBe(90);
  });

  test("multiplies by zero", () => {
    expect(multiplication(5, 0)).toBe(0);
  });

  test("multiplies negative numbers", () => {
    expect(multiplication(-3, 4)).toBe(-12);
  });

  test("multiplies decimals", () => {
    expect(multiplication(2.5, 4)).toBeCloseTo(10.0);
  });
});

describe("division", () => {
  test("divides two positive numbers", () => {
    expect(division(20, 5)).toBe(4);
  });

  test("division results in a decimal", () => {
    expect(division(7, 2)).toBeCloseTo(3.5);
  });

  test("throws on division by zero", () => {
    expect(() => division(10, 0)).toThrow("Division by zero is not allowed");
  });
});

describe("modulo", () => {
  test("returns remainder of division", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("modulo of even division is zero", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("modulo with negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("throws on modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed");
  });
});

describe("power", () => {
  test("raises base to an integer exponent", () => {
    expect(power(2, 8)).toBe(256);
  });

  test("any number to the power of zero is one", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("power with fractional exponent", () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });

  test("negative exponent", () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });
});

describe("squareRoot", () => {
  test("square root of a perfect square", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("square root of zero is zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test("throws on square root of a negative number", () => {
    expect(() => squareRoot(-9)).toThrow(
      "Square root of a negative number is not allowed"
    );
  });
});

describe("calculate", () => {
  test("addition using word", () => {
    expect(calculate("addition", "2", "3")).toBe(5);
  });

  test("subtraction using symbol", () => {
    expect(calculate("-", "10", "4")).toBe(6);
  });

  test("multiplication using word", () => {
    expect(calculate("multiplication", "45", "2")).toBe(90);
  });

  test("division using symbol", () => {
    expect(calculate("/", "20", "5")).toBe(4);
  });

  test("modulo using word", () => {
    expect(calculate("modulo", "10", "3")).toBe(1);
  });

  test("modulo using symbol", () => {
    expect(calculate("%", "10", "3")).toBe(1);
  });

  test("power using word", () => {
    expect(calculate("power", "2", "8")).toBe(256);
  });

  test("squareRoot using word", () => {
    expect(calculate("squareRoot", "16")).toBe(4);
  });

  test("squareRoot using symbol", () => {
    expect(calculate("sqrt", "25")).toBe(5);
  });

  test("throws on unsupported operation", () => {
    expect(() => calculate("unsupported", "1", "2")).toThrow(
      "Unsupported operation: unsupported"
    );
  });

  test("throws on invalid number input", () => {
    expect(() => calculate("addition", "abc", "2")).toThrow("Invalid number");
  });

  test("division by zero via calculate", () => {
    expect(() => calculate("division", "10", "0")).toThrow(
      "Division by zero is not allowed"
    );
  });

  test("square root of negative via calculate", () => {
    expect(() => calculate("squareRoot", "-4")).toThrow(
      "Square root of a negative number is not allowed"
    );
  });
});

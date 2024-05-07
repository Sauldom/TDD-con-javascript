import sum from "./sum";
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("Funcion sum", () => {
  it("Funcion suma con valores 0"),
    () => {
      expect(sum(0, 0).toBe(0));
    };
});
describe("Funcion sum con valores negativos", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  describe("Funcion sum con valores negativos", () => {
    test("adds (-2) + (-2) to equal -4", () => {
      expect(sum(-2, -2)).toBe(-4);
    });
  });
});
describe("Funcion sum comprueba valores", () => {
  expect(() => sum("a", "b").toTrow());
});

// cambiar la explicacion "" si cambiamos por ejemplo lo que espera saldra un error

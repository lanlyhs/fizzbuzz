import fizzbuzz from "../src/index";

describe("Test fizzbuzz", () => {

    it("should return Original value", () => {
        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(8)).toBe(8);
    });

    it("should return fizz", () => {
        expect(fizzbuzz(3)).toBe("fizz");
        expect(fizzbuzz(12)).toBe("fizz");
    });

    it("should return buzz", () => {
        expect(fizzbuzz(5)).toBe("buzz");
        expect(fizzbuzz(25)).toBe("buzz");
    });

    it("should return fizzbuzz", () => {
        expect(fizzbuzz(15)).toBe("fizzbuzz");
        expect(fizzbuzz(45)).toBe("fizzbuzz");
    });
});

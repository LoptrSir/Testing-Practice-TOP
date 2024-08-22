//Testing Basics TOP
//Tests

import {
  helloWorld,
  capitalize,
  reverseString,
  calculatorAdd,
  calculatorSubtract,
  calculatorDivide,
  calculatorMultiply,
  caesarCipher,
  analyzeArray,
} from "./script.js";

it("works", () => {
  expect(1).toBe(1);
});

it("Capitalize first letter", () => {
  expect(capitalize("this is a string")).toBe("This is a string");
});

it('reverse this string', () => {
    expect(reverseString('reverse this string')).toBe('gnirts siht esrever')
});

it("2+5=7", () => {
  expect(calculatorAdd(2, 5)).toBe(7);
});

it("-2+5=7", () => {
  expect(calculatorAdd(-2, 5)).toBe(3);
});

it("5-2=3", () => {
  expect(calculatorSubtract(5, 2)).toBe(3);
});

it("5--2=7", () => {
  expect(calculatorSubtract(5, -2)).toBe(7);
});

it("6/2=3", () => {
  expect(calculatorDivide(6, 2)).toBe(3);
});

it("6/-2=-3", () => {
  expect(calculatorDivide(6, -2)).toBe(-3);
});

it("2*5=10", () => {
  expect(calculatorMultiply(2, 5)).toBe(10);
});

it("-2*5=-10", () => {
  expect(calculatorMultiply(-2, 5)).toBe(-10);
});

it('CaesarCipher', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

it('CaesarCipherCapitalize', () => {
    expect(caesarCipher('ABC!', 3)).toBe('DEF!');
});

it('CaesarCipherEndWrap', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

it('CaesarCipherNonLetter', () => {
    expect(caesarCipher('!', 3)).toBe('!');
});

// it('testAnalyzeArray', () => {
//     expect(analyzeArray(array)).toBe(resultExpected);
// });

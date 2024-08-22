//TOP Testing Basics Project
//Code to be tested

export function helloWorld() {
    console.log("Hello World");
    return "Hello World";
}

export function capitalize(target) {
    return target.charAt(0).toUpperCase() + target.slice(1);
}

export function reverseString(target) {
    return target.split("").reverse().join("");
}

export function calculatorAdd(a, b) {
    return a + b;
}

export function calculatorSubtract(a, b) {
    return a - b;
}

export function calculatorDivide(a, b) {
    return a / b;
}

export function calculatorMultiply(a, b) {
    return a * b;
}
//***streamlined function below */
// export function caesarCipher(target, factor) {
//   const targetArray = target.split("");
//   console.log(targetArray);
//   const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
//   let cipher = "";
//   function findLetter(targetArray, factor) {
//     targetArray.forEach((letter) => {
//       let character = letter;
//       if (!alphabetArray.includes(character.toLowerCase())) {
//         cipher += character;
//       } else findNewLetter(character, factor);
//     });
//     console.log("cipher", cipher);
//   }

//   function findNewLetter(character, factor) {
//     const isUpperCase = character === character.toUpperCase();
//     const baseAlphabet = isUpperCase
//       ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
//       : alphabetArray;
//     const currentIndex = baseAlphabet.indexOf(character);
//     const newIndex = (currentIndex + factor) % baseAlphabet.length;
//     const newLetter = baseAlphabet[newIndex];
//     cipher += newLetter;
//   }
//   findLetter(targetArray, factor);
//   return cipher;
// }

export function caesarCipher(target, factor) {
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    let cipher = "";
    console.log(target);
    target.split('').forEach(letter => {
        if (alphabetArray.includes(letter.toLowerCase())) {
            const isUpperCase = letter === letter.toUpperCase();
            const baseAlphabet = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") : alphabetArray;
            const currentIndex = baseAlphabet.indexOf(letter);
            const newIndex = (currentIndex + factor) % baseAlphabet.length;
            cipher += baseAlphabet[newIndex];
        } else cipher += letter;
    });
    console.log("cipher", cipher);
    return cipher;
}

export function analyzeArray(targetArray) {
    //logic returns a object that provides Average, Min, Max, Length
}
caesarCipher("?AbX!", 3);

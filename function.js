//Easy
const power = (a, b) => Math.pow(a, b);
console.log(power(2, 3));

const areaOfHexagon = (a) => ((3 * 1.732) * a * a) / 2;
console.log(areaOfHexagon(10))

const noOfWords = (str) => {
    const b = str.split(' ');
    return b.length;
};
console.log(noOfWords("we are neogrammers"));

const findMin = (a, b, ...args) => Math.min(a, b, ...args);
console.log(findMin(3, 5));
console.log(findMin(3, 5, 9, 1));

const findMax = (a, b, ...args) => Math.max(a, b, ...args);
console.log(findMax(3, 5))
console.log(findMax(3, 5, 9, 1));

const typeOfTriangle = (a, b, c) => {
    let sum = 180;
    if (a !== b && b !== c && c !== a && (a + b + c) === sum) {
        return "Scalene Triangle"
    } else if (a === b && a !== c && (a + b + c) === sum) {
        return "Isoceles Triangle"
    } else if (a === b && b=== c && a===c && (a + b + c) === sum) {
        return "Equilateral Triangle"
    } else if ((a + b + c) !== sum) {
        return "Not a Triangle"
    }
}
console.log(typeOfTriangle(30,60,90))
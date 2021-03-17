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
    } else if (a === b && b === c && a === c && (a + b + c) === sum) {
        return "Equilateral Triangle"
    } else if ((a + b + c) !== sum) {
        return "Not a Triangle"
    }
}
console.log(typeOfTriangle(30, 60, 90))

//Medium

const arrayLength = (arr) => arr.length;
console.log(arrayLength([1, 5, 3, 7, 8]));

const indexOf = (arr, a) => arr.indexOf(a);
console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

const replace = (arr, n1, n2) => arr.map((item) => {
    return item === n1 ? n2 : item;
})
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

const mergeArray = (a, b) => [...a, ...b];
console.log(mergeArray([1, 3, 5], [2, 4, 6]));

const charAt = (str, n) => str.charAt(n);
console.log(charAt("neoGcamp", 4));
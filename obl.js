// Operators, Branching , Loop:

//1. Easy

const add5Num = (a, b, c, d, e) => {
    return a + b + c + d + e
}
console.log(add5Num(5, 13, 7, 21, 48))


const oddOrEven = (num) => {
    return num % 2 === 0 ? "even" : "odd";
};
console.log(oddOrEven(4))


const maxMinNumber = (num1, num2) => {
    if (num1 > num2) {
        return `The maximum number is ${num1}`
    }
    return `The maximum number is ${num2}`
}
console.log(maxMinNumber(129, 251));


const maxNumberOutOfThree = (a, b, c) => {
    return Math.max(a, b, c);
}
console.log(maxNumberOutOfThree(8, 23, 17))


const minNumberOutOfThree = (a, b, c) => {
    return Math.min(a, b, c)
}
console.log(minNumberOutOfThree(35, 29, 46));


const month = (m) => {
    const x = ['january', 'march', 'may', 'july', 'august', 'october', 'december'];
    const y = ['feburary', 'april', 'june', 'september', 'november']
    if (x.includes(m)) {
        return `${m} contains 31 Days`
    } else if (y.includes(m)) {
        return `${m} contains 30 Days`
    }
}
console.log(month("june"))

//2.Intermediate 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const fizzBuzz = (x) =>
    x.map((item) => {
        if (item % 3 === 0 && item % 5 == 0) {
            return "FizzBuzz"
        } else if (item % 3 == 0) {
            return "Fizz"
        } else if (item % 5 == 0) {
            return "Buzz"
        } else {
            return item;
        }
    })

console.log(fizzBuzz(arr));


const mulTable = n => {
    for (let i = 1; i <= 12; i++) {
        console.log(`${n} x ${i} = ${n*i}`)
    }
}
mulTable(8);

//Prime
const isPrime = n => {
    if (n % n == 0 && n % 1 == 0 && n % 2 == 0) {
        return `${n} is prime`
    } else {
        return `${n} is not prime`
    }
}
console.log(isPrime(5));


const fac = (num) => {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac *= i;

    }
    return fac;
}
console.log(fac(5));

const weekDayOrWeekend = (n) => {
    const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const weekend = ['saturday', 'sunday'];
    if (weekday.includes(n)) {
        return `${n} is weekday`
    } else if (weekend.includes(n)) {
        return `${n} is weekend`
    }
}

console.log(weekDayOrWeekend("tuesday"))



// 1
const sumOfTwoNumbers =(a,b)=> a+b;
console.log(sumOfTwoNumbers(20,40))
//2
const simpleInterest =(p,t,r)=> (p*t*r)/100;
console.log(simpleInterest(100,2,6))
//3
const kineticEnergy =(m,v)=>0.5*m*v*v;
console.log(kineticEnergy(2,3));
//4
const temp=(t,cTof,fToC)=>{
   t ? cTof(t):fToC(t)
}
const cTof=(x)=>console.log("celsius to farenheit", 9*x/5+32);
const fToC =(x)=>console.log("farenehit to celcius",(x-32)*5/9)
temp(56,fToC)
temp(56,cTof)
//5
const area =(a)=>{
   return `For Square = area ${a*a},perimeter ${4*a} | For Cube = s.a=${6*a*a} ,volume=${Math.pow(a,3)}`
}
console.log(area(3))
//6
const profitOrLoss =(cp,sp)=>sp>cp ? `${sp-cp} Profit` :`${cp-sp} Loss`;
console.log(profitOrLoss(3125,1125));
//7
const sumOfNDigits =(num)=>{
    let sum =0
    for(let i =1; i<=num;i++){
        sum+=i
    }
    return sum;
}
console.log(sumOfNDigits(100))
//8
const nOddNumbers =(num)=>{
    for(let i=1; i<num*2;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
}
nOddNumbers(5)
//9
const sumOfStringNum =(str)=>str.split("").reduce((a,b)=>Number(a)+Number(b),0)
console.log(sumOfStringNum("1234"))
//10
const revNumber =(num)=>parseInt(num.toString().split("").reverse().join(''));
console.log(revNumber(1234))
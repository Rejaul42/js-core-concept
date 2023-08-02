function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
const value = 8;
const factorialValue = factorial(value);
console.log(value, 'factorial is' ,factorialValue);
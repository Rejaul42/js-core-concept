function sumOfAnArray(numbers){
    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        const number = numbers[i];
        sum = sum + number;
    }
    return sum;
}

const numbers =[13, 18, 49, 90, 56, 83];
const total = sumOfAnArray(numbers);
console.log(total);
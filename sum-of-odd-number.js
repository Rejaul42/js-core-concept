function sumOfOddNumberAnArray(numbers){
    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        const oddNumber = numbers[i];
        if(oddNumber % 2 ===1){
            sum = sum + oddNumber;
        }
    }
    return sum;
}

const numbers =[13, 18, 49, 90, 56, 83];
const total = sumOfOddNumberAnArray(numbers);
console.log(total);
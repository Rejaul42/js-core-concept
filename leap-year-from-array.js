function leapYearFromArray(Years){
    let leapYears =[]
    for(let i = 0; i < Years.length; i++){
        let year = Years[i];
        if(year % 4 === 0){
            leapYears.push(year);
        }
    }
    return leapYears;
}
const inputYears =[2023, 2024, 2025, 2028, 2030];
const outputYears = leapYearFromArray(inputYears);
console.log('Leap years is:', outputYears);
function leapYear(year){
    if(year %4 ===0){
        return 'is Leap year'
    }
    else{
        return 'is not Leap year'
    }
}
const checkLeapYear = 1860;
const finalCheck = leapYear(checkLeapYear);
console.log(checkLeapYear, finalCheck);
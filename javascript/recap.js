function doMath (num1, num2){
    const sum=num1+num1;
    const multiply=num1*sum;
    const diff=num1-multiply;
    const result=num1%diff;
    return result;
}

const result=doMath(5,80);
console.log(result);




function isEven(number){
    if(number%2 ===0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isEven(10));
// console.log(isEven(111));


function isOdd(number){
    if(number%2 ===1){
        return true;
    }
    return false;
}
console.log(isOdd(7));
console.log(isOdd(6))
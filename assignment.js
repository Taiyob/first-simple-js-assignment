// number : 1
function cubeNumber(number) {
    if(typeof number !== 'number'){
        const msg =  console.log('Please insert a positive integer number');
        return msg;
    }else{
        const cube = number * number * number;
        return cube;
    }  
}
const positiveDigit = '2';
const result = cubeNumber(positiveDigit);
console.log(result);

// number : 2
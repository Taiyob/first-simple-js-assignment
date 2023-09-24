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
// const positiveDigit = '2';
// const result = cubeNumber(positiveDigit);
// console.log(result);

// number : 2
const stringTextOne = 'John Doe';
const stringTextTwo = 'ohn';
function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        const msg = 'Please insert string input!!!';
        return msg;
    }else{
        if(string1.includes(string2)){
            return true;
        }else{
            return false;
        } 
    }   
}
const answer = matchFinder(stringTextOne,stringTextTwo);
console.log(answer);


// number : 3
const stringArray = [2,3];
function sortMaker(arr) {
    let bigToSmall = arr[0];
    let newArray = [];
    for(let i=0; i < arr.length; i++){
        const index = i;
        const element = arr[index];
        const maxNum = Math.max(...element);
        newArray.push(maxNum);
    }
    const check = newArray.join(''); 
    const strArr = check.split('');
    return strArr;
}
const output = sortMaker(stringArray);
console.log(output);

// number : 4
const sampleObject = {
    street:10,
    house:'15A',
    society:'Earth Perfect',
}
function findAddress(obj) {
    const objectValue = Object.values(obj);
    return objectValue.toString();
}
const totalOutput = findAddress(sampleObject);
console.log(totalOutput);



// number : 5
const smallAmoutTaka = [1,2,5]
const chipsPrice = 10;
function canPay(changeArray, totalDue) {
    let sumNumber = 0;
    if(changeArray.length === 0){
        const msg = 'Do not provide empty array';
        return msg;
    }else{
        for(let i=0; i<changeArray.length; i++){
            const index = i;
            const element = changeArray[index];
            sumNumber = sumNumber + element;
        }
        if(sumNumber < totalDue){
            return false;
        }else{
            return true;
        }
    }  
}
const totalChipsPrice = canPay(smallAmoutTaka,chipsPrice)
console.log(totalChipsPrice);


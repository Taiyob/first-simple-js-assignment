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
//const stringTextTwo = 'ohn';
function matchFinder(string1, string2) {
    
    //const stringMatching = string2;
    //if(string2.indexOf() !== -1)
}

// number : 3
const stringArray = [2,3];
function sortMaker(arr) {
    let bigToSmall = arr[0];
    let newArray = [];
    for(let i=0; i < arr.length; i++){
        const index = i;
        const element = arr[index];
        console.log(index,element);
        if(element > bigToSmall){
            const nw = newArray.push(element);
            return nw;
        }
    }
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
    for(let i=0; i<changeArray.length; i++){
        const index = i;
        const element = changeArray[index];
        sumNumber = sumNumber + element;
    }
    if(sumNumber > totalDue){
        return false;
    }
    // return sumNumber;
}
const totalChipsPrice = canPay(smallAmoutTaka,chipsPrice)
console.log(totalChipsPrice);


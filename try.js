// const stringArray = [2,3];
// function sortMaker(arr) {
//     let bigToSmall = arr[0];
//     let newArray = [];
//     for(let i=0; i < arr.length; i++){
//         const index = i;
//         const element = arr[index];
//         const maxNum = Math.max(...element);
//         newArray.push(maxNum);
//     }
//     const check = newArray.join(''); 
//     const strArr = check.split('');
//     return strArr;
// }
// const output = sortMaker(stringArray);
// console.log(output);


const smallAmoutTaka = []
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








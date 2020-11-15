let A = [10, 5, 13, 18, 51];
//1 task
function printArray(A) {
    for (let i = 0; i < A.length; i++) {
        console.log(A[i]);
    }
}

printArray(A);
//2 task
let B = new Array(5);

function multiplyArray(A) {
    for (let i = 0; i < A.length; i++) {
        B[i] = 2 * A[i];
        console.log(B[i]);
    }
}

multiplyArray(A);

//3 task
var evens = A.filter(function(x) {
    if (x % 2 === 0 || x === 0) {
        return x;
    }
});

console.log(evens);
//4 task
function checkIfGreaterThan10(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 10) return true;
    }
    return false;
}

let res = checkIfGreaterThan10(A);
console.log(res);
res = checkIfGreaterThan10(B);
console.log(res);

//5 task
var devidedBy3 = A.filter(function(x) {
    if (x % 3 === 0) {
        return x;
    }
});

printArray(devidedBy3);


//6 task
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(A.reduce(reducer));

//7 task
function sliceArray(A) {
    let slicedArray = A.slice(A.length - 2);
    return slicedArray;
}

let newArray = sliceArray(A);
console.log(newArray);


//JavaScript Date

//task 1

let date = new Date();
let dateArray = new Array(2);
dateArray[0] = date;
//task 2
dateArray[1] = new Date(2018, 11, 8, 21, 00, 00);
console.log(dateArray);

//task 3
let infoDates = new Array(4);
infoDates[0] = dateArray[0].getDay();
infoDates[1] = new Date(dateArray[0].getFullYear(), dateArray[0].getMonth() + 1, 0).getDate();
infoDates[2] = dateArray[1].getDay();
infoDates[3] = new Date(dateArray[1].getFullYear(), dateArray[1].getMonth() + 1, 0).getDate();

console.log(infoDates);


//task 4


let arrayDays = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];
let concatenatedArray = new Array(2);
let newDate = new Date();
concatenatedArray[0] = `Дата: ${dateArray[0].getFullYear()}.${dateArray[0].getMonth()}.${dateArray[0].getDate()}, час: ${dateArray[0].getHours()}:${dateArray[0].getMinutes()}:${dateArray[0].getSeconds()}, ${arrayDays[infoDates[0]]}. ${infoDates[1]} дни`;
concatenatedArray[1] = `Дата: ${dateArray[1].getFullYear()}.${dateArray[1].getMonth()}.${dateArray[1].getDate()}, час: ${dateArray[1].getHours()}:${dateArray[1].getMinutes()}:${dateArray[1].getSeconds()}, ${arrayDays[infoDates[2]]}. ${infoDates[3]} дни`;
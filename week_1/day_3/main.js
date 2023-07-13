function printEven(x){  //printEven
    var string = "";
    for (let p1 = 0; p1 <= x; p1++){
        if(p1 == 0){
            continue;
        }
        if(p1%2 == 0){
            string += p1 + ' ';
        }
    }
    return string;
}

function fib(length){ //fibonacci 
    let arr = [0,1];
    for(let x = 0; x < length; x++){
        if (x == 0 || x == 1){
           continue;
        }
        else{
            arr.push(arr[x-1] + arr[x-2]); 
        }
    }
    console.log("Fib sequence up to " + length + ": " + arr)
}

function average(arr){               //average of an array
    var sum = 0;
    for(let x = 0; x < arr.length; x++){
        sum += arr[x];
    }
    return sum/(arr.length);
}

 
function maxValue(arr){                   //Mmax value of an array
    return Math.max(...arr);
}

function minValue(arr){                   //Mmax value of an array
    return Math.min(...arr);
}

function numVowels(string){             //Number of vowels in a string
    var count = 0;
    for(let i of string){
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
            count++;
        }
    }
    return count;
}

function addition(num1, num2){  //adding two numbers
    return num1 + num2;
}

function multiply(num1, num2){   //multiplying two numbers
    return num1 * num2;
}

function postalCode(city){   //postal code
    switch(city){
        case "Baltimore":
            return 21201;
        case "NYC":
            return 37482;
        case "Anaheim":
            return 39482;
        case "Nashville":
            return 48468;
        case "Saratoga Springs":
            return 12866;
        default:
            return "No city found";
    }
}

function sortStrings(arr){   //sort strings
    return arr.sort();

}
function sortNums(arr){           //sort numbers
    return arr.sort();
}

function reverseNum(num){                //reverse number;
   return Number(String(num).split('').reverse().join(''))
}


function capitalize(string){   //capitalize
    return string.toUpperCase();
}

function countLetters(string, letter){   //count letters
    string = string.toLowerCase();
    return string.split(letter).length - 1;
}

function filterStrings(arr, string){
    let filteredArr = [];
    for(let str of arr){
        if(str == string){
            filteredArr.push(str)     
        }
    }
    return filteredArr;
}

function filterNums(arr, num){
    let filteredArr = [];
    for(let x of arr){
        if(x == num){
            filteredArr.push(x)
            
        }
    }
    return filteredArr;
}

function filterObjects(arr, id){
    let filteredArr = [];
    for(let x = 0; x < arr.length; x++){
        if(arr[x].id == id){
            filteredArr.push(arr[x]);
        }
    }
    return filteredArr;
}

function findID(arr, id){
    for(let x = 0; x < arr.length; x++){
        if(arr[x].id == id){
            return id;
        }
    }
    return "Cannot find ID";
}

function todayDate(){
    const date = new Date();
    var month = date.getMonth() + 1;
    return "Today is " + month + "/" + date.getDate() + "/" + date.getFullYear();
}

function filterObjects2(arr){
    let filteredArr = [];
    for(let x = 0; x < arr.length; x++){
        if(arr[x].id > 10){
            filteredArr.push(arr[x]);
        }
    }
    return filteredArr;
}


console.log(printEven(50));
fib(10);
console.log(average([5,5,7,7]));
console.log(maxValue([1,2,3,4,5]));
console.log(minValue([1,2,3,4,5]));
console.log(numVowels("people"));
console.log(addition(1,5));
console.log(multiply(3,5));
console.log(postalCode("Nashville"));
console.log(sortStrings(["Carrot","Banana", "Apple"]));
console.log(sortNums([5,4,2,7,1]));
console.log(reverseNum(12345));

console.log(capitalize("hello"));
console.log(countLetters("People", 'p'));

console.log(filterStrings(["Donut", "Donut", "Cheese", "Happy"], "Donut"));
console.log(filterNums([3,3,5,1,3,5], 3));

const people = [{ name: "Dad", id: 84 }, { name: "Joey", id: 84 }, { name: "Bill", id: 87 },{ name: "Garry", id: 84 }];
console.log(filterObjects(people, 84));

const workers = [{ name: "Dad", id: 8478635862 }, { name: "Joey", id: 84298635 }, { name: "Bill", id: 873526 },{ name: "Garry", id: 845262 }];
console.log(filterObjects(workers, 84298635));


console.log(todayDate());

const people2 = [{ name: "Dad", id: 25 }, { name: "Mom", id: 34 }, { name: "Bill", id: 9 },{ name: "Garry", id: 8 }];
console.log(filterObjects2(people2));
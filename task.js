// 1.grade making

let mark = 45;
if(mark>=80 && mark<=100){
    console.log("A+");
}
else if(mark>=70 && mark<=79){
    console.log("A");
}
else if(mark>=60 && mark<=69){
    console.log("A-");
}
else if(mark>=40 && mark<=59){
    console.log("B");
}
else if(mark>=0 && mark<=39){
    console.log("C");
}
else{
    console.log("F")
}

// 2. odd and even
let number = 5;
if(number%2==0){
    console.log("Even");
}
else if(number%2!=0){
    console.log("Odd");
}

//3. 
let arr = [2,3,5,6,8,9,15,16,20,18,19,17,14,13,12,10,11,7,1,4];
let sort_arr = arr.sort((a,b)=>a-b);
console.log(sort_arr);


//4.leap year
let year = 2024;
if (year%4==0 && year%100!=0 || year%400==0){
    console.log("Leap year");
}
else{
    console.log("Not Leap Year")
}

//5.

for(let i=1;  i<=50;i++){
    if(i%3==0 || i%5==0){
        console.log(i)
    }
}

//6
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var max_name = friends[0]; 
for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > max_name.length) { 
        max_name = friends[i]; 
    }
}
console.log(max_name);

//7.
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var uniqueNumbers = []; 
for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) 
        { 
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);

//8

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var maxNumbers = Math.max(...numbers);
console.log(maxNumbers);

// final question
function monthlySavings(obj) {
    let { arr, number } = obj; 
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            sum += arr[i] - arr[i] * (1 / 5); 
        } else {
            sum += arr[i]; 
        }
    }
    
    return sum - number; 
}

let obj = {
    arr: [1000, 2000, 3000],
    number: 5400 
};

let result = monthlySavings(obj); 

if (result >= 0) {
    console.log("Total Savings:", result);
} else {
    console.log("Earn more");
}


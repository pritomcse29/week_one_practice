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
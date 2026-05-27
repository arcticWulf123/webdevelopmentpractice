function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

function square(number) {
    return number * number
}

function twoSum(target) { //target is 17
    let nums = [7, 9, 12, 8]
    for (let i = 0; i < nums.length; i++) {
        for (let j = (i+1); j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log("solved")
                break
            } else {
                console.log("no");
            }
        }
    }
}

console.log(factorial(5)); 
console.log(square(5));
console.log(twoSum(17));
/**
 *  Odd Occurrence Finder
 * 
 * Problem:
 *  Given an array of integers where every element occurs in pairs except one,
 *  find the element that does not have a pair.
 * 
 * Example:
 *  Input:  [2, 3, 5, 3, 2, 5, 8]
 *  Output: 8
 * 
 * Approach Summary:
 *  I went through three stages while solving this problem:
 *    1️⃣ First Attempt — Using a for loop and splice()
 *    2️⃣ Second Attempt — Using a while loop for better control
 *    3️⃣ Final Efficient Solution — Using sorted array with step-by-two comparison
 * 
 * Notes:
 *  The first two worked but weren’t efficient or stable because splice() modifies
 *  the array while iterating, which shifts indexes and can cause skipped elements.
 *  The final method is simple, readable, and avoids modifying the array mid-loop.
 */

// ===============================
// 🧪 First Attempt (using for loop)
// ===============================

// array [2,3,5,3,2,5,8]
// for this we need to get the one element of the array that is not paired

// Algorithm:
// 1️⃣ Sort the array
// 2️⃣ Iterate and remove pairs using splice()
// 3️⃣ Return the remaining unpaired element

// ⚠️ Issue: The splice() inside the for loop causes index shifting
// which results in skipping elements unexpectedly.

/*
let numbers = [2,3,5,3,2,5,8];
console.log(numbers)
let sorted = numbers.sort((a,b) => a-b)
console.log(sorted)
for (i=0; i<numbers.length;i++){
    if(numbers[i] === numbers[i+1]){
        numbers.splice(i,2);
        console.log(numbers)
    }
    else {
        console.log(numbers[i] + " is the odd one")
    }
}
*/


// ===================================
// 🧪 Second Attempt (using while loop)
// ===================================

// Algorithm:
// 1️⃣ Sort the array
// 2️⃣ Use a while loop to get better control over index increment
// 3️⃣ Compare and remove pairs using splice()
// 4️⃣ If numbers are not equal, print the odd one

// ⚠️ Issue: Still uses splice() which modifies the array.
// Works, but inefficient for large data.

/*
let numbers = [2,3,5,3,2,5,8];
console.log(numbers)
let sorted = numbers.sort((a,b) => a-b)
console.log(sorted)
let i = 0
while (i < numbers.length) {
    if (numbers[i] === numbers[i+1]) {
        numbers.splice(i, 2);
    } else {
        console.log(numbers[i] + ' is the odd one out')
        break;
    }
}
*/


// ========================================
// ✅ Final Efficient Attempt (Best Version)
// ========================================

// Algorithm:
// 1️⃣ Sort the array so that pairs are adjacent.
// 2️⃣ Loop through in steps of two (i += 2).
// 3️⃣ If two adjacent numbers are not equal, the first one is unpaired.
// 4️⃣ Print and break the loop.

// This avoids using splice() and is clean and efficient.

let myArray = [2, 3, 5, 3, 2, 5, 8];
myArray.sort((a, b) => a - b);

for (let i = 0; i < myArray.length; i += 2) {
    if (myArray[i] !== myArray[i + 1]) {
        console.log(myArray[i] + ' is the odd one out');
        break;
    }
}

/**
 *  Example Run:
 *  Input:  [2, 3, 5, 3, 2, 5, 8]
 *  Sorted: [2, 2, 3, 3, 5, 5, 8]
 *  Output: 8 is the odd one out
 * 
 *  Time Complexity: O(n log n) (because of sorting)
 *  Space Complexity: O(1)
 */

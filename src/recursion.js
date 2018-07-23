// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if(n < 0){
        return null;
    }

    if(n <= 1){
        return 1;
    }

    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    let shrinkingArray = [].concat(array);
    let popValue;

    if(!shrinkingArray.length){
        return 0;
    }

    if(shrinkingArray.length === 1){
        return shrinkingArray.pop();
    }

    popValue = shrinkingArray.pop();

    return popValue + sum(shrinkingArray);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    if(typeof array === 'number'){
        return array;
    }
    return array.filter((iAmArray)=>{
        return Array.isArray(iAmArray) || Number.isFinite(iAmArray);
    }).reduce((sum, iAmNumber)=>{
        return sum + arraySum(iAmNumber);
    },0);
};

// 4. Check if a number is even.
var isEven = function(n) {

    //preform an abs
    if(n < 0){
        n = 0 - n;
    }

    if(n === 0){
        return true;
    }
    if(n === 1){
        return false;
    }

    return isEven(n - 2);

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if(n === 0){
        return 0;
    }
    if(n < 0){
        let result = 0 - sumBelow(0 - n);
        if(result === -0){
            return 0;
        }else{
            return result;
        }
    }
    if(n === 2){
        return n - 1;
    }
    return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, result = []) {
    if(x === y || x - y === 1 || y - x === 1){
        return result;
      }
      if(y > x){
        result.push(x + 1);
        return range(x + 1, y, result);
      }
      result.push(x - 1);
      return range(x - 1, y, result);
    
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp === 0){
        return 1;
    }

    if(exp === 1){
        return base;
    }

    if(exp === -1){
        return 1/base;
    }
    if(exp > 0){
        if(base > 0){
            return base * exponent(base, exp - 1)
        }else{
            return -exponent(-base, exp);
        }
    }else{
        return 1/exponent(base, -exp);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if(n === 1){
        return true;
    }
    if(n < 1){
        return false;
    }

    return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
     //turn string into an array so we can manipulate it unless it is already an array
     if(!Array.isArray(string)){
        string = string.slice();
        string = string.split("");
      }
      // if we are at the last element of the array return it to escape the recursion
      if(string.length === 1){
        return string[0];
      }
      //pops off the array and turns it into a string while concating the returns of the other recursions until the escape
      return (string.pop()).toString() + reverse(string)
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    let popValue;
    let shiftValue;
    //turn string into an array so we can manipulate it unless it is already an array
    if(!Array.isArray(string)){
        string = string.slice();
        string = string.replace(/\W/g, "").toLowerCase();
        string = string.split("");
    }
    if(string.length < 2){
        return true;
    }
    popValue = string.pop();
    shiftValue = string.shift();
    if(popValue !== shiftValue){
        return false;
    }else{
        return palindrome(string);
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

    let numerator = x;
    let denominator = y;
    if(numerator === 0 && denominator === 0){
        return NaN;
    }
    if(numerator > 0 && denominator === 0){
        return Infinity;
    }
    if(numerator < 0 && denominator === 0){
        return -Infinity;
    }
    
    if(numerator === 0 && denominator !== 0){
        return 0;
    }
    if(numerator < 0 && denominator < 0){
        return -modulo(-numerator, -denominator);
    }
    if(numerator < 0){
        return -modulo(-numerator, denominator);
    }
    if(denominator < 0){
        return -modulo(numerator, -denominator);
    }
    if(numerator < denominator){
        return numerator;
    }

    return modulo(numerator - denominator, denominator);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if(y === 1){
        return x;
    }
    if(y < 0){
      return 0 - multiply(x, 0-y)
    }
    return x + multiply(x, y-1)
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    let numerator = x;
    let denominator = y;
    if(numerator === 0 && denominator === 0){
        return NaN;
    }
    if(numerator > 0 && denominator === 0){
        return Infinity;
    }
    if(numerator < 0 && denominator === 0){
        return -Infinity;
    }
    
    if(numerator === 0 && denominator !== 0){
        return 0;
    }
    if(numerator < 0){
        return -divide(-numerator, denominator);
    }
    if(denominator < 0){
        return -divide(numerator, -denominator);
    }
    if(numerator < denominator){
        return 0;
    }

    return divide(numerator - denominator, denominator) + 1;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y, hasRun = false) {
    
    if(x <= 0 || y < 0 || (y === 0 && hasRun === false)){
        return null;
    }
    if(y === 0){
        return x;
    }
    return gcd(y, x%y, true);
    
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if(!Array.isArray(str1)){
        str1 = str1.slice();
        str1 = str1.split('');
        str2 = str2.slice();
        str2 = str2.split('');
    }
    // if(str1.length !== str2.length){
    //     return false;
    // }
    if(!str1.length && !str2.length){
        return true;
    }
    let shift1 = str1.shift();
    let shift2 = str2.shift();
    if(shift1 !== shift2){
        return false;
    }

    return compareStr(str1, str2);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    let result = Array.prototype.slice.call(arguments)[1] || [];
    if(!Array.isArray(str)){
        var shifty = str.split('');
    }else{
        shifty = str;
    }
    if(!shifty.length){
        return result;
    }
    result.push(shifty.shift());
    return createArray(shifty, result);
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    let shifty = [].concat(array);
    let reversed = Array.prototype.slice.call(arguments)[1] || [];

    if(!shifty.length){
        return reversed;
    }
    reversed.unshift(shifty.shift());
    return reverseArr(shifty, reversed);

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    let result = Array.prototype.slice.call(arguments)[2] || [];
    if(length === 0){
        return result;
    }
    result.push(value);
    return buildList(value, length - 1, result);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    array = [].concat(array);
    
    if(array.length === 1){
        if(Number.isNaN(value) && Number.isNaN(array.shift())){
            return 1;
        }
        if(array.shift() === value){
            return 1;
        }else{
            return 0;
        }
    }
    if(Number.isNaN(value)){
        if(Number.isNaN(array.shift())){
            return countOccurrence(array, value) + 1;
        }
        return countOccurrence(array, value) + 0;
    }

    if(array.shift() === value){
        return countOccurrence(array, value) + 1;
    }
    return countOccurrence(array, value) + 0;
    
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    let result = Array.prototype.slice.call(arguments)[2] || [];

    if(!array.length){
        return result;
    }

    let first = callback(array[0]);
    let next = array.slice(1);
    result.push(first);
    return rMap(next, callback, result);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
    let keyList = Object.keys(obj);
    let index = Array.prototype.slice.call(arguments)[2] || 0;
    let count = Array.prototype.slice.call(arguments)[3] || 0;

    if(typeof obj[keyList[index]] === 'object' && obj !== null){
        count += countKeysInObj(obj[keyList[index]], key);
    }

    if(index === keyList.length){
        return count;
    }
    if(keyList[index] === key){
        return countKeysInObj(obj, key, index + 1, count + 1);
    }
    return countKeysInObj(obj, key, index + 1, count);
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    let keyList = Object.keys(obj);
    let index = Array.prototype.slice.call(arguments)[2] || 0;
    let count = Array.prototype.slice.call(arguments)[3] || 0;
    
    if(typeof obj[keyList[index]] === 'object' && obj !== null){
        count += countValuesInObj(obj[keyList[index]], value);
    }

    if(index === keyList.length){
        return count;
    }

    if(obj[keyList[index]] === value){
        return countValuesInObj(obj, value, index + 1, count + 1);
    }
    return countValuesInObj(obj, value, index + 1, count);
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    

     let index = Array.prototype.slice.call(arguments)[3] || 0;
     let keyList = Object.keys(obj);
     
     if(index === keyList.length){
         return obj;
     }
     if(typeof obj[keyList[index]] === 'object' && obj[keyList[index]] !== null){
         
         replaceKeysInObj(obj[keyList[index]], key, newKey);
     }
     if(keyList[index] === key){
         
         obj[newKey] = obj[key];
        
         delete obj[key];
      
        return replaceKeysInObj(obj, key, newKey)
     }

     return replaceKeysInObj(obj, key, newKey, index + 1)
     
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    
    let fib = Array.prototype.slice.call(arguments)[1] || [];
    let count = Array.prototype.slice.call(arguments)[2] || 0;
    if(!fib.length){
        fib.push(0);
    }

    if(n <= 0){
        return null;
    }
    if(n === fib.length - 1){
        return fib;
    }
    if(fib.length === 1){
        fib.push(1);
        return fibonacci(n, fib, count + 1);
    }
    fib.push(fib[count] + fib[count - 1]);

    return fibonacci(n, fib, count + 1);

    


    
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    let fib = Array.prototype.slice.call(arguments)[1] || [];
    let count = Array.prototype.slice.call(arguments)[2] || 0;
    if(!fib.length){
        fib.push(0);
    }

    if(n < 0){
        return null;
    }
    
    if(n === fib.length - 1){
        return fib[n];
    }
    if(fib.length === 1){
        fib.push(1);
        return nthFibo(n, fib, count + 1);
    }
    fib.push(fib[count] + fib[count - 1]);

    return nthFibo(n, fib, count + 1);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, index = 0) {
    if(!Array.isArray(input)){
        input = input.split(' ');
    }

    let words = input;
    if(words.length === index){
        return words;
    }

    words[index] = words[index].toUpperCase();

    return capitalizeWords(words, index + 1);

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, index = 0) {
    if(!Array.isArray(array)){
        array = array.split(' ');
    }
    let words = array;
    if(words.length === index){
        return words;
    }
    words[index] = words[index].substring(0, 1).toUpperCase() + words[index].substring(1);

    return capitalizeFirst(words, index + 1);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj, index = 0, sum = 0) {
    let keyList = Object.keys(obj);
    
    if(index === keyList.length){
        return sum;
    }
    if(obj[keyList[index]] % 2 === 0){
        sum += obj[keyList[index]];
        return nestedEvenSum(obj, index + 1, sum);
    }
    if(typeof obj[keyList[index]] === 'object' && obj[keyList[index]] !== null){
        sum = sum + nestedEvenSum(obj[keyList[index]]);
    }

    return nestedEvenSum(obj, index + 1, sum);

};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    if(typeof arrays === 'number'){
        return arrays;
    }
    return arrays.filter((iAmArray)=>{
        return Array.isArray(iAmArray) || Number.isFinite(iAmArray);
    }).reduce((flat, iAmNumber)=>{
        return flat.concat(flatten(iAmNumber));
    },[]);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
    let index = Array.prototype.slice.call(arguments)[2] || 0;

    if(index === str.length){
        return obj;
    }
    
    if(obj[str[index]] === undefined){
        obj[str[index]] = 1;
        return letterTally(str, obj, index + 1);
    }

    obj[str[index]] = obj[str[index]] + 1;

    return letterTally(str, obj, index + 1);

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    let compressed = Array.prototype.slice.call(arguments)[1] || [];
    let index = Array.prototype.slice.call(arguments)[2] || 0;

    if(index === list.length){
        return compressed;
    }
    if(list[index] !== list[index - 1]){
        compressed.push(list[index]);
        return compress(list, compressed, index + 1);
    }
    return compress(list, compressed, index + 1);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    let freeArray = [].concat(array);
    let index = Array.prototype.slice.call(arguments)[2] || 0;


    if(index === freeArray.length){
        
        return freeArray;
    }
    if(Array.isArray(freeArray[index])){
        freeArray[index].push(aug);
    }

    return augmentElements(freeArray, aug, index + 1);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    
    let index = Array.prototype.slice.call(arguments)[1] || 0;
    let results = Array.prototype.slice.call(arguments)[2] || [];
    if(index === array.length){
        return results;
    }

    if(array[index] === 0 && array[index - 1] !== 0){
        results.push(array[index]);
        return minimizeZeroes(array, index + 1, results);
    }
    if(array[index] !== 0){
        results.push(array[index]);
        return minimizeZeroes(array, index + 1, results);
    }
    return minimizeZeroes(array, index + 1, results);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    array = [].concat(array);
    let index = Array.prototype.slice.call(arguments)[1] || 0;

    if(index === array.length){
        
        return array;
    }

    if(index % 2 === 0){
        if(array[index] < 0){
            array[index] *= -1;
        }
    }else{
        if(array[index] > 0){
            array[index] *= -1;
        }
    }
    return alternateSign(array, index + 1);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    let index = Array.prototype.slice.call(arguments)[1] || 0;
    let numToStr = {
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : 'eight',
        '9' : 'nine',
        '0' : 'zero'
    }

    if(typeof str === 'string') str = str.split(' ');

    if(index === str.length){
        return str.join(' ');
    }

    if(numToStr[str[index]]){
        str[index] = numToStr[str[index]];
        return numToText(str, index + 1);
    }

    return numToText(str, index + 1);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max, count = 0) {
    //sets the start index
    let start = min || 0;
    //sets the end index
    let end = max || array.length -1;
    //sets the middle index
    let middle = Math.floor((start + end)/2);
    //if target is not a number
    if(/\D/.test(target)){
        return null;
    }
    
    //if the target is greater than the last element or smaller than the first element
    //of we have looped a number of times to be greater than half of all the elements in the array
    if(target > array[end] || target < array[start] || count > array.length/2){
        return null;
    }
    //if the target equals the elemnt at start
    if(target === array[start]){
        //return the start value
        return start;
    }
    //if the target equals the element at the end
    if(target === array[end]){
        //return the end index
        return end;
    }
    if(target === array[middle]){
        return middle;
    }
    if(target > array[middle]){
        return binarySearch(array, target, middle, end, count + 1);
    }
    if(target < array[middle]){
        return binarySearch(array, target, start, middle, count + 1);
    }
    return binarySearch(array, target, start, end, count + 1);
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array, newArray = [].concat(array)) {
    
        if(newArray.length <= 1) return newArray;
        //divide and conquer
        let lowHalf = newArray.splice(0, Math.floor(newArray.length/2));
        //seperate into n
        mergeSort(array, lowHalf);
        mergeSort(array, newArray);
        //starting index for the outer
        let start = 0;

        outer: while(lowHalf.length){
            for(let i = start; i < newArray.length; i++){
                if(lowHalf[0] <= newArray[i]){
                    newArray.splice(i, 0, lowHalf.shift());
                    start = i + 1;
                    continue outer;
                }
            }
            newArray.push(lowHalf.shift());
            start = newArray.length;
        }

        if(newArray.length === array.length){
            return newArray;
        }

};

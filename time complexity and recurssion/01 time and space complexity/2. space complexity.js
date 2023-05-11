// -> what is the extra space used to solve the problem proportional to the input size.
// for example

let arr = [1, 2, 3, 4, 5];

// reverse an array using extra new array

let arr2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
}

console.log(arr2);

/*The space complexity of the code is also O(n), because it creates a new array arr2 
of the same length as the input array arr. Therefore, the space required by the
 algorithm is proportional to the size of the input.*/

// space Complexity is O(n)
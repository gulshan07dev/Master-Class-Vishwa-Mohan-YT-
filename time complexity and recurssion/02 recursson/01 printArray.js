// print array using recurssion

function printArray(arr, sIdx) {
    // base case / termination condition
    if (sIdx >= arr.length) {
        // stop
        return;
    }

    // logic
    console.log(arr[sIdx]);

    // recursive case
    printArray(arr, ++sIdx);
}

let arr = [1, 2, 3, 4];
printArray(arr, 0);


/*The time complexity of this function is O(n), where n is the length of the 
input array. This is because the function calls itself once for each element in the array.

The space complexity of this function is O(n) as well, because each recursive
call adds a new stack frame to the call stack, and there can be at most n stack 
frames in the worst case (when the base case is not reached until the last element 
of the array is processed).*/

// 2:07:52
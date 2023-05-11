// minimum jump problem

function minJump(arr, start, end) {
    // base case
    if(start == end) {
        return 0;
    }

    if(arr[start] == 0) {
        return Math.max
    }

    // Now I can jump, so I will all my jumping options
    let minJumps = Math.max();
    for(let i = start+1; i <= start+arr[start] && i <= end; i++) { // Evaluation all jumping option
        let jumps = minJump(arr, i, end);

        if(jumps != Math.max() && jumps+1 < minJumps) {
            minJumps = jumps + 1;
        }
    }
    return minJumps;
} 
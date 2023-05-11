// calculate factorial using recurssion

function fact(n) {
    // base case
    if(n <= 1) {
        return n;
    }

    // recursive case
    return n*fact(n-1);
}

console.log(fact(5));
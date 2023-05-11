function moves(n, s, d, a) {
    // base case
    if(n == 1 || n == 0) {
        return n;
    }
    
    let steps1 = moves(n-1, s, d, a);

    let steps2 = 1;

    let steps3 = moves(n-1, a, d, s);

    return steps1+steps2+steps3;
}

console.log(moves(5, 's', 'd', 'a'));0
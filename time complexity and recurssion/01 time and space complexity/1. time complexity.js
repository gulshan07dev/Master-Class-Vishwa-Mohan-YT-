// Time Complexity - how your no. of operation are proportional to the input size
// for example.

function sayHello(n) {
    console.log("Hello Gulshan");
}
// sayHello(500) // no. of operation is independent of input size
// Time Complexity -> O(1)



function sayHelloN(n) {
    for(let i = 0; i < n; i++) {
        console.log("Hello Gulshan");
    }
}
// sayHelloN(5) // no. of operation is proportional to the input size
// Time Complexity -> O(n)


function printHello(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(("hello"));
            break;
        }
    }
}
// printHello(5)
// Time Complexity -> O(1)


function printHello2(n) {
    for(let i = 1; i < n; i *= 2) {
        console.log("Hello world");
    }
}
// printHello2(5);
// Time Complexity ->
// let us suppose k dafa
// 1. i = 1 = 2^1-1
// 2. i = 2 = 2^2-1
// 3. i = 4 = 2^3-1
// k. i = 2^k-1
// i ≈ n
// 2^k = n
// k = log n
// -> O(log n)


function printHello3(n) {
    for(let i = 0; i < n; i++) { // n iteration
        for(let j = 1; j < n; j *= 2) { // log n iteration
            console.log("Hello World");
        }
    }
}
// printHello3(5);
// Time Complexity -> O(n (log n) ) 



function printHello4(n) {
    let i = 1, s = 1;
    while(s <= n) {
        i++;
        s += i;
        console.log("Hello sir");
    }
}
// printHello4(5);
// Time Complexity ->
// 1. s = 1
// 2. s = 1+2
// 3. s = 1+2+3
// k. s = 1+2+3....+k = k(k+1)/2
// s ≈ n
// k(k+1)/2 α n
// k^2 α n
// k = root n
// -> O(root n)

// 1:24:00 
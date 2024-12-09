"use strict";
let a = "123";
let nambo = "Arpit";
let num = 0;
let age = 18;
let phone = 579;
let email = "omagrahari55@gmail.com";
let legal = false;
console.log(a);
console.log(nambo);
console.log(num);
console.log(age);
console.log(phone);
console.log(email);
console.log(legal);
console.log(!legal);
// union typeScript
let value = 123;
console.log(value);
value = "Kya baat hai";
console.log(value);
// applying typeScript on the fuction
const multi = (n, m) => {
    return String(n * m);
};
console.log(multi(5, 6));
console.log(typeof (multi(5, 6)));
const funfun = (n, m) => {
    return String(n * m);
};
console.log(funfun(5, 8));
const concatenate = (n, m) => {
    return (n + m);
};
console.log(concatenate(5, "6"));
// Array in typeScript
let arr1 = [5, 7, 8, 9, 7, 3]; // method 1
let arr2 = [8, 7, 59, 2, 3, 4, 9]; // method 2
console.log(arr1);
console.log(arr2);
let arr3 = [8, 7, 9, 8, 1, 3, 5, "Arpit", "Abhi", "Rohit"];
console.log(arr3);
arr3[5] = "shivam";
console.log(arr3);
let obj1 = {
    name: "Arpit",
    age: 19,
    gender: true
};
console.log(obj1);
const obj2 = {
    name: "Rohit",
    age: 20
};
console.log(obj2);
const obj3 = {
    name: "Abhi",
    age: 22,
    fun: (n, m) => {
        return (n * m);
    }
};
console.log(obj3);
let x1 = 10;
let x2 = 50;
console.log(`value of ${x1} X ${x2} = ${obj3.fun?.(x1, x2)}`);
const parr1 = (farr1) => {
    console.log(farr1);
};
parr1([5, 7, 8, 9, 7]);
// if vaue is not send 
const nm1 = (n, m, l) => {
    if (l == undefined) {
        return n * m;
    }
    return n * m * l;
};
console.log(nm1(5, 10));
console.log(nm1(5, 10, 2));
// how to take the default value
const nm2 = (n, m, l = 20) => {
    return n * m * l;
};
console.log(nm2(5, 10));
console.log(nm2(5, 10, 2));
const funarr1 = (...m) => {
    console.log(typeof (m));
    return m;
};
console.log(funarr1(5, 10, 7, 69));
const ppobjfun1 = (obj) => {
    console.log(obj);
};
ppobjfun1({
    Customername: "Arpit",
    Productprice: 5000,
    image: "product.jpg",
    paid: false
});
ppobjfun1({
    Customername: "Rohit",
    Productprice: 9000,
    image: "product2.jpg",
    paid: true,
    discount: false
});

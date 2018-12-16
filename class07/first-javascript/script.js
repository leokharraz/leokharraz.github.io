let mult = 10 + 10;
let sum = 50 + 17;
let div = 100 / 10;
let sub = 50 - 17;
let first = "Leo";
let last = "Kharraz";
console.log(mult);
console.log(div);
console.log(sub);
console.log(sum);
console.log(first + last);

//alternate new way

console.log(`Hello my name is ${first} ${last}`);

//reassign first to some other name (super hero)
//log out your first and last name again

first = "Black Panther";
console.log(`Hello my name is ${first} ${last}`);

//use document.querySelector() to get the h1 on the page

let hello = document.querySelector("h1");
console.log(hello);
hello.style.color = 'blue';
hello.innerHTML = 'Hallo World :D'
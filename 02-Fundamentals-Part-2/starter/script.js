'use strict';
/*
// activate strict mode
// Bắt lỗi khai báo biến không rõ ràng,Không cho phép gán giá trị cho các từ khóa bị cấm
// Không cho phép xóa các biến hoặc hàm,Ngăn chặn dùng this mặc định là window trong hàm
// Không cho phép trùng tên tham số

'use strict';

let hungscandrivecar = false;
const passexam = true;
if (passexam) hungscandrivecar = true;
if (hungscandrivecar) console.log('I can drive a car');

const if = 1;
const private = 'hung';




// function declaration
function logger() {
    console.log('My name is hung!');
}
logger(); // calling / invoking / running the function
logger();
logger();

function fruitprocessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const hung = fruitprocessor(5, 0);
console.log(hung);


//Hoisting (kéo lên) là hành vi mặc định của JavaScript, trong đó các khai báo (biến và hàm) được "kéo lên đầu" của phạm vi hiện tại (scope) trước khi code được thực thi.

// function declaration
// được hoisting toàn phần, gọi trước khi khai báo vẫn chạy.
function hung(age) {
    return age + 18;
}
console.log(hung(1));
// function expression
// chỉ hoisting phần biến, không hoisting thân hàm. Nếu gọi trước khi gán hàm → lỗi.
const hung2 = function (age) {
    return age + 18;
}
console.log(hung2(1));

// arrow function
const hung = age => age + 18;
console.log(hung(19));

const hung2 = (age, name) => {
    return `${name} is ${age} years old`;
}
console.log(hung2(19, ' hung'));

// functions calling other functions
function cutfruit(fruit) {
    return fruit * 4;
}
function fruitprocessor(apples, oranges) {
    const applescut = cutfruit(apples);
    const orangescut = cutfruit(oranges);
    const juice = `juice with ${applescut} apples and ${orangescut} oranges.`;
    return juice;
}

console.log(fruitprocessor(2, 3));




// introduction arrays
const friend1 = 'hung';
const friend2 = 'hung2';
const friend3 = 'hung3';

const friends = [friend1, friend2, friend3];
console.log(friends);
console.log(friends[0]);
console.log(friends[friends.length - 1]);
console.log(friends.length);
const year = [2022, 2002, 1200, 2023];

const tuoi = function (birth) {
    return 2025 - birth;
}
const hung = [tuoi(year[0]), tuoi(year[1]), tuoi(year[3]), tuoi(year[year.length - 1])];

console.log(hung);
console.log(hung.length);


// Basic array operations (methods)
const friends = ['hung', 'hung2', 'hung3'];
// add
const ngu = friends.push('hung4');
console.log(friends);
console.log(ngu);

const khon = friends.unshift('hung0');
console.log(friends);
console.log(khon);

// remove
const ngu1 = friends.pop();
console.log(friends);
console.log(ngu1);

const ngu2 = friends.shift();
console.log(friends);
console.log(ngu2);

friends.push(23);
console.log(friends.indexOf('hung'));

console.log(friends.includes(23));
console.log(friends.includes('23'));




// exercise 1:
const score = (d1, d2, d3) => (d1 + d2 + d3) / 3;
console.log(score(10, 20, 30));

const dolphins = score(44, 23, 71);
const koalas = score(65, 54, 49);
console.log(dolphins, koalas);
const checkwins = function (dolphins, koalas) {
    if (dolphins >= 2 * koalas) {
        console.log('Dolphins win the trophy!');

    }
    else if (koalas >= 2 * dolphins) {
        console.log('Koalas win the trophy!');
    }
    else {
        console.log('No team wins the trophy!');

    }
}
console.log(checkwins(dolphins, koalas));




// exercise 2:
const hung = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
}
// const hung1 = bill => bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 /100;
console.log(hung(100));
const bills = [125, 555, 44];
const tips = [hung(bills[0]), hung(bills[1]), hung(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);




// object
// giống dictionary trong python
const jonas = {
    fristname: 'hung',
    lastname: 'hung2',
    age: 2027 - 1999,
    job: 'teacher',
    friends: ['hung', 'hung2', 'hung3']
}

console.log(jonas);
console.log(jonas.lastname);
console.log(jonas['lastname']);
const namekey = 'name';

console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);

const interestedin = prompt('what do you want to know about jonas ? choose between fristname, lastname, age, job,friends');
if (jonas[interestedin]) {
    console.log(jonas[interestedin]);
}
else {
    console.log('wrong request! choose between fristname, lastname, age, job,friends');
}
jonas.location = 'VN';
jonas['weather'] = 'hot';
console.log(jonas);

console.log(`${jonas.fristname} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);




// object methods
const jonas = {
    fristname: 'hung',
    lastname: 'hung2',
    year: 1998,
    job: 'teacher',
    friends: ['hung', 'hung2', 'hung3'],
    hasdriverlicense: true,
    calage: function () {
        this.age = 2027 - this.year;
        return this.age;
    },
    getsummary: function () {
        return `${this.fristname} is a ${this.calage()}-year old ${this.job}, and he has ${this.hasdriverlicense ? 'a' : 'no'} driver license.`;
    }
};
console.log(jonas.getsummary());
console.log(jonas.calage());
console.log(jonas.year);




// iteration loops - for
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetition ${rep}`);
}
const jonas = [
    'hung',
    'hung2',
    2027 - 1992,
    'teacher',
    ['hung', 'hung2', 'hung3']
];
const hung = [];
for (let i = 0; i < jonas.length; i++) {
    console.log(typeof jonas[i]);
    hung.push(typeof jonas[i]);
}

console.log(hung);

const years = [1992, 1993, 1994, 1995, 1996];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2027 - years[i]);
}
console.log(ages);

// continue and break
console.log('----only strings----');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('----break with number----');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}
const jonas = [
    'hung',
    'hung2',
    2027 - 1992,
    'teacher',
    ['hung', 'hung2', 'hung3']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
};

for (let m = 1; m < 10; m++) {
    for (let n = 2; n < 10; n++) {
        console.log(m, n, m * n);
    }
};




// while loop
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}



// exercise 3:
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

// console.log(mark.bmi, john.bmi);

// // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}
// exercise 4:
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  
  console.log(bills, tips, totals);
  
  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));
*/
















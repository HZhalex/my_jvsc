// crt + / to comment out
/*
// alert('hello world!');
console.log('hello world!');
console.log(3 + 4 + 1 - 2);
let js = 'hung';
if (js === 'amazing') alert('javascript is fun!');
40 + 8 + 23 - 10;
let hung;
console.log(typeof hung);
console.log(typeof null);


function hung() {
    let ngu = "hung";
    function dn() {
        console.log(ngu);
    }
    return dn;
}

const vcl = hung();
vcl();

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}*/
/*
ở đây người ta giới thiệu về closure, là một
function có thể truy cập vào biến của function cha mà nó được tạo ra
*/
/*
const increment = counter();
increment(); // logs 1
increment(); // logs 2
increment(); // logs 3
*/



// challenge 1
/*
const mass_mark = 78;
const height_mark = 1.69;
const mass_john = 92;
const height_john = 1.95;
const bmi_mark = mass_mark / height_mark ** 2;
const bmi_john = mass_john / height_john ** 2;
console.log(bmi_mark, bmi_john);
console.log(bmi_mark > bmi_john);


const job = "student";
const name = "hung";
const age = 18;
const born = 2006;
console.log(
    `my name is ${name}, i'm ${age} years old,
    i was born in ${born}, and i'm a ${job}
    hoang van hung va toi 18 tuoi
    toi sinh nam 2006 va toi la sinh vien
     `
)

const age = 15;
const dutuoi = age >= 18 ? "du" : "chua du";
if (dutuoi === "du") {
    console.log("du tuoi de lai xe nha may thg");
}
else {
    console.log("chua du tuoi de lai xe nha may thg");
}
const year = 2023;
let hung;
if (year >= 2006) {
    hung = "duoc di hoc";
}
else {
    hung = "khong duoc di hoc";
}
console.log(hung);


// CHALLENGE 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = Math.round(massMark / (heightMark * heightMark));
const BMIJohn = Math.round(massJohn / (heightJohn * heightJohn));
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}



// type conversion
// chủ động chuyển đổi kiểu dữ liệu
const year = "2006";
console.log(Number(year), year);
console.log(Number(year) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);//NaN là một kiểu dữ liệu đặc biệt trong js, nó có nghĩa là không phải là số

console.log(String(23), 23);

// type coercion
// tự động chuyển đổi kiểu dữ liệu
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3 + '3');
console.log('23' / '2' + '2');
console.log('23' * '2');
// + thì thường sẽ chuyển về chuỗi string còn - * / thì sẽ chuyển về số number
let n = '1' + 1;
n = n - 1;
console.log(n);




// 5 falsy values: 0 , '',undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));

const hung = 0;
if (hung) {
    console.log('hung no money!');
}
else {
    console.log('hung has much money!');
}

let dung; // xảy ra 1 vấn đề đó là muốn kiểm tra biến này có undefined hay không nếu nó bằng 0 thì nó sẽ false thì xử lí như thế nào

if (dung) {
    console.log('dung is defined!');
}
else {
    console.log('dung is not defined!');
}



// strict equality operator (=== , !==) and loose equality operator (== , !=)
// stric không ép kiểu dữ lieu, loose thì ép kiểu dữ liệu
// strict có thể dùng để so sánh kiểu dữ liệu khác nhau loose thì không
// luôn ưu tiên dùng strict hơn là loose
const hung = '23';
if (hung === 23) console.log('true (stric)');
if (hung == 23) console.log('true (loose)');

const dung = Number((prompt('số yêu thích của bạn là gì?')));
console.log(dung);
console.log(typeof dung);

if (dung === 23) {
    console.log('cool 23 is amazing!');
}
else if (dung === 7) {
    console.log('7 is also cool!');
}
else {
    console.log('number is not 23 or 7!');
}

if (dung !== 23) console.log('not 23!');



// logical operators
const giaypheplaixe = true;
const tamnhintot = true;

console.log(giaypheplaixe && tamnhintot);
console.log(giaypheplaixe || tamnhintot);
console.log(!giaypheplaixe);

const met = true;
console.log(met && giaypheplaixe && tamnhintot);

if (giaypheplaixe && tamnhintot && !met) {
    console.log('du dieu kien lai xe');
}
else {
    console.log('khong du dieu kien lai xe!');
}




// the switch statement
const day = 'monday';
switch (day) {
    case 'monday': // day === 'monday'
        console.log('di ve sinh');
        console.log('di hoc');
        break;
    case 'tuesday':
        console.log('di tam');
        break;
    case 'wednesday':
        console.log('di ngu');
        break;
    case 'thursday':
        console.log('di choi');
        break;
    case 'friday':
        console.log('di lam');
        break;
    case 'saturday':
        console.log('choi theo thao');
        break;
    case 'sunday':
        console.log('di choi');
        break;
    default:
        console.log('khong biet lam gi ca!');
        break;
}

// no giong nhu if else statement nên có thể lập trình theo if else
// nhưng switch thì dễ đọc hơn và dễ bảo trì hơn
// nhưng nếu có nhiều case thì nên dùng if else statement



// phân biệt expression và statement
// Expression là bất kỳ đoạn mã nào trả về một giá trị. là cái gì đó có thể gán vào một biến được.
// Statement là một hành động mà JS thực thi, nó không bắt buộc phải có giá trị trả về
// Một mẹo: nếu bạn có thể gán một đoạn mã vào một biến thì đó là expression, còn không thì đó là statement
4 + 5; // expression
1991;
true && false && !false;

if (23 > 10) {
    const hung = '23 is bigger';
} // statement
console.log(hung);



//  the conditional (ternary) operator
// (condition ? value1 : value2)
const age = 15;
age >= 18 ? console.log('du tuoi') : console.log('chua du tuoi');
const hung = age >= 18 ? 'du tuoi' : 'chua du tuoi';
console.log(hung);

let drink2;
if (age >= 18) {
    drink2 = 'beer';
}
else {
    drink2 = 'water';
}
console.log(drink2);
console.log(`i like to drink ${age >= 18 ? 'beer' : 'water'}`);



// challenge 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins Win!');
}
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas Win!');
}
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Draw!');
}
else {
    console.log('No team win!');
}




// challenge 4:
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
console.log(bill);

console.log(tip);

console.log(bill + tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`); //If I print this, it will not cause error, but it won't be accepted as correct result

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);//This one is accepted as correct result

*/















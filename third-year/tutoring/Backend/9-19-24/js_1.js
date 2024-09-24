// ประกาศตัวแปร

// variables declares
var variables
let variables // cannot redeclares
const variables = variables // cannot change data

// number
var num1 = 100;
var num2 = 100.0;

// string
var str1 = "string";
var str2 = 'string';
var str3 = `string`;

// boolean
var bool1 = true;
var bool2 = false;

// array
var arr1 = [1, 2, 3];
var arr2 = [1, "string", true];

// object
var obj1 = { name: "John", age: 30 };
var obj2 = { name: "John", age: 30, address: "123 Main St" };
new Object(obj1, obj2);

// function
function function1 () {
  console.log("Hello, World!");
  return
}

// arrow function
const function2 = () => {
  console.log("Hello, World!");
}

// template string
var name1 = "'John'";
var name2 = '"John"' + 1; // = "John1"
var str4 = `Hello, ${name1}!`;

// undefined
var name

// null
var n = null

// if else
if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is greater than b");
}

// switch case
switch (a) {
  case 1:
    console.log("a is 1");
    break;
  case 2:
    console.log("a is 2");
    break;
  default:
    console.log("a is neither 1 nor 2");
}

// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// while loop
while (i<10) {
  console.log(i);
  i++;
}

// operator
// +	Addition บวก
// -	Subtraction ลบ
// *	Multiplication คูณ
// **	Exponentiation ยกกำลัง
// /	Division หาร
// %	Modulus (Division Remainder) มอด
// ++	Increment บวกไป 1
// --	Decrement ลบไป 1

var a = 10;
var b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50

// ใช้ในการทำงานร่วมกับตัวแปร
var a = 10;
var b = 5;
console.log(a + b); // 15
a += b;
console.log(a); // 15

// เทียบ boolean
// && and
// || or
// ! not
var a = true;
var b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// เปรียบเทียบ data
var a = "1"
var a = 1
console.log(a == b); // true
console.log(a === b); // false

// เปลี่ยนชนิดข้อมูล
// แปลงเป็น string
var a = 10;
var b = a.toString();
// แปลงเป็น number
var a = "10";
var b = parseInt(a);
// แปลงเป็น boolean
var a = "true";
var b = Boolean(a);
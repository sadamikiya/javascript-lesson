//Q1変数
let nickname = 'ごっしー';
let age = 28;
let text = '私のニックネームは ${nickname} です。年齢は ${age} 歳です。';

console.log(text);
console.log(nickname);
console.log(age);

//Q2配列
let languages = ["Javascript", "PHP", "Ruby", "Python", "Go"];
let languagetext = '私の好きな言語は${languages[1]}です。次は${languages[4]}を勉強してみたいです。';

console.log(languages);
console.log(languagetext);

//Q3オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5四則演算
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;

console.log(averageAge);

//Q6関数
function sayHello() {
  console.log("Hello");
}
sayHello();

let sayWorld = function () {
  console.log("World");
};
sayWorld();

//Q7メソッド
let birthday = '2000-09-27';

let userSayHello = function () {
  console.log('Hello!');
};

let newUser = { ...user, birthday: birthday, sayHello: userSayHello };
console.log(newUser);
newUser.sayHello();

//Q8引数
let calc = {};

calc.add = function (x, y) {
  console.log(x + y);
};

calc.add(3, 4);

calc.subtract = function (x, y) {
  console.log(x - y);
};

calc.subtract(15, 5);

calc.multiply = function (x, y) {
  console.log(x * y);
};

calc.multiply(7, 7);

calc.divide = function (x, y) {
  console.log(x / y);
};

calc.divide(25, 5);

//Q9返り値
function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);
console.log('5を3で割った時の剰余は' + result + 'です。');

//Q10スコープ
//let x = 1;
//foo();

function foo() {
  let x = 1;
  console.log(x);//関数内に移動
}
foo();//追加
//console.log(x);

//let x = 1; 変数xが定義されているがここでは関数foo()のスコープ内に限定されるため、ローカル変数となります。
//console.log(x);　関数外で変数xを参照しようとしますが、現在の変数xは関数内のローカル変数のため参照することができない。
//ここで変数x を出力するにはfunction foo(){}内にconsole.log(x);を記載してあげる必要があります。
//関数foo();を最後に記載することで呼びですことができます。

//comsole.log(x);を関数外のままである場合にはグローバル変数となるため、関数の外側に変数を指定する必要があります。

//Q1標準組み込みオブジェクト
const rundomNumber = Math.floor(Math.random() * 10);
console.log(rundomNumber);

//Q2コールバック関数
function displayMessage() {
  console.log("Hello World!");
}

setTimeout(displayMessage, 3000);

//Q3if
let num = 5

if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

//Q4for
let numbers = []
for (let i = 0; i < 100; i++) {
  numbers.push(i)
}
console.log(numbers);

//Q5for ×　if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let date = mixed[i];

  if (typeof date === 'number') {
    if (date % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number'); 
  }
}






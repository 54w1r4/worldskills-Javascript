let obj = {
    there: `hello`
};

function Hello(params) {
    // console.log('hello world');
}

// console.log(typeof Hello);

Hello();

const func2 = function() {

}

const f5 = (msg, date) => {
    return {
        x: 5,
        y: 10
    }
}

// console.log(f5());

function testThis() {
    // console.log(this);
    let msg = "I'm good";
}


new testThis();

let m = 10 
{
    let m = 20
    {
        let m = 30
        m = 50;
        new testThis();
        // console.log(new testThis());
    }
}

let func7 = {
    x: 100,
    func8() {
        // console.log(this);
    }
}

func7.func8();

class User{}

// const u1 = new User();

// console.log(u1);

// document.querySelectorAll("ul li").forEach(li => {
//     const f = li.querySelector.bind(li);
//     let title = f('.title');
//     let body = f('.body');
// })

// y = ax + b

let a = 10;
let b = 20;

function af(a, b, x) {
    return a * x + b
}

const af2 = af.bind(null, 10, 20)

// console.log(af2(20));

// console.log(af2 === af);

const af3 = af.bind(null, 20, 20);
// console.log(af3(20));
// console.log(f12(10));

// a = 20;
// b = 20;

// // console.log(f12(10));

// function f10_20() {
//     let a = 10;
//     let b = 20;
// }

function add(num) {
    return function (x) {
        return x + num;
    }
}

const add10 = add(10);
const add20 = add(20);

// console.log(add10(2));
// console.log(add20(23));

function UserType1() {
    this.name = 'edward';
}

class UserType2 {
    name = 'edward'
    constructor() {
        let age = 65
    } 
}

const u1 = new UserType1();
let u2 = new UserType2();

u2.speak = function() {
    console.log('12345');
}

// u2.speak();

let u3 = new UserType2();

UserType2.prototype.run = function() {
    console.log("i'm running")
}

// u3.run();
// u2.run();

// console.log(UserType2.prototype);

// console.log(u1);
// console.log(u2);

const obj2 = {
    name: 'edward'
}


// console.log(Object.getPrototypeOf(obj2));

class UserType3 {
    run() {
        console.log('running');
    }

    watch() {
        console.log(`watching`);
    }
}

let u4 = new UserType3();
let u5 = new UserType3();

// u4.run();
// u4.watch();

// mixin
UserType3.prototype.name = 'hello'

// console.log(u4.name);
// console.log(u5.name);

class Admin extends UserType3 {
    role = 'admin';
    fly() {
        console.log(`i can fly`);
    }
}

let admin1 = new Admin();

console.log(admin1.name);
console.log(admin1.role);

admin1.run();
admin1.fly();

// u5.fly(); not allowed
class UserType4 {
    constructor() {
        this.email = 'edward@quahk.com';
        this.password = '123456'
    }
}

new UserType4();


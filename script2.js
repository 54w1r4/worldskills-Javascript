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

const u1 = new User();

// console.log(u1);

// document.querySelectorAll("ul li").forEach(li => {
//     const f = li.querySelector.bind(li);
//     let title = f('.title');
//     let body = f('.body');
// })

// y = ax + b

let a = 10;
let b = 20;

function f12(x) {
    
    return a * x + b
}

console.log(f12(10));

a = 20;
b = 20;

console.log(f12(10));
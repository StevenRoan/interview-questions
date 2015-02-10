//
// Please write down the console output.
//

function Class1 () {
    this.cname = "Class1";
}
Class1.prototype.fun1  = function () {
    return this.cname;
}

function Class2 () {
    this.cname = "Class2";
}

var instantce1 = new Class1();
var instantce2 = new Class2();


console.log(instantce1.fun1());
console.log(instantce1.fun1.bind(instantce2));
console.log(instantce1.fun1.bind(instantce2)());


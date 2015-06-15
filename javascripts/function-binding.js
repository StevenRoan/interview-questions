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

var instance1 = new Class1();
var instance2 = new Class2();


console.log(instance1.fun1());
console.log(instance1.fun1.bind(instance2));
console.log(instance1.fun1.bind(instance2)());


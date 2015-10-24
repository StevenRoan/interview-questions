// 4 kinds of Function Invocation:
// Invocations normal function
// Invocation as constructor
// Invocation as method
// Invocation by apply and call

this.myClass = 'globalClass';
function returnVar() {
    return this.myClass;
}
function class1() {
    this.myClass = 'class1';
    return this;
}
class1.prototype.returnVar = returnVar;

function class2() {
    this.myClass = 'class2';
}
//Invocation as construtor -> return a object = 'this' of contructor;
var c1 = new class1();
var c2 = new class2();
c2.returnVar = c1.returnVar;

//-----
console.log('Invocation as normal F (global): ', returnVar());
//Invocation as method -> 'this' indicate caller not callee
console.log('Invocation as method (class1):  ', c1.returnVar());
console.log('Invocation as method (class2):  ', c2.returnVar());

//Invocation by apply and call -> change this.
console.log('Invocation by apply and call (global):  ', returnVar.apply(this));
console.log('Invocation by apply and call (class1):  ', returnVar.apply(c1));
console.log('Invocation by apply and call (class2):  ', returnVar.apply(c2));

//What if... -> exception
tmpC1 = class1();
tmpC1.returnVar();

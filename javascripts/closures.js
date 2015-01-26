/*
 * Describe the result and explain the reason (why it is the same).
 * (REF: local variable binding within the function it is defined)
 */
if (process.argv[2] === 'A') {
    var scope = 'global';

    outer = function () {
        var scope = 'local';
        function inner() {
            console.log(scope);
            return scope;
        }
        return inner();
    }
    outer()
}
// ------------------------------
if (process.argv[2] === 'B') {
    var scope = 'global';

    outer = function () {
        var scope = 'local';

        function inner() {
            console.log(scope);
            return scope;
        }
        return inner;
    }
    outer()()
}

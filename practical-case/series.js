//
// Given an array of asynchronous functions(tasks), implement a function to provide serialization execution for asynchronous functions and execute a final callback after all the tasks are done.
// This function needs to stop execution if any error happened, and if no error happens, the function get all the results in final callback.
//  NOTE: Input of each element function in the input array is "function(callback)" and input
//  of this callback function is "function(error, result)". For the final callback, let’s assume the input are function “(error, results)”
//
//  NOTE you can assume input parameter must be valid.
//

//Example
function f1(callback){
    setTimeout(callback,1000, null, "f1");
}
function f2(callback){
    setTimeout(callback,300, null, "f2");
}
var ar = [f1, f2];
series (ar, function (error, results){
    console.log(results);
    //expect ['f1', 'f2'];
});


function series(tasks, callback) {
    var i = 0;
    var results = [];
    var cb = function(error, result) {
        if (error) {
            return callback(error);
        }
        results[i] = result;
        i++;
        if (i >= tasks.length){
            return callback(null, results);
        }
        return tasks[i](cb);
    };
    tasks[i](cb);
}

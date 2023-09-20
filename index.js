function receivesAFunction(callBack){
    callBack();
    return `spy`;
}
function returnsANamedFunction() {
return function namedFunction () {
    console.log("Named Function")
}
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log(" anonymous Function")
    }

} 
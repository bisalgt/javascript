console.log(module.exports) // module.exports is an object

function printAvatar() {
    console.log('print avatar')
}


function printChhapie() {
    console.log('print chhapie');
}

function add(a, b) {
    console.log(a+b);
    return a+b;
}

console.log(module.exports);
module.exports.avatar = printAvatar;
module.exports.addition = add;

console.log(module.exports);
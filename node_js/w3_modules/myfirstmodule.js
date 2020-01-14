

function msg(){
    console.log('msg function called;');
    return 'Hello World!';
}

console.log('exporting function called');
exports.msg = msg();



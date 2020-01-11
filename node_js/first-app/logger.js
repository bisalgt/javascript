var url = "http://mybglogger.io/log";


function log(message){
    console.log(message);
}

// module.exports.log = log;
// module.exports.urlVal = url;



// console.log(module.exports);


// instead of making a object to pass a single function override that object and make it a function;


module.exports = log
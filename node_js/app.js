function sayHello(name){
    console.log('hello',name);
}


sayHello('Mosh');

// console.log(window); 

// In node we donot have window or document Object. These are the part of browser's runtime environment.


var name = 'Bishal';
// name scope is only limited to this file, not found in global object
// global.console.log() is same as console.log() == js engine converts it to global.console.log()


global.console.log(name); //
global.console.log(global.name); // undefined

// In node everything is module-- files are module. And properties and methods are encapsulated in that module
        // to access we need to explicitly define that module.
        // every node application has at least one file or one module.


console.log(module); // module object is local to that module/file



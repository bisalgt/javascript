let person = {
    printName(){
        console.log('My name is person');
        console.log(this === person); // this reference to whatever object it is calling it
    }
};

person.printName();

// when we call this and if it doesnot belong to any object than it reference global object 
function doSth() {
    console.log('\nPrint sth');
    console.log(this==person);
    console.log(this==global);
}

doSth();
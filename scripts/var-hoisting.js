console.log(name);
var name = 'bishal gautam';

var h1val = document.querySelector('h1');
h1val.textContent = 'Hello World!'

console.log(Object.getOwnPropertyNames(h1val));
console.log(Object.getOwnPropertyNames(h1val).filter(function(p){
    return typeof h1val[p] == 'function';
}));
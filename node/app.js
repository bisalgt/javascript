console.log('Hello World Node!');
setTimeout(function(){
    console.log('Three seconds have passed');
}, 3000)
var time = 0;
var timer = setInterval(() => {
    time += 2;
    console.log(time, ' seconds have passed');
    if (time > 6) {
        clearInterval(timer);
    }
}, 2000);
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    console.log(mySrc);
    console.log(myImage);
    if (mySrc='images/activist.jpg'){
        let myHeading = document.querySelector('h1');
        myHeading.textContent = 'Clicked on image';
        myImage.setAttribute('src','img.js');
        myImage.setAttribute('alt', 'No image to display')
    }
}
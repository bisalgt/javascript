let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Enter the name');
    if(!myName || myName === null) {
        setUserName();
      }
    localStorage.setItem('name', myName); // saving purpose
    myHeading.textContent = 'Mozilla is cool '+ myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
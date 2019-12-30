const ulRef = document.querySelector('.output ul');
const inputRef = document.querySelector('.output input');
const buttonRef = document.querySelector('.output button');

const listShow = [];
inputRef.focus();
ulRef.innerHTML = '';
function processItemAndDisplay(){
    console.log('function called');
    if (inputRef.value !== '') {
        listShow.unshift(inputRef.value);
        // list.innerHTML = '';
        // console.log(listShow);
        inputRef.value = '';
        inputRef.focus();
    }
    console.log(listShow);
    while (listShow.length > 5) {
        listShow.pop();
    }
    listShowHtml();
}
function listShowHtml(){
    ulRef.innerHTML = ''    
    for(i=0;i<listShow.length; i++){
        const listItem = document.createElement('li');
        listItem.textContent = listShow[i];
        ulRef.appendChild(listItem);
    }
}

buttonRef.addEventListener('click', processItemAndDisplay);
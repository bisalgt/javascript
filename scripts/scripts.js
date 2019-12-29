function createParagraph(){
    const paraa = document.createElement('p');
    paraa.textContent = 'This is a paragraph';
    document.body.appendChild(paraa);
}

function enterPrompt(){
    const butVal = prompt("eneter the message you want to dispaly");
    const para = document.createElement('h1');
    para.textContent = butVal;
    document.body.appendChild(para);
}


const buttons = document.querySelectorAll('button');
for(i=0;i<buttons.length; i++){
    if(i <= 1){
        buttons[i].addEventListener('click', createParagraph);
    }
    else{
        buttons[i].addEventListener('click', enterPrompt);
    }

}
// checks if all the DOM content is loaded
document.addEventListener('DOMContentLoaded', function(){
    const he1 = document.createElement('h1');
    he1.textContent = 'all docs loaded';
    document.body.appendChild(he1);
})
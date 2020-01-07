const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i=1;i<6;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = () => {
        var imageSrc = newImage.getAttribute('src');
        displayedImage.setAttribute('src', imageSrc);
    }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = () => {
    let btnAttribute = btn.getAttribute('class');
    if (btnAttribute == 'dark'){
        btn.setAttribute('class', 'white');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
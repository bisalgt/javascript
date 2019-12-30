const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
var storyText = "It was 94 fahrenheit outside, so :insertz: wezt for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."




var insertX = ['Willy the Goblin','Big Daddy','Father Christmas']
var insertY = ['the soup kitchen','Disneyland','the White House']
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



function result() {
    
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    while (newStory.indexOf(':insertx:')!==-1){
        newStory = newStory.replace(':insertx:', xItem)
    }
    while (newStory.indexOf(':inserty:')!==-1){
        newStory = newStory.replace(':inserty:', yItem)
    }
    while (newStory.indexOf(':insertz:')!==-1){
        newStory = newStory.replace(':insertz:', zItem)
    }
    
    if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
        
        
    }
    
    if(document.getElementById("uk").checked) {
        console.log('uk radio selected');
        var weight = Math.round(300/14) + ' Stones';
        var temperature =  Math.round((94-32)/1.8) + 'Celcius';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
        console.log(newStory)
    }
    
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
randomize.addEventListener('click', result);
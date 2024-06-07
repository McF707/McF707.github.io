const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a drive. When they got to :inserty:, they got out and stared in disbelief at what was in front of them, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Wilson the Attorney", "Mr. Puddleton", "George the giraffe"];
const insertY = ["the ranch", "Enchanted Forest", "the White House"];
const insertZ = ["fell into a portal", "turned into a turtle", "melted"];

randomize.addEventListener('click', result);

function result() {

let newStory = storyText;

let xItem = randomValueFromArray(insertX)
let yItem = randomValueFromArray(insertY)
let zItem = randomValueFromArray(insertZ)

newStory = newStory.replaceAll(':insertx:', xItem);
newStory = newStory.replaceAll(':inserty:', yItem);
newStory = newStory.replaceAll(':insertz:', zItem);
  
  
  
  if(customName.value !== '') {
    const name = customName.value;
	newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
  const weight = `${Math.round(300*0.0714286)} stone`;
  const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
	newStory = newStory.replaceAll("300 pounds", weight); 
	newStory = newStory.replaceAll("94 fahrenheit", temperature);
	}

  story.textContent = newStory;
  story.style.visibility = 'visible';

}

'use strict';
var productArray = [];
var imageRepository = document.getElementById('playingField');
var leftField = document.getElementById('left');
var centerField = document.getElementById('middle');
var rightField = document.getElementById('right');
var imageIdentifiers = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var previousArray = [];
var updatedArray = [];
var clickTracker = 0;
var viewTracker = 0;

function CreatorofProducts(name) {
  this.name = name;
  this.filepath = 'img_gallery/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  productArray.push(this);
}

for (var i = 0; i < imageIdentifiers.length; i++) {
  new CreatorofProducts(imageIdentifiers[i]);
}

function imageSelection() {
  return Math.floor(Math.random() * imageIdentifiers.length);
}
function makeArrayOfThreeNumbers() {
  previousArray[0] = updatedArray[0];
  previousArray[1] = updatedArray[1];
  previousArray[2] = updatedArray[2];
  updatedArray[0] = imageSelection();
  while (updatedArray[0] === previousArray[0] || updatedArray[0] === previousArray[1] || updatedArray[0] === previousArray[2]){
    updatedArray[0] = imageSelection();
  }
  updatedArray[1] = imageSelection();
  while (updatedArray[1] === updatedArray[0] || updatedArray[1] === previousArray[0] || updatedArray[1] === previousArray[1] || updatedArray[1] === previousArray[2]){
    updatedArray[1] = imageSelection();
  }
  updatedArray[2] = imageSelection();
  while (updatedArray[2] === updatedArray[0] || updatedArray[2] === updatedArray[1] || updatedArray[2] === previousArray[0] || updatedArray[2] === previousArray[1] || updatedArray[2] === previousArray[2]) {
    updatedArray[2] = imageSelection();
  }
}

  function threeImageRender() {
  leftField.src = productArray[0].filepath;
    productArray[updatedArray[0]].views += 1;
  centerField.src = productArray[1].filepath;
    productArray[updatedArray[1]].views += 1;
  rightField.src = productArray[2].filepath;
    productArray[updatedArray[2]].views += 1;
  }
  //Section for Handler
  function clickHandlingGlory(event) {
  event.preventDefault();
  if(event.target.id === 'playingField') {
    alert('Please click on an actual image');

  } else {
    if(clicks < 25) {
      for(var i = 0; i < imageIdentifiers.length; i++) {
        if(event.target.id === imageIdentifiers[i].id) {
          imageIdentifiers[i].clicks += 1;

        }
      }
      clicks += 1;
     threeImageRender();

   } else if (clicks === 25) {
      //enter something to reveal the button I've yet to make
    }else {
      playingField.removeEventListener('click', clickHandlingGlory());
    }

  }
  }




//Need Listening, Handling, Image generating and rendering, totaling functions

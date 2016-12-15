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

  function threeImageRender() {
  leftField.src = productArray[0].filepath;
  centerField.src = productArray[1].filepath;
  rightField.src = productArray[2].filepath;
  }




//Need Listening, Handling, Image generating and rendering, totaling functions

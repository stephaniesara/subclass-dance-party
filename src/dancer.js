// Creates and returns a new dancer object that can step

var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');


  this.time = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

  // use jQuery to create an HTML <span> tag

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.time);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


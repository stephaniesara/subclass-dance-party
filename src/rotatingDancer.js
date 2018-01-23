var RotatingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, "RotatingDancer");
  this.$node = $('<img class="RotatingDancer" src=\"imgs/minion.gif\" alt=\"minion\">');
  //var x = document.getElementById("img");
  //this.$node = document.getElementById("img");
  this.setPosition(top, left);

  // this.$node = $('<span class="RotatingDancer" ><img src=\"imgs/minion.gif\" alt=\"minion\" width=\'50\' height=\'50\'></span>');

};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.rotate({ angle: 0, animateTo:360 });
};

var RotatingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, "RotatingDancer");
  this.$node = $('<img class="RotatingDancer">');
  var imgSource = ['imgs/minion.gif', 'imgs/bmo.gif', 'imgs/peanut.gif'];
  this.$node.attr('src', imgSource[Math.floor(Math.random() * 100 % imgSource.length)]);
  this.setPosition(top, left);
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
  this.$node.rotate({ angle: 0, animateTo:180 });
};

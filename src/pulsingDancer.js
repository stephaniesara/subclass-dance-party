var PulsingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps, 'PulsingDancer');
};

PulsingDancer.prototype = Object.create(Dancer.prototype);
PulsingDancer.prototype.constructor = PulsingDancer;

PulsingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({height: '+=10px', width: '+=10px'}, 'slow', 'swing');
  this.$node.animate({height: '-=10px', width: '-=10px'}, 'slow', 'swing');

};

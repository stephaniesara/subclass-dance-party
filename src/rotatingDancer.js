var RotatingDancer = function(top, left, timeBetweenSteps) {
  // this.$node = $('<span class="RotatingDancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({
    'border': '10px solid blue',
    'border-radius' : '0px'
  });

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
  var dancer = this.$node;
  // var reanimate = function() {
  //   this.animate({height: '-=20px', width: '-=20px'}, 'slow', 'swing');
  // };
  // this.$node.animate({height: '+=10px', width: '+=10px'}, 'slow', 'swing', reanimate.bind(dancer));
  //this.$node.animate({height: '+=10px', width: '+=10px'}, 'slow', 'swing');
  //this.$node.animate({height: '-=10px', width: '-=10px'}, 'slow', 'swing');
};

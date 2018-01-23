$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineupButton').on('click', function(event) {
    // var top;
    // var left;
    if ($(this).text() === 'Line up!') {
      $(this).text('Scatter!');
      // top = $("body").height() / dancers.length;
      var width = $("body").width() / dancers.length;
      for (var i = 0; i < dancers.length; i++) {
        dancers[i].setPosition($("body").height()- 50, width * i); 
      }
    } else {
      $(this).text('Line up!');
      for (var i = 0; i < dancers.length; i++) {
        var top = $("body").height() * Math.random();
        var left = $("body").width() * Math.random();
        dancers[i].setPosition(top, left); 
      }
    }
  });
  
  
  $('.danceWithButton').on('click', function(event) {
    var randIdx = Math.floor(Math.random() * 1000 % dancers.length);
    var partnerOne = dancers[randIdx];
    var restOfDancers = dancers.slice();
    restOfDancers.splice(randIdx,1);
    
    var getPT = function(obj1, obj2) {
      Math.sqrt(Math.pow(obj1.left - obj2.left, 2) 
      + Math.pow(obj1.top - obj2.top, 2));
    };
    
    var partnerTwo = restOfDancers.reduce(function(accu, cV) {
      var distAccu = getPT(partnerOne, accu); 
      var distCV = getPT(partnerOne, cV);

      return distCV < distAccu ? cV : accu;
    });
  
    var switchPlaces = function(obj1, obj2) {
      var loc1 = {
        top: obj2.top,
        left: obj2.left
      };
      var loc2 = {
        top: obj1.top,
        left: obj1.left
      };
      obj1.$node.animate(loc1);
      obj2.$node.animate(loc2);
      obj1.$node.css(loc1);
      obj2.$node.css(loc2);
      partnerOne.top = loc1.top;
      partnerOne.left = loc1.left;
      partnerTwo.top = loc2.top;
      partnerTwo.left = loc2.left;
    };
    switchPlaces(partnerOne, partnerTwo);
  });
  
});

$(document).on('click', '.RotatingDancer', function(event) {
  var styleSettings;
  if($(this).height() === 100) {
    styleSettings = {
      width: '50px',
      height: '50px'
    };
  } else {
    styleSettings = {
      width: '100px',
      height: '100px'
    };
  }

  $(this).css(styleSettings);
});

$(document).on('mouseenter', '.PulsingDancer', function(event) {
  var styleSettings = {
    border: '10px solid pink',
    
  };
  $(this).css(styleSettings);
});
$(document).on('mouseleave', '.PulsingDancer', function(event) {
  var styleSettings = {
    border: '10px solid blue',
    
  };
  $(this).css(styleSettings);
});


$(document).on('mouseover', '.dancer', function(event) {
  var top = $("body").height() * Math.random();
  var left = $("body").width() * Math.random();
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  // $(this).css(styleSettings);
  $(this).animate({
    top: top,
    left: left
  });
});
// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
  
};

Dancer.prototype.step = function(){
  var instance = this;
  setTimeout(function(){instance.step();}, this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
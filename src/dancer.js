// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class = dancer ></span>');
  this.setPosition(top, left);
  this.step();
  this.classChange();
};

Dancer.prototype.step = function(){
  var instance = this;
  setTimeout(function(){
    instance.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.classChange = function(){
    console.log("classChange");
    var instance = this;
    setTimeout(function(){
      instance.classChange();
    }, this.timeBetweenSteps*5);
  }
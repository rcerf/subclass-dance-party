var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  console.log("blinkyDancer Step");
};

BlinkyDancer.prototype.classChange = function(){
  console.log("BlinkyDancer prototype");
  Dancer.prototype.classChange.call(this);
  this.$node.toggleClass("coloredDancer");
};



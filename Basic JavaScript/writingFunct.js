const x = function(parameter) {
    this.parameter = parameter; // We keep a record of the array inside the object
  };


  /** other way */
  // When you join two windows into one window
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
var bombard = function (target, quantity, delay) {
  // Use reasonable defaults for undefined arguments.
  target   = target   || 'html';
  quantity = quantity || 1;
  delay    = delay    || 1000;
  
  var handle = setInterval(function() {
    // Click it or clear it.
    if (quantity--) {
      $(target).eq(0).click();
    } else {
      clearInterval(handle);
    }
  }, delay);
};

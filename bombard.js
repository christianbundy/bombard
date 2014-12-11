var bombard = function (target, quantity, delay) {
  // Use reasonable defaults for undefined arguments.
  target   = target   || 'html';
  quantity = quantity || 1;
  delay    = delay    || 1000;
  
  var handle = setInterval(function() {
    // Check to make element exists.
    var el = $(target).eq(0);
    // Click it or clear it.
    if (el.length && quantity--) {
      el.click();
    } else {
      clearInterval(handle);
    }
  }, delay);
};

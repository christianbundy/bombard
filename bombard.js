var bombard = function (target, quantity, seconds) {
  target   = target   || 'html';
  quantity = quantity || 1;
  seconds  = seconds  || 1;
  
  var clickEverySecond = function (element) {
        if (quantity > 0) {
        $(element).eq(0).click();
        quantity--;
        };
  };
        
  setInterval(function() {
    clickEverySecond(target)
  }, (seconds) * 1000);
};



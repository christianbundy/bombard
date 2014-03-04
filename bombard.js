var bombard = function (target, quantity) {
  if (quantity > 0) {
    $(target).eq(0).click();
    bombard(target, quantity - 1);
  };
};

$(document).ready(function () {
  $('.programming-box').change(function () {
     $('.programming').toggle(this.checked);
  }).change(); //ensure visible state matches initially
});

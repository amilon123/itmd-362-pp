$.noConflict();
(function($) {
  var user = new Date(document.getElementById('dob').value), // get person's dob
  var current = new Date(), //  get current date
  var dob = user.getFullYear(), //  get the year of the person's dob
  var today = current.getFullYear(), // get the current year
  var age = today - dob; // subtract the peron's dob from current year
  $('#contact-form').on('submit', function(e) {
    e.preventDefault(); //  prevent link in url

    if(age < 18) {
      $('#contact-form').append('You need to be 18 years old or older.'
      );
    }
    if (age >= 18) {
      $('#contact-form').append('Your form has been submitted!'
      );
    }
  });
})(jQuery);

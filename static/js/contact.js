$(document).ready(function () {
  // Form validation
  $('#contact-form').submit(function (e) {
    e.preventDefault()

    var name = $('#name').val()
    var email = $('#email').val()
    var message = $('#message').val()

    if (name == '') {
      $('#name-error').text('Please enter your name')
      $('#name-error').addClass('active')
    } else {
      $('#name-error').text('')
      $('#name-error').removeClass('active')
    }

    if (email == '') {
      $('#email-error').text('Please enter your email')
      $('#email-error').addClass('active')
    } else {
      $('#email-error').text('')
      $('#email-error').removeClass('active')
    }

    if (message == '') {
      $('#message-error').text('Please enter your message')
      $('#message-error').addClass('active')
    } else {
      $('#message-error').text('')
      $('#message-error').removeClass('active')
    }
  })
})

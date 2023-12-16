// jQuery Validation initialization for Contact Page Form
$(document).ready(function() {
    // Initialize jQuery Validation for Contact Page Form
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2 // Minimum length of 2 characters
            },
            email: {
                required: true,
                email: true // Requires a valid email address
            },
            datepicker: {
                required: true // Ensure a date is selected
            },
            question: {
                required: true,
                minlength: 10 // Minimum length of 10 characters
            }
        },
        messages: {
            name: {
                required: 'Please enter your name',
                minlength: 'Name must be at least 2 characters'
            },
            email: {
                required: 'Please enter your email address',
                email: 'Please enter a valid email address'
            },
            datepicker: {
                required: 'Please select a date'
            },
            question: {
                required: 'Please enter your question',
                minlength: 'Question must be at least 10 characters'
            }
        },
        submitHandler: function(form) {
            // Use AJAX to submit the form data
            $.ajax({
                type: 'POST', // Change to 'GET' if needed
                url: form.action,
                data: $(form).serialize(),
                success: function(response) {
                    // Handle the successful response, if needed
                    console.log('Form submitted successfully:', response);
                },
                error: function(error) {
                    // Handle errors, if any
                    console.error('Error submitting form:', error);
                }
            });
        }
    });
});

$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Weekly Meeting',
                start: '2024-02-03T19:00:00', // Friday at 7:00 PM
                end: '2024-02-03T21:00:00'   // Friday at 9:00 PM
            },
            {
                title: 'Next Meeting',
                start: '2024-02-10T19:00:00', // Friday, March 10th, 2023, at 7:00 PM
                end: '2024-02-10T21:00:00'
            },
            {
                title: 'Poker Tournament Night',
                start: '2024-02-24',
                description: 'Prepare for a thrilling evening of intense competition and fun!'
            },
            {
                title: 'Poker Strategy Workshop',
                start: '2024-03-15',
                description: 'Learn advanced strategies and techniques from experienced players.'
            },
            // Add more events as needed
        ],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        eventClick: function(event) {
            alert('Event: ' + event.title + '\n' + 'Description: ' + event.description);
        }
    });
});
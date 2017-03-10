$(function() {
   $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/jul4ajka@gmail.com", 
            method: "POST",
            data: {
                firstName:    $('#first-name').val(),
                lastName:     $('#last-name').val(),
                visitorEmail: $('#visitor-email').val(),
                comment:      $('#comment').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>I appreciate your opinion!</h1><p>Thank you for feedback</p>')
        });
   }); 
});
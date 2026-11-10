// Simple script for ALLYouNeed
$(document).ready(function() {
    // Show an alert when "Add to Cart" or contact buttons are clicked
    $('.btn-custom').on('click', function(e) {
        if ($(this).text().includes('Add to Cart')) {
            alert('Item added to your cart successfully! 🍊');
        } else if ($(this).text().includes('Email Us')) {
            // Optional: alert or let it mailto
            console.log("Email button clicked");
        }
    });

    // Simple interaction for nav links to mark active based on click
    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // You can perform further processing (e.g., sending data to a server) here

    alert("Feedback submitted successfully!");
});

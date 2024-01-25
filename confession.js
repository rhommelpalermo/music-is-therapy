document.getElementById("confessionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const confessionText = document.getElementById("confession").value;

    // Send the confession to the server (you would need a server-side script for this)
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ confession: confessionText }),
    })
    .then(response => response.json())
    .then(data => {
        alert("Confession submitted successfully!");
        // You can customize this part as needed
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

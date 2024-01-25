document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const moodInput = document.getElementById('moodInput');
    const genreSuggestion = document.getElementById('genreSuggestion');
    
    generateButton.addEventListener('click', generateMusic);

    function generateMusic() {
        const userMood = moodInput.value.trim().toLowerCase();

        if (userMood === "") {
            alert("Please enter your mood.");
            return;
        }

        // Your AI logic to suggest a genre based on the user's mood would go here
        // For simplicity, we'll use a predefined mapping

        const genreMapping = {
            "happy": "Pop/Upbeat folk/Reggae",
            "calm": "Chill",
            "energetic": "Rock",
            "sad": "Blues/Jazz/Ballads",
            "anxious": "Ambient/Experimental/Chillout",
            "angry": "Heavy Metal/Punk/Hard Rock",
            "inlove": "R&B/Romantic Pop",
            "Broken Heart": "Country/Blues/Sadpop",


        };

        const suggestedGenre = genreMapping[userMood] || "Unknown";

        genreSuggestion.textContent = `Suggested Genre: ${suggestedGenre}`;
    }
});

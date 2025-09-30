// --- Get references to the HTML elements ---
const enrollButton = document.querySelector('.Enroll');
const sparkleGif = document.querySelector('.sparkle-gif');
const enrollAudio = document.getElementById('EnrollAudio');
const enrollform = document.querySelector('.Enrollform');
const backpage = document.querySelector('.backpage');


// --- Button Click Event Listener ---
enrollButton.addEventListener('click', () => { 
    playEnrollAudio();
    sparkleGif.classList.add('visible');
    setTimeout(() => {
        sparkleGif.classList.remove('visible');
    }, 400); 
    formappear(); // <-- FIX 4: Call the form function
});

// --- Audio Playback Function ---
function playEnrollAudio() { 
    enrollAudio.pause(); 
    enrollAudio.currentTime = 0; 

    enrollAudio.play()
        .catch(error => {
            console.error("Error playing audio:", error);
            alert("Could not play audio. Ensure your browser allows media playback.");
        });
}

// --- Form Appearance Function ---
function formappear() {
    if (enrollform) {
        enrollform.classList.add('is-active');
         backpage.classList.add('is-active');
    } else {
        console.error("Enrollform element not found!");
    }
}
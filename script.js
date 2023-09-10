document.addEventListener("DOMContentLoaded", function () {
    const drumPads = document.querySelectorAll(".drum-pad");
    const display = document.getElementById("display");

    // Function to play the audio clip and display the description
    function playSound(e) {
        const audio = document.getElementById(`${e.target.id}-sound`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            display.innerText = e.target.id;
        }
    }

    // Event listeners for clicking drum pads
    drumPads.forEach((pad) => {
        pad.addEventListener("click", playSound);
    });

    // Event listener for keydown event
    document.addEventListener("keydown", function (e) {
        const key = e.key.toUpperCase();
        const drumPad = document.getElementById(key);
        if (drumPad) {
            playSound({ target: drumPad });
        }
    });
});

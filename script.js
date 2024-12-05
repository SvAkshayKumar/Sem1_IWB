const textOptions = ["I am a Web developer", "I am a Frontend developer", "I am an engineer"];
    let currentIndex = 0;

    // Get the element by its id
    const developerTextElement = document.getElementById("developerText");

    // Function to change the text
    function changeText() {
        // Get the next index
        currentIndex = (currentIndex + 1) % textOptions.length;

        // Get the next text from the array
        const nextText = textOptions[currentIndex];

        // Fade out
        developerTextElement.style.opacity = 0;
        // Update the text in the HTML after the fade-out
        setTimeout(() => {
            developerTextElement.innerText =`${nextText}`;

            // Fade in
            developerTextElement.style.opacity = 1;
        }, 500); // Use the same duration as the transition in CSS (0.5s = 500ms)
    }
    setInterval(changeText, 2500);

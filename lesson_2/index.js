const linda = document.getElementById("image_programming"); // Get the image element
linda.addEventListener("click", hacerClick); // Add a click event listener to the image element
function hacerClick() {
    const piropoLinda = document.getElementById("linda"); // Get the element with the id "linda"
    piropoLinda.innerHTML = "¡Hola, ¡Eres muy hermosa! 🥰"; // Change the content of the element with the id "linda"
}

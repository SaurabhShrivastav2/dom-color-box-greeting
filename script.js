// Greeting functionality
const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");

greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name !== "") {
        greeting.textContent = `Hello, ${name}`;
    }
});

// Box color functionality
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        const color = box.getAttribute("data-color");
        box.style.backgroundColor = color;
    });
});

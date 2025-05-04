document.addEventListener("DOMContentLoaded", function () {
    const infoBox = document.querySelector(".pfm-info");
    const featureBoxes = document.querySelectorAll(".feature-box");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        // Info Box Animation
        const infoBoxTop = infoBox.getBoundingClientRect().top;
        if (infoBoxTop < triggerBottom) {
            infoBox.classList.add("active");
        }

        // Feature Boxes Animation
        featureBoxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once in case already in view
});
document.addEventListener("DOMContentLoaded", function () {
    const moneyContainer = document.querySelector(".money-container");

    function createMoneySymbol() {
        const symbol = document.createElement("div");
        symbol.classList.add("money-symbol");
        symbol.innerHTML = Math.random() > 0.5 ? "💸" : "💰"; // Randomly select between cash and coins

        symbol.style.left = Math.random() * 100 + "vw"; // Random position across the width
        symbol.style.animationDuration = Math.random() * 3 + 3 + "s"; // Vary animation speed

        moneyContainer.appendChild(symbol);

        setTimeout(() => {
            symbol.remove();
        }, 5000); // Remove after animation ends
    }

    setInterval(createMoneySymbol, 500); // Create money symbols at intervals
});

// "Add to Plan" button functionality
const planButtons = document.querySelectorAll(".plan-btn");
planButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const place = btn.parentElement.querySelector("h2").textContent;
    alert(`✅ ${place} has been added to your travel plan!`);
  });
});

const toggleButtons = document.querySelectorAll(".toggle-details-btn");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const placeCard = btn.closest(".place-card");
    const description = placeCard.querySelector(".description");
    const details = placeCard.querySelector(".details");

    const isVisible = details.style.display === "block";

    if (isVisible) {
      // Hide details and show description
      details.style.display = "none";
      description.style.display = "block";
      btn.textContent = "Learn More";
    } else {
      // Show details and hide description
      details.style.display = "block";
      description.style.display = "none";
      btn.textContent = "Hide Info";
    }
  });
});


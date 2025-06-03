// script.js


document.addEventListener("DOMContentLoaded", () => {
  const brandCards = document.querySelectorAll(".brand-card");
  const brandSection = document.getElementById("brandSection");
  const ringSection = document.getElementById("ringSection");
  const ringList = document.getElementById("ringList");
  const backButton = document.getElementById("backButton");

  brandCards.forEach(card => {
    card.addEventListener("click", () => {
      const brand = card.dataset.brand;
      showRings(brand);
    });
  });

  backButton.addEventListener("click", () => {
    ringSection.classList.add("hidden");
    brandSection.classList.remove("hidden");
    ringList.innerHTML = "";
  });

  function showRings(brand) {
    brandSection.classList.add("hidden");
    ringSection.classList.remove("hidden");
    ringList.innerHTML = "";

    const rings = ringData[brand] || [];

    rings.forEach(ring => {
      const card = document.createElement("div");
      card.className = "ring-card";
      card.setAttribute("data-aos", "fade-up");
      card.innerHTML = `
        <img src="${ring.image}" alt="${ring.name}" />
        <h4>${ring.name}（${ring.carat}ct）</h4>
        <p>${ring.desc}</p>
      `;
      ringList.appendChild(card);
    });

    AOS.init({ once: true });
  }
});

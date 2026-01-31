const isMobile = window.innerWidth <= 768;

if (isMobile) {
  const card = document.getElementById("card");

  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
}

const card = document.getElementById("card");
const hint = document.getElementById("hint");

if (card && hint) {
  card.addEventListener("click", () => {
    hint.classList.add("hide");
  });
}

if ("vibrate" in navigator) {
  card.addEventListener("click", () => {
    navigator.vibrate(15);
  });
}
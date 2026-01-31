// Define a data alvo: 1º de março de 2026 às 00:00:00
// Usando horário de Brasília (UTC-3)
const targetDate = new Date("2026-03-01T00:00:00-03:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const countdownEl = document.querySelector(".countdown");

    if (diff <= 0) {
        countdownEl.innerHTML = `
            <p class="final-message">
                Chegou o nosso dia 💖<br>
                Eu te amo.
            </p>
        `;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
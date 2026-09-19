// Dark mode toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

// Call-to-action message
const ctaBtn = document.getElementById("cta-btn");
const ctaMessage = document.getElementById("cta-message");
ctaBtn.addEventListener("click", () => {
  ctaMessage.textContent = "Terima kasih! Pendaftaran akan segera dibuka.";
});

// Auto year in footer
document.getElementById("year").textContent = new Date().getFullYear();

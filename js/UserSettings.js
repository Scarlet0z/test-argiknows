document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("darkModeToggle");

  // Apply saved preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    if (darkToggle) darkToggle.checked = true;
  }

  // If this page has a toggle, update preference
  if (darkToggle) {
    darkToggle.addEventListener("change", () => {
      if (darkToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }
});

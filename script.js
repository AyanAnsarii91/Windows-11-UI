// Select the elements only once for better performance
const taskbar = document.querySelector(".taskbar");
const startMenu = document.querySelector(".menubar");

// Event listener for taskbar click to toggle start menu visibility
taskbar.addEventListener("click", () => {
  // Get the current position of the start menu
  const currentBottom = getComputedStyle(startMenu).bottom;

  // Toggle the visibility of the start menu based on its current state
  if (currentBottom === "-175%") {
    // Show the start menu with a smooth transition
    startMenu.style.bottom = "-9%";
  } else {
    // Hide the start menu with a smooth transition
    startMenu.style.bottom = "7%";
  }
});

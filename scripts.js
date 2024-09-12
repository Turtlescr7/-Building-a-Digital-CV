document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Hide the loading screen
    document.querySelector(".loading-container").style.display = "none";

    // Show the main content
    document.querySelector(".main-content").style.display = "block";

    // Enable scrollbars by setting the body's overflow to auto
    document.body.style.overflow = "auto";
  }, 3000); // 3000 milliseconds = 3 seconds
});

const navbar = document.getElementById("navbar");
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");
sidebar.innerHTML = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#section1">About</a></li>
        <li><a href="#section2">Experience</a></li>
        <li><a href="#section3">Contact</a></li>
     </ul>
`;
document.body.appendChild(sidebar);

let sidebarOpen = false; // Track if the sidebar is open or closed

// Handle scrolling to switch between full navbar and bubble
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    // Show the bubble
    navbar.classList.add("bubble");
    navbar.classList.remove("open"); // Ensure the symbol is '+'
    sidebar.classList.remove("open"); // Close sidebar if open
    sidebarOpen = false;
  } else {
    // Restore the full navbar
    navbar.classList.remove("bubble");
    sidebar.classList.remove("open"); // Close sidebar if open
    sidebarOpen = false;
  }
});

// Handle click on bubble to toggle sidebar
navbar.addEventListener("click", function () {
  if (navbar.classList.contains("bubble")) {
    if (!sidebarOpen) {
      // Open the sidebar and change bubble symbol to '-'
      sidebar.classList.add("open");
      navbar.classList.add("open"); // Change bubble symbol to '-'
      sidebarOpen = true;
    } else {
      // Close the sidebar and change bubble symbol back to '+'
      sidebar.classList.remove("open");
      navbar.classList.remove("open"); // Change bubble symbol back to '+'
      sidebarOpen = false;
    }
  }
});

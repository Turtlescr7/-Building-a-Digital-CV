document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".loading-container").style.display = "none";
    document.querySelector(".main-content").style.display = "block";
  }, 3000); //2500 miliseconds = 3 seconds
});

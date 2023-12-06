const searchComponent = document.getElementById("searchComponent");
const placeholderText = "Search";

searchComponent.textContent = placeholderText;
searchComponent.classList.add("placeholder");

searchComponent.addEventListener("focus", function () {
  if (this.textContent === placeholderText) {
    this.textContent = "";
    this.classList.remove("placeholder");
  }
});

// Clear content on click (focus)
searchComponent.addEventListener("mousedown", function () {
  if (this.textContent === placeholderText) {
    this.textContent = "";
    this.classList.remove("placeholder");
  }
});

// Display placeholder when content is empty on blur
searchComponent.addEventListener("blur", function () {
  if (this.textContent === "") {
    this.classList.add("placeholder");
    this.textContent = placeholderText;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector("#checkbox");
  const notCompletedIcon = document.querySelector("#not-completed-icon");
  const completed = document.querySelector("#completed");
  const loading = document.querySelector("#loading");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      notCompletedIcon.classList.add("hidden");
      loading.classList.remove("hidden");
      setTimeout(() => {
        completed.classList.remove("hidden");
        loading.classList.add("hidden");
      }, 200); // Show completed icon after 2 milliseconds
    } else {
      completed.classList.add("hidden");
      notCompletedIcon.classList.remove("hidden");
      loading.classList.remove("hidden");
      setTimeout(() => {
        loading.classList.add("hidden");
      }, 2); // Hide loading icon after 2 milliseconds
    }
  });
});

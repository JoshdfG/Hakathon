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

// Function to handle checkbox click
function handleCheckboxClick(event) {
  const checkboxId = event.target.getAttribute("data-id");
  // Perform actions based on the checkbox clicked
  console.log(`Checkbox with ID ${checkboxId} was clicked`);
  // Add your logic here based on the checkbox clicked
}

// Attach click event listeners to each checkbox
document.addEventListener("DOMContentLoaded", function () {
  const checkboxContainers = document.querySelectorAll(".links-container");

  checkboxContainers.forEach((container) => {
    const checkbox = container.querySelector(".checkbox");
    const notCompletedIcon = container.querySelector("#not-completed-icon");
    const completed = container.querySelector("#completed");
    const loading = container.querySelector("#loading");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        notCompletedIcon.classList.add("hidden");
        loading.classList.remove("hidden");
        setTimeout(() => {
          completed.classList.remove("hidden");
          loading.classList.add("hidden");
        }, 200); // Show completed icon after 200 milliseconds
      } else {
        completed.classList.add("hidden");
        notCompletedIcon.classList.remove("hidden");
        loading.classList.remove("hidden");

        loading.classList.add("hidden");
        // Hide loading icon after 200 milliseconds
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const checkboxes = document.querySelectorAll('.checkbox');

//   checkboxes.forEach((checkbox) => {
//     const notCompletedIcon = checkbox.querySelector(".not-completed-icon");
//     const completed = checkbox.querySelector(".completed");
//     const loading = checkbox.querySelector(".loading");

//     checkbox.addEventListener("change", function () {
//       if (checkbox.checked) {
//         notCompletedIcon.classList.add("hidden");
//         loading.classList.remove("hidden");
//         setTimeout(() => {
//           completed.classList.remove("hidden");
//           loading.classList.add("hidden");
//         }, 200); // Show completed icon after 200 milliseconds
//       } else {
//         completed.classList.add("hidden");
//         notCompletedIcon.classList.remove("hidden");
//         loading.classList.remove("hidden");
//         setTimeout(() => {
//           loading.classList.add("hidden");
//         }, 200); // Hide loading icon after 200 milliseconds
//       }
//     });
//   });
// });

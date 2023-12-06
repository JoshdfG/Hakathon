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
const checkboxes = document.querySelectorAll(".checkbox");
const progressBar = document.querySelector(".progress-bar");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgressBarAndCheckbox);
});

function updateProgressBarAndCheckbox() {
  const checkedCheckboxes = document.querySelectorAll(".checkbox:checked");
  const progressWidth = (checkedCheckboxes.length / checkboxes.length) * 72;
  progressBar.style.width = `${progressWidth}px`;
}

const completionCount = document.getElementById("completionCount");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgressBarAndCheckbox);
});

function updateProgressBarAndCheckbox() {
  const checkedCheckboxes = document.querySelectorAll(".checkbox:checked");
  const numChecked = checkedCheckboxes.length;
  const progressWidth = (numChecked / checkboxes.length) * 100;

  progressBar.style.width = `${progressWidth}%`;
  completionCount.textContent = `${numChecked}/5 Completed`;
}

const checkboxGroups = document.querySelectorAll(".checkbox-group");

checkboxGroups.forEach((group) => {
  const checkboxes = group.querySelectorAll(".checkbox");
  const moreDivs = group.querySelectorAll(".more");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () =>
      toggleMoreDiv(checkboxes, moreDivs, index)
    );
  });
});

function toggleMoreDiv(checkboxes, moreDivs, index) {
  checkboxes[index].checked
    ? showMoreDiv(moreDivs[index])
    : hideMoreDiv(moreDivs[index]);
}

function showMoreDiv(moreDiv) {
  moreDiv.classList.remove("hidden");
}

function hideMoreDiv(moreDiv) {
  moreDiv.classList.add("hidden");
}

const toggleIcon = document.querySelector(".toggle-icon");
const checkboxGroup = document.querySelector(".checkbox-group");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

toggleIcon.addEventListener("click", () => {
  checkboxGroup.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

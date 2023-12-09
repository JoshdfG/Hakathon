const searchComponent = document.getElementById("searchComponent");
const placeholderText = "Search";

searchComponent.textContent = placeholderText;
searchComponent.classList.add("placeholder");

// Clear content on click (focus)
searchComponent.addEventListener("focus", function () {
  if (this.textContent === placeholderText) {
    this.textContent = "";
    this.classList.remove("placeholder");
  }
  this.classList.add("input-cursor");
});

// Add the place holder content on blur
searchComponent.addEventListener("blur", function () {
  if (this.textContent === "") {
    this.textContent = placeholderText;
    this.classList.add("placeholderText");
  }
  this.classList.remove("input-cursor");
});

// change default behaviour of the ennter key
searchComponent.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleEnterKey();
  }
});

function handleEnterKey() {
  // Your logic when Enter key is pressed
  // For example, prevent the default behavior entirely or do something else
}

//dropdown
const dropDown = document.querySelector(".dropdown");
const btnDc = document.querySelector(".btn-dc");
const btnD = document.querySelector(".btn-d");

btnDc.addEventListener("click", function () {
  dropDown.classList.toggle("hidden");
});
btnD.addEventListener("click", function () {
  dropDown.classList.toggle("hidden");
});

// Attach click event listeners to each checkbox
document.addEventListener("DOMContentLoaded", function () {
  const checkboxContainer = document.querySelectorAll(".links-container");
  checkboxContainer.forEach((container) => {
    const checkbox = container.querySelector(".checkbox");
    const notCompletedIcon = container.querySelector("#not-completed-icon");
    const loading = container.querySelector("#loading");
    const completed = container.querySelector("#completed");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        notCompletedIcon.classList.add("hidden");
        loading.classList.remove("hidden");
        setTimeout(() => {
          completed.classList.remove("hidden");
          loading.classList.add("hidden");
        }, 200);
      } else {
        completed.classList.add("hidden");
        loading.classList.add("hidden");
        notCompletedIcon.classList.remove("hidden");
      }
    });
  });
});

// Progress bar
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

//checkbox to change the active div on click

const checkboxGroups = document.querySelectorAll(".checkbox-group");

checkboxGroups.forEach((group) => {
  const checkboxes = group.querySelectorAll(".checkbox");
  const moreDivs = group.querySelectorAll(".more");
  const linksContainers = group.querySelectorAll(".links-container");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () =>
      toggleMoreDiv(checkboxes, moreDivs, linksContainers, index)
    );
  });
});

function toggleMoreDiv(checkboxes, moreDivs, linksContainers, index) {
  if (checkboxes[index].checked) {
    showMoreDiv(moreDivs[index]);
    changeLinksContainerColor(linksContainers[index], "color");
    moreDivs[index].classList.add("color");
  } else {
    hideMoreDiv(moreDivs[index]);
    changeLinksContainerColor(linksContainers[index], "");
    moreDivs[index].classList.remove("color");
  }
}

// more div toggle
function showMoreDiv(moreDivs) {
  moreDivs.classList.remove("hidden");
}

function hideMoreDiv(moreDivs) {
  moreDivs.classList.add("hidden");
}

function changeLinksContainerColor(linksContainers, colorClass) {
  linksContainers.classList.toggle("color", colorClass !== "");
}

// icon toggle

const toggleIcon = document.querySelector(".toggle-icon");
const checkboxGroup = document.querySelector(".checkbox-group");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

toggleIcon.addEventListener("click", () => {
  checkboxGroup.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// img delete toggle
const img = document.querySelector(".img");
const teext = document.querySelector(".teext");

img.addEventListener("click", () => {
  teext.classList.toggle("hidden");
});

const extend = document.querySelector(".extend");
const imgz = document.querySelector(".imgz");

imgz.addEventListener("click", () => {
  extend.classList.toggle("hidden");
});

//Interactive code for Dining & Grocery Section
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".tab-button");
  const items = document.querySelectorAll(".cuisine-item");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");


      const category = button.dataset.category;
      items.forEach(item => {
        if (item.classList.contains(category) || category === "all") {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
});

//Interactive code for FAQ section

document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", () => {

      const answer = question.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
});

//Interactive code for Packages section

document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector(".carousel-track");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  let index = 0;

  nextButton.addEventListener("click", function() {
    if (index < track.children.length - 1) {
      index++;
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  });

  prevButton.addEventListener("click", function() {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  });
});

let faqBtns = document.querySelectorAll(".faq-btn");
const hamburger = document.querySelector(".hamburger");
const navbarRight = document.querySelector(".navbar-right");
const crossIcon = document.querySelector(".cross-icon");

hamburger.addEventListener("click", () => {
  navbarRight.classList.toggle("open");
});

crossIcon.addEventListener("click", () => {
  navbarRight.classList.remove("open");
});

faqBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let link_accordion = e.target.nextElementSibling;
    let btnImg = e.target.querySelector("img");

    faqBtns.forEach((item2) => {
      if (item2 !== btn) {
        let itemImg = item2.querySelector("img");
        let item2_link_accordion = item2.nextElementSibling;
        item2_link_accordion.style.height = "";
        itemImg.src = "./assets/images/plus.png";
      }
    });

    if (link_accordion.style.height == "") {
      link_accordion.style.height = link_accordion.scrollHeight + "px";
      btnImg.src = "./assets/images/dash.svg";
    } else {
      link_accordion.style.height = "";
      btnImg.src = "./assets/images/plus.png";
    }
  });
});

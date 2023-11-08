const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
  console.log({ scrollY });


  if (scrollY > 100) {
    document.querySelector(".up-button").style.display = "block";
    document.querySelector(".up-button").classList.add("show");
    upButton.classList.add("show");
  } else {
    document.querySelector(".up-button").style.display = "none";
    document.querySelector(".up-button").classList.remove("show");
    upButton.classList.remove("show");
  }
  upButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
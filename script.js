let MenuBtn = document.querySelector(".menu-btn");
let OpenMenu = document.querySelector(".open-menu");
let MenuEl = document.querySelector(".menu");
let BodyBlur = document.querySelector(".blur");

MenuBtn.addEventListener("click", function () {
    OpenMenu.classList.remove("hidden");
    MenuEl.classList.remove("max-lg:hidden");
    BodyBlur.classList.remove("hidden");
});

OpenMenu.addEventListener("click", function () {
    OpenMenu.classList.toggle("hidden");
    MenuEl.classList.toggle("max-lg:hidden");
    BodyBlur.classList.add("hidden");
});

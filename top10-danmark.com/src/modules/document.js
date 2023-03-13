function doc() {
  document.documentElement.classList.add("loaded");

    document.addEventListener("click", function (e) {

      const menu = document.querySelector(".header__menu");

      const elementInteractive = e.target;

      if(elementInteractive.closest(".burger")) {
        menu.classList.add("menu-active")
        document.body.style.overflow = "hidden";
      }

      if (elementInteractive.closest(".header__exit-menu")) {
        menu.classList.remove("menu-active")
        document.body.style.overflow = "";
      }
      
      if (elementInteractive.closest(".nav__link")) {
        menu.classList.remove("menu-active")
        document.body.style.overflow = "";
      }
    })
}

export default doc;
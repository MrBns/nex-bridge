"use client";
import isDomReady from "@/lib/client/isDomReady";

isDomReady()
  .interactive()
  .then(() => {
    const navbar_el: HTMLElement = document.getElementById("main-navbar")!;
    const scrolled_class = "navbar-scrolled";

    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 1) {
        navbar_el.classList.add(scrolled_class);
      } else {
        navbar_el.classList.remove(scrolled_class);
      }
    });
  })
  .catch((e) => {});

isDomReady()
  .completed()
  .then(() => {
    const navbar_toggle_button = document.getElementById(
      "navbar-toggle-button"
    );
    const navbar_menu_close_button = document.getElementById(
      "navbar-menu-close-button"
    );
    const navbar_menu_el = document.getElementById("navbar-menu-el");
    console.log(navbar_menu_close_button, navbar_menu_el, navbar_toggle_button)

    navbar_toggle_button?.addEventListener("click", () => {
      navbar_menu_el?.classList.add("navbar-content-show");
    });

    navbar_menu_close_button?.addEventListener("click", () => {
      navbar_menu_el?.classList.remove("navbar-content-show");
    });
  });

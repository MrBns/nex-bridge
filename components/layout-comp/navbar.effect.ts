"use client";
import isDomReady from "@/lib/client/isDomReady";

isDomReady()
  .interactive()
  .then(() => {
    console.log("Dom is Ready");
    const navbar_el: HTMLElement = document.getElementById("main-navbar")!;
    const scrolled_class = "navbar-scrolled";

    function handle_scrolling() {
      if (window.scrollY > 1) {
        navbar_el?.classList.add(scrolled_class);
      } else {
        navbar_el?.classList.remove(scrolled_class);
      }
    }

    window.addEventListener("scroll", (e) => {
      handle_scrolling();
    });
    handle_scrolling();
  })
  .catch((e) => {});

isDomReady()
  .completed()
  .then(() => {
    const NAVBAR_VISIBLE_CLASS = "navbar-content-show";
    const navbar_toggle_button = document.getElementById(
      "navbar-toggle-button"
    );
    const navbar_menu_close_button = document.getElementById(
      "navbar-menu-close-button"
    );
    const navbar_menu_el = document.getElementById("navbar-menu-el");

    //showing content;
    navbar_toggle_button?.addEventListener("click", () => {
      navbar_menu_el?.classList.add(NAVBAR_VISIBLE_CLASS);
    });

    const navbar_menu_links = document.querySelectorAll(
      "#main-navbar .navbar-menu-link"
    );

    //hiding menu on each link clicks;
    navbar_menu_links.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbar_menu_el?.classList.contains("navbar-content-show")) {
          navbar_menu_el.classList.remove(NAVBAR_VISIBLE_CLASS);
        }
      });
    });

    //hiding menu
    navbar_menu_close_button?.addEventListener("click", () => {
      navbar_menu_el?.classList.remove("navbar-content-show");
    });
  });

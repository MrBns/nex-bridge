"use client";
import isDomReady from "@/lib/client/isDomReady";

isDomReady()
  .interactive()
  .then(() => {
    const navbar_el: HTMLElement = document.getElementById("main-navbar")!;
    const scrolled_class = "navbar-scrolled";

    window.addEventListener("scroll", (e) => {
      if (window.scrollY >1) {
        navbar_el.classList.add(scrolled_class);
      } else {
        navbar_el.classList.remove(scrolled_class);
      }
    });
  })
  .catch((e) => {});

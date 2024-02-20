"use client";

import isDomReady from "./isDomReady";

globalScroll: {
  const watchElement = function (target: Element) {
    const io = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        rootMargin: "0px 0px -15% 0px",
      }
    );
    io.observe(target);
  };

  isDomReady()
    .completed()
    .then(() => {
      const elements = document.querySelectorAll("[data-aos='true']");
      elements.forEach((el) => {
        watchElement(el);
      });
    });
}

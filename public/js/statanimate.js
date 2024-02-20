// for issue: github.com/iamajraj/stat-animate

const statRoot = document.querySelector(".stat-root");
const countsEl = document.querySelectorAll("[data-count]");

let isPlayedCountAnimation = false;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isPlayedCountAnimation) {
        startCounting();
        isPlayedCountAnimation = true;
      }
    });
  },
  {
    rootMargin: "0px 0px -20% 0px",
  }
);
if (statRoot) {
  observer.observe(statRoot);
}
function startCounting() {
  countsEl.forEach((el) => {
    const numberToCount = el.getAttribute("data-count");
    const suffix = el.getAttribute("data-count-suffix");
    const ms = el.getAttribute("data-count-ms");
    countToN(Number(numberToCount), el, suffix, ms);
  });
}
function countToN(n, el, suffix, ms) {
  let clear;
  let i = 0;
  clear = setInterval(
    () => {
      if (i > n) {
        return clearInterval(clear);
      }
      el.textContent = i + suffix;
      i += 1;
    },
    ms ? Number(ms) : 50
  );
}

// for issue: github.com/iamajraj/stat-animate

const statRoot = document.querySelector(".stat-root");
const countsEl = document.querySelectorAll("[data-count]");

let isPlayedCountAnimation = false;
let totalStepTime = 3000;

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
    const numberToCount = parseInt(el.getAttribute("data-count"));

    let duration = Math.floor(totalStepTime / numberToCount);

    countToN(numberToCount, el, duration);
  });
}

function countToN(n, el, duration) {
  let clear;
  let i = 0;
  clear = setInterval(() => {
    if (i > n) {
      return clearInterval(clear);
    }
    el.textContent = i;
    i++;
  }, duration);
}

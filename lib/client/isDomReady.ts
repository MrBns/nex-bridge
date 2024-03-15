import wait from "./wait";

export const isBrowser = typeof window === "object";

export default function isDomReady() {
  return {
    loading() {
      return new Promise((resolve) => {
        if (isBrowser) {
          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
              resolve(true);
            });
          } else {
            resolve(true);
          }
        }
      });
    },
    interactive() {
      return new Promise(async (resolve) => {
        if (isBrowser) {
          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
              resolve(true);
            });
          } else if (document.readyState === "interactive") {
            resolve(true);
          } else {
            await wait(10);
            resolve(true);
          }
        }
      });
    },
    completed() {
      return new Promise(async (resolve) => {
        if (isBrowser) {
          if (document.readyState === "complete") {
            resolve(true);
          } else {
            await wait(100);
            resolve(true);
          }
        }
      });
    },
  };
}

import wait from "./wait";

export const isBrowser = typeof window === "object";

export default function isDomReady() {
  return {
    loading() {
      return new Promise((resolve) => {
        if (isBrowser) {
          let state: typeof document.readyState = "loading";

          while (true) {
            state = document.readyState;
            if (state === "loading") {
              return resolve(true);
            }
          }
        }
      });
    },
    interactive() {
      return new Promise((resolve) => {
        if (isBrowser) {
          let state: typeof document.readyState = "loading";

          while (true) {
            state = document.readyState;
            if (state === "interactive") {
              return resolve(true);
            }
          }
        }
      });
    },
    completed() {
      return new Promise(async (resolve) => {
        if (isBrowser) {
          let state: typeof document.readyState = "loading";

          while (true) {
            await wait(100);
            state = document.readyState;
            if (state === "complete") {
              return resolve(true);
            }
          }
        }
      });
    },
  };
}

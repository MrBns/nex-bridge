import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  function onResize(_: UIEvent) {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
  };
}

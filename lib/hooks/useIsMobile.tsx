import { ReactNode, useEffect, useState } from "react";

interface PropsType {}
type ReturnType = boolean;

export default function useIsMobile(): ReturnType {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const platform = window.navigator.userAgent;

    const _isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(platform);
    setIsMobile(_isMobile);
  }, []);

  return isMobile;
}

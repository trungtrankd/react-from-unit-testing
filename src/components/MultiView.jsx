import { useEffect, useState } from "react";
import desktopView from "../../src/assets/desktop.jpg";
import mobileView from "../../src/assets/nokia-1100.webp";

export function useDetectMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const handleOnResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleOnResize);
    return () => {
      window.removeEventListener("resize", handleOnResize);
    };
  }, []);
  return isMobile;
}

export default function MultiView() {
  const isMobile = useDetectMobile();

  if (isMobile) {
    return (
      <div data-testid="mobile-view" className="w-100">
        <img src={mobileView} alt="Mobile view" className="w-100"></img>
      </div>
    );
  } else {
    return (
      <div data-testid="desktop-view" className="w-100">
        <img src={desktopView} alt="Desktop view" className="w-100"></img>
      </div>
    );
  }
}

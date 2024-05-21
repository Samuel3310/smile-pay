import { useState, useEffect } from "react";

function usePageWidth() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  console.log(pageWidth);
  useEffect(() => {
    const updatePageWidth = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener("resize", updatePageWidth);

    return () => {
      window.removeEventListener("resize", updatePageWidth);
    };
  }, []);

  return pageWidth;
}

export default usePageWidth;

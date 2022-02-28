import { FC, useEffect } from "react";

const ScrollToTopOnMount: FC = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};
export default ScrollToTopOnMount;

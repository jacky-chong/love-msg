import React, { ReactNode } from "react";

interface ShowProps {
  isTrue?: boolean; // This can be true, false, undefined, or null
  children: ReactNode;
}

const Show = ({ isTrue, children }: ShowProps) => {
  return isTrue === false ? null : <>{children}</>;
};

export default Show;

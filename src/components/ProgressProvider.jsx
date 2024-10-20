"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function ProgressProvider({ children }) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#000000"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function NProgressLoader() {
  const pathname = usePathname();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      #nprogress .bar {
        background: var(--primary) !important;
      }
    `;
    document.head.appendChild(style);

    NProgress.configure({ showSpinner: false });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 100);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}

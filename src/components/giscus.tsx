"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // Initial load
  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", "meohyun2/frank-archive");
    scriptElem.setAttribute("data-repo-id", "R_kgDOOodfMw");
    scriptElem.setAttribute("data-category", "Comments");
    scriptElem.setAttribute("data-category-id", "DIC_kwDOOodfM84CqC_a");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", resolvedTheme === "dark" ? "transparent_dark" : "light");
    scriptElem.setAttribute("data-lang", "ko");

    ref.current.appendChild(scriptElem);
  }, [resolvedTheme]);

  // Theme change handler
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    if (iframe) {
      iframe.contentWindow?.postMessage(
        { 
          giscus: { 
            setConfig: { 
              theme: resolvedTheme === "dark" ? "transparent_dark" : "light" 
            } 
          } 
        },
        "https://giscus.app"
      );
    }
  }, [resolvedTheme]);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 gradient-text">Comments</h3>
        <section ref={ref} />
      </div>
    </div>
  );
}

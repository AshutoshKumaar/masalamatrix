"use client";
import { useEffect } from "react";

export default function MonetagAdScript() {
  useEffect(() => {
    // Prevent duplicate script
    if (document.getElementById("monetag-script")) return;

    const script = document.createElement("script");
    script.id = "monetag-script"; // 👈 unique ID
    script.dataset.zone = "9620754"; // 👈 Monetag zone ID
    script.src = "https://al5sm.com/tag.min.js"; // 👈 src as given by Monetag
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}

"use client";
import { useEffect } from "react";

export default function MonetagAdScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.dataset.zone = "9620754";
    script.src = "https://al5sm.com/tag.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}

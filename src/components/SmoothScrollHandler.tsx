"use client";

import { useEffect } from "react";

export default function SmoothScrollHandler() {
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      // Check if this is an anchor link (starts with #)
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        
        const targetId = target.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar height
          
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    };

    // Add event listener to document for click events
    document.addEventListener("click", handleSmoothScroll);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}
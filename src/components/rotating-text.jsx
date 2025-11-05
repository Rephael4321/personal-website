"use client";

import { useState, useEffect, useRef } from "react";

export default function RotatingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const texts = ["Rephael Sintes", "Software Developer"];
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentText = texts[currentIndex];
    if (!currentText) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isTyping) {
      // Typing phase: add letters one by one
      if (displayedText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100); // Typing speed: 100ms per letter
      } else {
        // Finished typing, wait a bit then start erasing
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait 2 seconds before erasing
      }
    } else {
      // Erasing phase: remove letters one by one (faster)
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Erasing speed: 50ms per letter (faster)
      } else {
        // Finished erasing, move to next text and start typing
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        setIsTyping(true);
        setDisplayedText(texts[nextIndex][0]);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayedText, currentIndex, isTyping, texts]);

  // Initialize on mount
  useEffect(() => {
    if (texts.length > 0 && displayedText === "") {
      setDisplayedText(texts[0][0]);
    }
  }, []);

  return (
    <span
      style={{
        color: "#32e6e2",
        whiteSpace: "nowrap",
      }}
      className="inline-block"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

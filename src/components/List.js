import { useEffect, useState } from "react";
import "./List.css";

export default function List({ urlList }) {
  const [color, setColor] = useState("#2ba5fffa");
  const [btnText, setBtnText] = useState("Copy");
  if (urlList.length === 0) return null;

  // Function to handle copy button
  const handleCopy = (copyText) => {
    navigator.clipboard.writeText(copyText);
    setColor("green");
    setBtnText("Copied");
    // Return back to normal state after 3 seconds
    setTimeout(() => {
      setColor("#2ba5fffa");
      setBtnText("Copy");
    }, 3000);
    console.log("Copied!");
  };

  return (
    <div className="list-section">
      {urlList.map(({ orginalURL, shortURL }, index) => {
        return (
          <div key={index} className="list">
            <div className="orginal-section">{orginalURL}</div>
            <div className="short-section">
              <div className="short-url">{shortURL}</div>
              <button
                onClick={() => handleCopy(shortURL)}
                style={{ backgroundColor: color }}
              >
                {btnText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

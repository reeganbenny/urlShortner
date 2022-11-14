import { useState } from "react";
import "./List.css";

export default function List({ urlList }) {
  const [color, setColor] = useState("#2ba5fffa");
  if (urlList.length === 0) return null;
  const handleCopy = (copyText) => {
    navigator.clipboard.writeText(copyText);
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
                Copy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

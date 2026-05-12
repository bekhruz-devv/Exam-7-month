// Maslahat: useState(count), useRef(0) ni ishlating.
// Komponent boshida renderRef.current++ qiling.

import { useState, useRef } from "react";
import "../App.css";

export function Render() {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  renderRef.current++;

  return (
    <div className="app-wrap">
      <div className="rc-card">
        <div className="rc-num">{count}</div>
        <div className="rc-label">count</div>

        <button onClick={() => setCount(count + 1)} className="btn primary">
          +1
        </button>

        <div className="rc-info">
          Bu komponent <b>{renderRef.current}</b> marta chizildi
        </div>

        <div className="rc-dots">
          {Array.from({ length: renderRef.current }).map((_, i) => (
            <span key={i} className="dot"></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Render;

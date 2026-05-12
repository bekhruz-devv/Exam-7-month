// Ranglar massivini .map() bilan chiqaring va onClick={() => setRang(c)}.

import { useState } from "react";
import "../App.css";

export function Colors() {
  const colors = [
    "#ef4444",
    "#f59e0b",
    "#facc15",
    "#4ade80",
    "#61dafb",
    "#a78bfa",
  ];
  const [rang, setRang] = useState("#61dafb");

  return (
    <div className="app-wrap">
      <div className="picker">
        <div className="color-row">
          {colors.map((c) => (
            <button
              key={c}
              style={{ background: c }}
              className={rang === c ? "sel" : ""}
              onClick={() => setRang(c)}
            />
          ))}
        </div>
        <div className="color-display">
          <div className="color-square" style={{ background: rang }}></div>
          <div className="color-hex">{rang}</div>
          <div className="color-msg">Tanlangan rang: {rang}</div>
        </div>
      </div>
    </div>
  );
}

export default Colors;

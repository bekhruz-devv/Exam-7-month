// Maslahat: useState([]) bilan books, input uchun alohida state.
// Qo'shish: setBooks([...books, { id: Date.now(), nom }])
// O'chirish: setBooks(books.filter(b => b.id !== id))

import { useState } from "react";
import "../App.css";
import { createElement } from "react";

export function Todo() {
  const [books, setBooks] = useState([{ id: 1, nom: "O'tkan kunlar" }]);
  const [input, setInput] = useState("");

  return (
    <div className="app-wrap">
      <div className="book-app">
        <div className="book-input-row">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Yangi kitob nomi..."
          />
          <button
            onClick={() => {
              if (!input) return;
              setBooks([...books, { id: Date.now(), nom: input }]);
              setInput("");
            }}
            className="btn primary"
          >
            Qo'shish
          </button>
        </div>

        <ul className="book-list">
          {books.map((b, i) => (
            <li key={b.id}>
              <span className="b-name">{b.nom}</span>
              <button
                className="b-btn up"
                onClick={() => {
                  if (i === 0) return;
                  const yangi = [...books];
                  [yangi[i - 1], yangi[i]] = [yangi[i], yangi[i - 1]];
                  setBooks(yangi);
                }}
              >
                ↑
              </button>
              <button
                className="b-btn del"
                onClick={() => setBooks(books.filter((b2) => b2.id !== b.id))}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

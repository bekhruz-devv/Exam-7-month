import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Like from "./components/like";
import Colors from "./components/Gradiant";
import Render from "./components/render";
import Todo from "./components/todo";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <div className="app-wrap">
        <div className="mini-browser">
          <div className="mb-bar">
            <i></i>
            <i></i>
            <i></i>
            <span className="mb-url">localhost:5173</span>
          </div>

          <div className="spa-nav">
            <button
              onClick={() => Setpage("home")}
              className={`spa-btn ${page === "home" ? "active" : ""}`}
            >
              🏠 Bosh
            </button>
            <button
              onClick={() => setPage("products")}
              className={`spa-btn ${page === "products" ? "active" : ""}`}
            >
              📦 Mahsulotlar
            </button>
            <button
              onClick={() => setPage("contact")}
              className={`spa-btn ${page === "contact" ? "active" : ""}`}
            >
              📞 Aloqa
            </button>
          </div>

          <div className="spa-page">
            {page === "home" && (
              <>
                <div className="spa-emoji">🏠</div>
                <div className="spa-text">Bosh sahifaga xush kelibsiz!</div>
              </>
            )}
            {page === "products" && (
              <>
                <div className="spa-emoji">📦</div>
                <div className="spa-text">
                  Bizning mahsulotlar — eng yaxshilari!
                </div>
              </>
            )}
            {page === "contact" && (
              <>
                <div className="spa-emoji">📞</div>
                <div className="spa-text">Aloqa: hello@react-sayohat.uz</div>
              </>
            )}
          </div>
        </div>
        <div className="others">
          <Card />
          <Like />
          <Colors />
          <Render />
          <Todo />
        </div>
      </div>
    </>
  );
}

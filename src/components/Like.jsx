import { useState } from "react";
import "./css/Like.css";

export function Like() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrap">
      <button
        onClick={() => {
          setLiked(!liked);
          setCount(liked ? count - 1 : count + 1);
        }}
        className={`like-btn ${liked ? "active" : ""} `}
      >
        <span className="heart">♥</span>
        <span className="like-count">{count}</span>
      </button>
    </div>
  );
}

export default Like;

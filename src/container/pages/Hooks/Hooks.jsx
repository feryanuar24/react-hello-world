import { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title Change: ${count}`;
    return () => {
      document.title = "React App";
    };
  });

  return (
    <div className="container">
      <h4>Hooks</h4>
      <hr />
      <p>Nilai saya saat ini adalah: {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Update nilai
      </button>
    </div>
  );
};

export default Hooks;

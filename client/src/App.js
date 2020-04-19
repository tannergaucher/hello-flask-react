import React, { useEffect, useState } from "react";

import "semantic-styles";

function App() {
  const [flaskMessage, setFlaskMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:5000/");
      const { message } = await res.json();
      setFlaskMessage(message);
    }

    fetchData();
  }, []);

  return (
    <div>
      <header className="header padding">
        <h1 className="title">Flask React App</h1>
      </header>
      <main className="main padding">
        <h2>{flaskMessage}</h2>
      </main>
    </div>
  );
}

export default App;

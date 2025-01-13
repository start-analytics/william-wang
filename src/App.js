import React from "react";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ImageGrid />
      </main>
    </div>
  );
}


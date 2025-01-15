import React from "react";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer"; // 引入 Footer
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ImageGrid />
      </main>
      <Footer /> {/* 添加 Footer */}
    </div>
  );
}


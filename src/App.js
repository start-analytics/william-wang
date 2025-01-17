import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"; // 引入 Footer
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
       <Home />
       <Services />
       <Skills />
       <Portfolio />
      </main>
      <Footer /> {/* 添加 Footer */}
    </div>
  );
}

export default App;


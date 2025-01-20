import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">What I Do</h2>
      <p className="section-subtitle">Empowering clients with actionable insights</p>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">📊</div> {/* 图标替换为与市场信号相关的图标 */}
          <h3>Market Signals Hub</h3>
          <ul>
            <li>Free signals for: Stocks</li>
            <li>Free signals for: Crypto</li>
            <li>Free signals for: Forex</li>
          </ul>
        </div>
        <div className="service-card">
          <div className="service-icon">🎓</div> {/* 图标替换为与导师计划相关的图标 */}
          <h3>Trading Mentorship</h3>
          <ul>
            <li>1 on 1 mentorship for Trading</li>
            <li>Tailored guidance for success</li>
            <li>Comprehensive trading strategies</li>
          </ul>
        </div>
        <div className="service-card">
          <div className="service-icon">🌍</div> {/* 图标替换为与宏观经济洞察相关的图标 */}
          <h3>Macroeconomic Insights</h3>
          <ul>
            <li>Perspective on macroeconomic news</li>
            <li>Understanding global financial trends</li>
            <li>Market reactions to key events</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

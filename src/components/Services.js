import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Investment Services</h2>
      <p className="section-subtitle">Empowering clients to achieve financial growth</p>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">📈</div> {/* 图标替换为与股票相关的图标 */}
          <h3>Market Analysis</h3>
          <ul>
            <li>Technical Analysis of Stocks</li>
            <li>Identifying Market Trends</li>
            <li>Price Movement Predictions</li>
            <li>Volume Analysis</li>
          </ul>
        </div>
        <div className="service-card">
          <div className="service-icon">💡</div> {/* 图标替换为与策略相关的图标 */}
          <h3>Investment Strategies</h3>
          <ul>
            <li>Risk Management Plans</li>
            <li>Portfolio Diversification</li>
            <li>Value and Growth Investing</li>
            <li>Sector and Thematic Investing</li>
          </ul>
        </div>
        <div className="service-card">
          <div className="service-icon">🏦</div> {/* 图标替换为财富管理相关的图标 */}
          <h3>Wealth Management</h3>
          <ul>
            <li>Long-Term Financial Planning</li>
            <li>Retirement Fund Allocation</li>
            <li>Tax-Optimized Investments</li>
            <li>Estate and Succession Planning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

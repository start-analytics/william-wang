import React, { useState } from "react";
import "./Portfolio.css";

// 导入本地图片
import project1 from "./assets/images/project1.jpg";
import project2 from "./assets/images/project2.jpg";


const portfolioItems = [
  {
    src: project1, // 使用本地图片
    title: "2025/1/27",
    description: `USDJPY - Higher timeframe bullish trend\nPrice is respecting the 4Hr Gap\nEntry: 155.776\nSL: 155.470\nTP1: 156.732\nTP2: 158.200\n0.47% risk of the account`, // 使用 \n 换行
  },
  {
    src: project2, // 使用本地图片
    title: "2025/1/27",
    description: "USDJPY - Higher time frame bullish trend\nRespecting 4HR gap\nEntry : 155.454\nSl: 154.718\nTP1: 156.742\nTP2: 158.1\nRisk 1.02%",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project); // 设置选中的项目
  };

  const closeModal = () => {
    setSelectedProject(null); // 关闭模态框
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="portfolio-item"
            onClick={() => handleProjectClick(item)}
          >
            <div className="portfolio-item-overlay">
              <h3>{item.title}</h3>
              <p>View Details</p>
            </div>
            <img src={item.src} alt={item.title} />
          </div>
        ))}
      </div>

      {/* 模态框 */}
      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.src} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{selectedProject.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
import React, { useState, useEffect } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // 组件加载时获取最新的 Instagram 图片
  useEffect(() => {
    fetch("/insta_data.json") // 读取 JSON 文件
      .then((response) => response.json())
      .then((data) => {
        setPortfolioItems(data);
      })
      .catch((error) => console.error("Error fetching portfolio data:", error));
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
            <p>{selectedProject.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

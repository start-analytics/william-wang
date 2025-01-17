import React, { useState } from "react";
import "./Portfolio.css";

const portfolioItems = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iYKSe_wy-0ypMjRU_UKnsSCCmWNN_KUJsA&s", // 替换为真实图片地址
    title: "Project 1",
    description: "Description of project 1.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sBjg6NE2SKLca7EfVgGKLYv3EIjxRfPmSg&s",
    title: "Project 2",
    description: "Description of project 2.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnVJZ1tdlZRpIrbMHqZgOuFku4bjKRSMTrVSF3VbzkXWMNnyk-TTzq3oSqTGY3Ck_vIo&usqp=CAU",
    title: "Project 3",
    description: "Description of project 3.",
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
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
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

"use client";
import React, { useState, useEffect } from "react";
import "./portfolio.css";

export default function Portfolio() {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);

    useEffect(() => {
        fetch(`/insta_data.json?t=${Date.now()}`)
            .then((response) => response.json())
            .then((data) => {
                setPortfolioItems(data);
            })
            .catch((error) => console.error("Error fetching portfolio data:", error));
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0); // 选中帖子后，重置图片索引
        document.body.style.overflow = "hidden"; // 禁止页面滚动
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto"; // 允许页面滚动
    };

    // 切换到下一张图片
    const nextImage = () => {
        if (selectedProject && selectedProject.src.length > 1) {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % selectedProject.src.length
            );
        }
    };

    // 切换到上一张图片
    const prevImage = () => {
        if (selectedProject && selectedProject.src.length > 1) {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex - 1 + selectedProject.src.length) % selectedProject.src.length
            );
        }
    };

    // 处理手势滑动
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (!touchStartX) return;
        let touchEndX = e.changedTouches[0].clientX;
        let diff = touchStartX - touchEndX;

        if (diff > 50) {
            nextImage(); // 向左滑动，下一张
        } else if (diff < -50) {
            prevImage(); // 向右滑动，上一张
        }

        setTouchStartX(null);
    };

    return (
        <section id="portfolio" className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="portfolio-item" onClick={() => handleProjectClick(item)}>
                        <div className="portfolio-item-overlay">
                            <p>View Details</p>
                        </div>
                        {item.src.length > 0 && (
                            <img src={item.src[0]} alt={`Post ${index}`} />
                        )}
                    </div>
                ))}
            </div>

            {/* 模态框：显示多张图片 */}
            {selectedProject && (
                <div className="modal" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <button className="close-btn" onClick={closeModal}>X</button>

                        {/* 图片轮播 + 左右切换按钮 */}
                        <div className="image-slider-wrapper">
                            {/* 左右切换按钮 */}
                            {selectedProject.src.length > 1 && (
                                <>
                                    <button className="prev-btn" onClick={prevImage}>{"<"}</button>
                                    <button className="next-btn" onClick={nextImage}>{">"}</button>
                                </>
                            )}

                            <div className="image-slider" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                                {selectedProject.src.map((imgSrc, idx) => (
                                    <img key={idx} src={imgSrc} alt={`Slide ${idx}`} />
                                ))}
                            </div>
                        </div>

                        {/* 发布日期 */}
                        <h3>Published on {selectedProject.date}</h3>

                        {/* 描述内容 */}
                        <p style={{ whiteSpace: "pre-line" }}>{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
}


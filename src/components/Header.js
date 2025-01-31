"use client";
import React, { useState } from "react";
import "./Header.css";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home"); // 跟踪当前活动的页面

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 60, // 调整滚动位置，避免被导航栏遮挡
				behavior: "smooth",
			});
			setActiveSection(id); // 更新当前活动页面
			setIsMenuOpen(false); // 自动关闭菜单
		}
	};

	return (
		<header className="header">
			<div className="avatar-container">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gYxEw0WExSA7vhUZtvVrQ5TVoP8SYYvDYg&s" // 替换为个人头像图片地址
					alt="Avatar"
					className="avatar"
				/>
				<h1 className="name">WILLIAM-WANG</h1>
			</div>
			<button className="menu-toggle" onClick={toggleMenu}>
				☰
			</button>
			<nav className={`nav-bar ${isMenuOpen ? "open" : ""}`}>
				<ul className="nav-links">
					<li className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>
						Home
					</li>
					<li className={activeSection === "portfolio" ? "active" : ""} onClick={() => scrollToSection("portfolio")}>
						Portfolio
					</li>
					<li className={activeSection === "services" ? "active" : ""} onClick={() => scrollToSection("services")}>
						What I do
					</li>
					<li className={activeSection === "skills" ? "active" : ""} onClick={() => scrollToSection("skills")}>
						Topics I discuss
					</li>
				</ul>
			</nav>
		</header>
	);
}

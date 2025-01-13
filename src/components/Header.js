import React from "react";
import "./Header.css";

export default function Header() {
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
    </header>
  );
}

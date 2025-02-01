import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Instagram 图标

export default function Footer() {
	return (
		<footer className="footer">
			<p>Follow me:</p>
			<a
				href="https://instagram.com/w1111amwang" // 替换为你的 Instagram 链接
				target="_blank"
				rel="noopener noreferrer"
				className="footer-link"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
				<span className="w1111amwang">@w1111amwang</span> {/* 添加用户名 */}
			</a>
		</footer>
	);
}

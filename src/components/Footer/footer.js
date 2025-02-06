import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Instagram 图标

export default function Footer() {
	return (
		<footer className="footer">
			<p>Follow me:</p>
			<a
				href="https://instagram.com/tradingwithw111" // 替换为你的 Instagram 链接
				target="_blank"
				rel="noopener noreferrer"
				className="footer-link"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
				<span className="tradingwithw111">@tradingwithw111</span> {/* 添加用户名 */}
			</a>
		</footer>
	);
}

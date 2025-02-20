import "./skills.css";

export default function Skills() {
	return (
		<section id="skills" className="skills-section">
			<h2 className="section-title">Topics I Discuss</h2>
			<p className="section-subtitle">Key areas of focus in trading and investing</p>
			<div className="skills-container">
				<div className="skill-item">
					<p className="skill-name">Risk Management</p>
					<div className="progress-bar">
						<div className="progress" style={{ width: "99%" }}></div>
						<span className="progress-percent">85%</span>
					</div>
				</div>
				<div className="skill-item">
					<p className="skill-name">Execution</p>
					<div className="progress-bar">
						<div className="progress" style={{ width: "80%" }}></div>
						<span className="progress-percent">80%</span>
					</div>
				</div>
				<div className="skill-item">
					<p className="skill-name">Technical Analysis</p>
					<div className="progress-bar">
						<div className="progress" style={{ width: "90%" }}></div>
						<span className="progress-percent">90%</span>
					</div>
				</div>
				<div className="skill-item">
					<p className="skill-name">Fundamental Analysis</p>
					<div className="progress-bar">
						<div className="progress" style={{ width: "95%" }}></div>
						<span className="progress-percent">95%</span>
					</div>
				</div>
				<div className="skill-item">
					<p className="skill-name">Market Trends</p>
					<div className="progress-bar">
						<div className="progress" style={{ width: "88%" }}></div>
						<span className="progress-percent">88%</span>
					</div>
				</div>
			</div>
		</section>
	);
}

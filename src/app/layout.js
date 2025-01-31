import "./globals.css";

export const metadata = {
	title: "William-Wang",
	description: "Let me help you navigate the complexities of the stock market and uncover opportunities to grow your wealth.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

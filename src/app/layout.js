import "./globals.css";

export const metadata = {
	metadataBase: new URL("https://william-wang.vercel.app/"),
	title: "William-Wang",
	description: "Let me help you navigate the complexities of the stock market and uncover opportunities to grow your wealth.",
	openGraph: {
		title: "William-Wang",
		description: "Let me help you navigate the complexities of the stock market and uncover opportunities to grow your wealth.",
		images: [
			{
				url: "/android-chrome-512x512.png",
				width: 800,
				height: 600,
				alt: "William-Wang",
			},
		],
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: ["/favicon.ico"],
		apple: ["/apple-touch-icon.png"],
		shortcut: ["/apple-touch-icon.png"],
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

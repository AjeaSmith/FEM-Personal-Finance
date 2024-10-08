import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
	title: "Personal Finance App",
	description: "Manage your finances much easier",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${publicSans.className} bg-beige-100`}>{children}</body>
		</html>
	);
}

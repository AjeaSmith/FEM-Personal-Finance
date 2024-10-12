import { Public_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";

const publicSans = Public_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
	title: "Personal Finance App",
	description: "Manage your finances much easier",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${publicSans.className} bg-beige-100 text-grey-900 flex h-screen`}
			>
				<Sidebar />
				<section className="flex-grow">{children}</section>
				{/* <Bottombar /> */}
			</body>
		</html>
	);
}

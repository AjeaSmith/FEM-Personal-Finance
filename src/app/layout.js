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
				className={`${publicSans.className} bg-beige-100 text-grey-900 xl:main-grid w-full h-screen flex flex-row relative`}
			>
				<Sidebar />
				<section className="px-7">{children}</section>
				{/* <Bottombar /> */}
			</body>
		</html>
	);
}

import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const publicSans = Public_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
	title: "Personal Finance App",
	description: "Manage your finances much easier",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${publicSans.className} bg-beige-100 text-grey-900 grid grid-cols-[1fr] xl:grid-cols-[auto,1fr] min-h-screen`}
			>
				<Navbar />
				<main className="p-4 md:p-10">{children}</main>
			</body>
		</html>
	);
}

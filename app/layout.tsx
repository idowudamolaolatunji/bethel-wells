import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappWidget from "@/components/WhatsappWidget";

export const metadata: Metadata = {
	title: "Bethel Wells Mega System International Limited",
	description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main className="main">
					{children}
				</main>
				<Footer />

				<WhatsappWidget />
			</body>
		</html>
	);
}
import "@/styles/globals.css";
import Navigation from "@/app/sections/Navigation";
import { menuLinks } from "@/app/utils/options";
import { Inter, Libre_Baskerville } from "next/font/google";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

const libreb = Libre_Baskerville({
	variable: "--font-libre-baskerville",
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
});

export const metadata = {
	title: "TheBoardroom Africa",
	description:
		"TheBoardroom Africa officially launched in 2016, our goal is to improve board diversity by accelerating the appointment of women onto boards and building a growing pipeline of board-ready women while inspiring and educating the business community on the power of diverse leadership",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${inter.variable} ${libreb.variable}`}>
			<body className="font-sans">
				<Navigation menuLinks={menuLinks} />
				{children}
			</body>
		</html>
	);
}

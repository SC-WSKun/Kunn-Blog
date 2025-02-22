import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
	title: "Welcome to my blog",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-col bg-beige antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}

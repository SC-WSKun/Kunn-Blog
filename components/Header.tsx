"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { aestera } from "@/app/fonts";
import { ReactNode } from "react";
import Contact from "./Contact";
export default function Header() {
	return (
		<div className="flex w-full flex-row items-center justify-around gap-40 border-b-2 border-tan bg-beige px-20 py-4 font-mono text-xl">
			<p className={aestera.className + " text-2xl"}>Kunn Blog</p>
			<div className="grid h-full grow grid-cols-4">
				<NavLink href={"/"}>Home</NavLink>
				<NavLink href={"/blog"}>Blog</NavLink>
				<NavLink href={"/photo"}>Photo</NavLink>
				<NavLink href={"/project"}>Project</NavLink>
			</div>
			<Contact />
		</div>
	);
}

function NavLink(props: { href: string; children: ReactNode }) {
	const { href, children } = props;
	return (
		<Link
			className="flex h-20 grow items-center justify-center tracking-wide"
			href={href}
		>
			<motion.div
				className="flex h-4/5 w-4/5 items-center justify-center rounded-3xl"
				whileHover={{
					scale: 1.1,
					backgroundColor: "var(--tan)",
					color: "white",
				}}
				whileTap={{ scale: 0.95 }}
			>
				{children}
			</motion.div>
		</Link>
	);
}

"use client"
import Link from "next/link";
import { motion } from "motion/react"
import { aestera } from "@/app/fonts";
import { ReactNode } from "react";
export default function Header() {
  return (
    <div className="flex h-28 w-full flex-row items-center justify-around gap-40 bg-beige px-20 font-mono text-xl border-b-2 border-tan">
      <p className={aestera.className + " text-2xl"}>Kunn Blog</p>
      <div className="grid grid-cols-4 h-full grow ">
        <NavLink href={"/"} >Home</NavLink>
        <NavLink href={"/blog"}>Blog</NavLink>
        <NavLink href={"/photo"} >Photo</NavLink>
        <NavLink href={"/project"} >Project</NavLink>
      </div>
      <div>contact component</div>
    </div>
  );
}

function NavLink(props: { href: string, children: ReactNode }) {
  const { href, children } = props;
  return (
    <Link className="flex h-full items-center justify-center grow tracking-wide" href={href}>
      <motion.div
        className="w-4/5 h-4/5 flex items-center justify-center rounded-3xl"
        whileHover={{ scale: 1.1, backgroundColor: 'var(--tan)', color: 'white' }}
        whileTap={{ scale: 0.95 }}
      >{children}</motion.div></Link>
  )
}

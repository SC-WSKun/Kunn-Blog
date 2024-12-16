import Link from "next/link";
import { aestera } from "@/app/fonts";
export default function Header() {
  return (
    <div className="flex h-28 w-full flex-row items-center justify-around gap-40 bg-beige px-20 font-mono text-xl">
      <p className={aestera.className + " text-2xl"}>Kunn Blog</p>
      <div className="grid grid-cols-4 h-full grow  gap-8">
        <Link className="flex h-full items-center justify-center transition-all hover:bg-tan" href={"/home"}>Home</Link>
        <Link
          className="flex h-full items-center justify-center transition-all hover:bg-tan"
          href={"/blog"}
        >
          Blog
        </Link>
        <Link className="flex h-full items-center justify-center transition-all hover:bg-tan" href={"/photo"}>Photo</Link>
        <Link className="flex h-full items-center justify-center transition-all hover:bg-tan" href={"/project"}>Project</Link>
      </div>
      <div>contact component</div>
    </div>
  );
}

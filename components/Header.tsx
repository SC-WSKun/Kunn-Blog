import Link from "next/link";
export default function Header() {
    return (
        <div className="flex h-28 w-full flex-row items-center justify-between bg-beige">
            <Link href={"/home"}>Home</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/photo"}>Photo</Link>
            <Link href={"/project"}>Project</Link>
        </div>
    );
}

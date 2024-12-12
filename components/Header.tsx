import Link from "next/link"
export default function Header(){
    return (
        <div className="w-full flex flex-row justify-between">
            <Link href={'/home'}>Home</Link>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/photo'}>Photo</Link>
            <Link href={'/project'}>Project</Link>
        </div>
    )
}
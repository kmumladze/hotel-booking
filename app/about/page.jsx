import Link from "next/link";

export default function About() {
    return(
        <>
        <nav>
        <ul>
            <li> <Link href="/">Home</Link></li>
            <li> <Link href="/about">About</Link></li>
            <li> <Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
     <h1>This is about page</h1>
     </>
)
}
import Link from "next/link";

export default function Contact() {
    return(
        <>
        <nav>
        <ul>
            <li> <Link href="/">Home</Link></li>
            <li> <Link href="/about">About</Link></li>
            <li> <Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
        <h1>This is contact page</h1>
        </>
    ) 
}
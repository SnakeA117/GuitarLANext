import Image from "next/image"
import logo from "../public/img/logo.svg"
import Link from "next/link"


export default function Header() {
  return (
    <header>
     <div className="contenedor">
            <Image src={logo.src} width={300} height={40} alt="logo image"/>

            <nav>
                <Link href="/">
                    Home
                </Link>
            </nav>

            <nav>
                <Link href="/us">
                    About Us
                </Link>
            </nav>
     </div>
    </header>
  )
}

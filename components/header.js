import Image from "next/image"
import Link from "next/link"
import styles from "../styles/header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
     <div className={`contenedor ${styles.barra}`}>
            <Image src="/img/logo.svg" width={300} height={40} alt="logo image"/>

            <nav className={styles.navegacion}>
                <Link href="/">
                    Home
                </Link>

                <Link href="/us">
                    About Us
                </Link>

                <Link href="/blog">
                    Blog
                </Link>

                <Link href="/store">
                    Store
                </Link>
          
            </nav>
     </div>
    </header>
  )
}

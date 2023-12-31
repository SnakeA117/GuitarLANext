import Image from "next/image"
import Link from "next/link"
import styles from "../styles/header.module.css"
import { useRouter } from "next/router"

export default function Header() {

    const router = useRouter()
  return (
    <header className={styles.header}>
     <div className={`contenedor ${styles.barra}`}>

                <Link legacyBehavior href="/">
                    <a>
                    <Image src="/img/logo.svg" width={300} height={40} alt="logo image"/>
                    </a>
                </Link>

            <nav className={styles.navegacion}>
                <Link legacyBehavior href="/">
                    <a className={router.pathname === '/' ? styles.active : ''}>
                    Home
                    </a>
                </Link>

                <Link legacyBehavior href="/us">
                <a className={router.pathname === '/us' ? styles.active : ''}>
                    About us
                    </a>
                </Link>

                <Link legacyBehavior href="/store">
                <a className={router.pathname === '/store' ? styles.active : ''}>
                    Store
                    </a>
                </Link>

                <Link legacyBehavior href="/blog">
                <a className={router.pathname === '/blog' ? styles.active : ''}>
                    Blog
                    </a>    
                </Link>


          
            </nav>
     </div>
    </header>
  )
}

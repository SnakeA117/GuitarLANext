import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
                <Link legacyBehavior href="/">
                  Home
                </Link>

                <Link legacyBehavior href="/us">
                  About Us
                </Link>

                <Link legacyBehavior href="/blog">
                  Blog
                </Link>

                <Link legacyBehavior href="/store">
                  Store
                </Link>
          
            </nav>
            <p className={styles.copyright}>
              All rights reserved { new Date().getFullYear()}
            </p>
        </div>
    </footer>
  )
}

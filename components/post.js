import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatDate } from "@/utils/helpers"


export default function Post({post}) { 

  const { Content, Image, Title, url, publishedAt } = post
  return (
    <article>
        <img src={Image.data.attributes.formats.medium.url} width={600} height={400} alt={`Blog image ${Title}`}></img>
        <div className={styles.contenido}>
          <h3>{Title}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.resumen}>{Content}</p>
          <Link legacyBehavior href={`/blog/${url}`}>
            <a className={styles.enlace}>
              Read Post
            </a>
          </Link>
        </div>
    </article>
  )
}

import Layout from "@/components/layout"
import styles from '../../styles/blog.module.css'
import { formatDate } from "@/utils/helpers"


export default function Post({post}) {
    const { Content, Image, Title, publishedAt  } = post[0].attributes
  return (
    <Layout
        title={Title}
    >
          <article className={`${styles.post} ${styles['mt-3']}`}>
              <img src={Image.data.attributes.url} width={1000} height={600} alt={`Blog image ${Title}`}></img>
              <div className={styles.contenido}>
                  <h3>{Title}</h3>
                  <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                  <p className={styles.texto}>{Content}</p>

              </div>
          </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=Image`)
    const { data: post } = await response.json();

    return {
        props: {
          post
        }
    }
}
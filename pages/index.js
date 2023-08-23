import Layout from "@/components/layout"
import styles from '../styles/grid.module.css'
import Guitar from "@/components/guitar"
import Post from "@/components/post"

export default function Home({guitars, posts}) {

  return (
    <>
    <Layout
      title={'Home'}
      description={'Music Blog, guitar sale and more'}
    >
      <main className="contendor">
          <h1 className="heading">Our collection</h1>
          <div className={styles.grid}> 
          {guitars.map(guitar => (
            <Guitar 
              key={guitar.id}
              guitar={guitar.attributes}
            />
          ))}
          </div>
      </main>
      <section className="contenedor">
              <h2 className="heading">Blog</h2>
              <div className={styles.grid}>
              {posts?.map(post => (
                  <Post 
                    key={post.id}
                    post={post.attributes}
                  />
              ))}
            </div>
      </section>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`
  const urlPosts = `${process.env.API_URL}/posts?populate=Image`

  const [ resGuitars, resPosts ] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts)
  ])

  const [{ data: guitars}, {data: posts}] = await Promise.all([
    resGuitars.json(),
    resPosts.json()
  ])

  return {
    props: {
        guitars,
        posts
    }
  }
}
import Layout from "@/components/layout"
import { Guitar } from "@/components/guitar"
import styles from '../styles/grid.module.css'

export function Store({guitars}) {

  return (
    <Layout
         title={'Store'}
         description="Online Store, GuitarLA"
    >
      <main className="contenedor"> 
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
    </Layout>

  )
}




// export async function getStaticProps() {
//     const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
//     const {data: guitars} = await response.json()

//     return {
//       props: {
//         guitars
//       }
//     }
// }

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  const {data: guitars} = await response.json()

  return {
    props: {
      guitars
    }
  }
}


export default Store
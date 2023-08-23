import Layout from "@/components/layout"
import { ListGuitars } from "@/components/list-guitars"


export default function Store({guitars}) {

  console.log(guitars)
  return (
    <Layout
         title={'Store'}
         description="Online Store, GuitarLA"
    >
      <main className="contenedor"> 
          <h1 className="heading">Our collection</h1>
          <ListGuitars 

          />
      </main>
    </Layout>

  )
}

export async function getStaticProps() {
    const response = await fetch(`${process.env.API_URL}/guitars?populate=Image`)
    const {data: guitars} = await response.json()

    return {
      props: {
        guitars
      }
    }
}


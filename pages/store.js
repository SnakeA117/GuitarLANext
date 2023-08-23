import Layout from "@/components/layout"
import { ListGuitars } from "@/components/list-guitars"


const Store = () => {
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

export default Store
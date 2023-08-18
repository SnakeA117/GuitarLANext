import Layout from "@/components/layout"
import Image from "next/image"
import styles from '../styles/us.module.css'


const Nosotros = () => {
  return (
    <Layout
         title={'About us'}
         description="About Us, GuitarLA"
    >
      <main className="contenedor">
        <h2 className="heading">About Us</h2>
        <div className={styles.contenido}>
        <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Image about us"/>
           <div >

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu malesuada nisl. 
              Nulla tempor arcu magna, id bibendum libero ultricies non. Aenean suscipit congue ultrices. 
              Phasellus a diam sollicitudin, efficitur tortor nec, porttitor dui. Duis molestie arcu ac risus 
              mollis cursus. Duis ultrices molestie est ac tempus. 


              </p>

              <p>
              Quisque efficitur, urna nec posuere malesuada, ante augue commodo dolor, 
              quis tristique nunc arcu eu urna. Proin molestie porttitor fringilla. 
              Quisque fermentum ac nunc ut elementum. Vivamus posuere purus vitae 
              dignissim rutrum. Fusce sodales posuere ipsum, ac suscipit orci faucibus in.
               Nam pharetra vehicula volutpat. Nulla malesuada non mauris non pulvinar. 
               Phasellus a placerat nibh. Aenean in leo vitae justo aliquet tincidunt. 


                

              </p>

           </div>
        </div>
      </main>
    </Layout>

  )
}

export default Nosotros
import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'

export const Guitar = ({guitar}) => {

  const { description, image, price, url, name } = guitar
  return (
    <div className={styles.guitarra}>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`Guitar image ${name}`}/>
    
        <div className={styles.contenido}>
          <h3>
            {name}
          </h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>
          <Link  legacyBehavior href={`/guitars/${url}`}>
              <a className={styles.enlace}> 
                See product
              </a>
          </Link>
        </div>

    </div>  
  )
}

export default Guitar
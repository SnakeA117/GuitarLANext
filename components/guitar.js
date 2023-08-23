import Image from "next/image"
import Link from "next/link"


export const Guitar = ({guitar}) => {

  const { description, image, price, url, name } = guitar
  return (
    <div>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`Guitar image ${name}`}/>
    
        <div>
          <h3>
            {name}
          </h3>
          <p>{description}</p>
          <p>${price}</p>
          <Link  legacyBehavior href={`/guitars/${url}`}>
              <a> 
                See product
              </a>
          </Link>
        </div>

    </div>  
  )
}

export default Guitar
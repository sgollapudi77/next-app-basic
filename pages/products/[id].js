import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {
    const data = require("../api/products.json")
    const paths = data.map((_product) => ({
        params: { id: `{product.id}` }
      }))
      // fallback: false means pages that don’t have the
      // correct id will 404.
      return { paths, fallback: true}
}

export async function getStaticProps({params}=null) {
    const data = require("../api/products.json")

    return {
        props:{
            product : data[params.id] || null
        }
    }
}

export default function Product({product}){
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    if(product === null){
        return(
            <h1>OOPS, </h1>
        )
    }
    return(
    <body>
        <h1>Product : {product.id}</h1>
        <p>{product.desc}</p>
        <div className= {styles.link}><Link href = "/products">Back to home</Link></div>
    </body>
    )
}


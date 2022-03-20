//Static generation can be done using next-export -> no problems afaik
import Link from "next/link"
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
    const data = require("../pages/api/products.json")
  
    return {
      props:{
          products:data,
          generatedDate : new Date().toLocaleTimeString() || null
      },
    }
}

export default function Products(props){
  if(props.products === null){
    return(
        <h1>OOPS, </h1>
    )
}
  return(
        <>
            <h1>Products at the time : {props.generatedDate}</h1>
            <ul>
            </ul>
        </>
      )
}
import styles from '../styles/Home.module.css'

export async function getServerSideProps(){
    const data = require("../pages/api/products.json")
    return{
        props:{
            products : data || null,
            generatedDate : new Date().toLocaleTimeString() || null
        },
    }
}

export default function SSR(props){
    console.log(props.products)
    return(
    <div>
      <h1>Server-side</h1>
      <p>Generated on : {props.generatedDate}</p>
      <h1>Products</h1>
            <ul>
                {props.products.map((product)=>
                (<li className={styles.link} key={product.id}>
                  {product.desc}
                </li>))}
            </ul>
    </div>
    );
};
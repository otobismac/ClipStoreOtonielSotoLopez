import { useEffect, useState } from "react"
import Item from "./item/Item"
import productsCall from "./MockFetch";


const ItemList = () => {
    const [clipProducts, setClipProducts] = useState([]);
    const [loadingFlag, setLoadingFlag] = useState(true);

    useEffect(()=>{
        productsCall
        .then(response => setClipProducts(response))
        .catch(error => console.log(error))
        .finally(() => setLoadingFlag(false));
    }, []);
    
    return (
        <>
            {
                loadingFlag ?
                <div>Cargando productos...<div className="loader"></div></div>:
                clipProducts.map((item) => <Item key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} imagePath={item.image}/>)
            }
        </>
    )
}

export default ItemList
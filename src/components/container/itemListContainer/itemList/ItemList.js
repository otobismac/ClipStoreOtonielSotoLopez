import { useEffect, useState } from "react"
import Item from "./item/Item"
import { useParams } from "react-router-dom";
import productsCall from "../../../mocks/ProductsListMock";


const ItemList = () => {
    const [clipProducts, setClipProducts] = useState([]);
    const [loadingFlag, setLoadingFlag] = useState(true);
    const {segment} = useParams();

    useEffect(()=>{
        setLoadingFlag(true);
        productsCall
            .then(response => setClipProducts(response))
            .catch(error => console.log(error))
            .finally(() => setLoadingFlag(false));
    }, [segment]);
    
    return (
        <>
            {
                loadingFlag ?
                <div>Cargando productos...<div className="loader"></div></div>:
                segment ? 
                    clipProducts.filter(item => item.segment === segment).map((item) => <Item key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} imagePath={item.image}/>):
                    clipProducts.map(item => <Item key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} imagePath={item.image}/>)
            }
        </>
    )
}

export default ItemList
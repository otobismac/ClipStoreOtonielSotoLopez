import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import productsCall from "../../../mocks/ProductsListMock";

import '../../../../assets/css/ItemDetail.css';
import { NavLink } from "react-router-dom";


const ItemList = () => {
    const [clipProducts, setClipProducts] = useState([]);
    const [loadingFlag, setLoadingFlag] = useState(true);
    const {productId} = useParams();
    
    useEffect(()=>{
        setLoadingFlag(true);
        productsCall
            .then(response => setClipProducts(response))
            .catch(error => console.log(error))
            .finally(() => setLoadingFlag(false));
    }, []);
    
    let product = clipProducts.find(item => item.id === productId );
    
    return (
        <>
            {   
                loadingFlag ?
                <div className="loader"></div>:
                product ? <div className="product-detail">
                    <div className="product-logo">
                        <img className='item-image' src={`${process.env.PUBLIC_URL}/../${product.image}`} alt={product.name}/>
                    </div>
                    <div className="full-description">
                        <div className="title">{product.name}</div>
                        <div className="description">{product.description}</div>
                        <div className="price">${product.price}</div>
                    </div>
                    <div className="beneficios">
                        <h1>¿Por qué elegir {product.name}?</h1>
                    </div>
                    <div className="beneficios-detail">
                        {product.beneficios.map((beneficio, index) => <div key={index} className="beneficio">{beneficio}</div>)}
                    </div>
                    <div className="add-to-cart">
                        Añadir a carrito
                    </div>
                    <NavLink to="/"><div className="add-to-cart">
                        Regresar al listado
                    </div></NavLink>
                </div>:
                <Navigate to="/" />
            }
        </>
    )
}

export default ItemList
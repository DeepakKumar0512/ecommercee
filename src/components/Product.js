import React from 'react';
import IncDecCounter from './IncDecCounter';
import '../style/Product.css';
import {useStateValue} from './StateProvider';
function Product({ id, title, image, price, special_price, rating }) {
    const [ dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                special_price,
                rating
            }
        })
    }
    const removeFromBasket = ()=>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className="product">
            <div className="container-fluid">            
                <div className="row">
                    <div className="col-sm-2 col-md-1" ><img className="product__image" alt={title} src={image}/></div>
                    <div className="col-sm-8 col-md-9" >
                        <div className="product__info">
                            <b>{title}</b>
                            <p><small className="text-muted">Lorem Ipsum is simply dummy text.</small></p>
                            <div className="product__price">
                                <strong>&#8377;{price}</strong>
                                <span className="special_price">&#8377;{special_price}</span>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 d-flex align-items-center" >
                        <IncDecCounter removeFromBasket={removeFromBasket} addToBasket={addToBasket} /> 
                    </div>
                </div>
            </div>        
        </div>
    )
}
export default Product

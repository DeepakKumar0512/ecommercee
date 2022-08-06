import React from 'react';
import "../style/CheckoutProduct.css"
function CheckoutProduct(props) {

    const basket_data = props.basket;

    const arrayUniqueByKey = [...new Map(basket_data.map(item =>
        [item['id'], item])).values()];    

    var qtyObj= new Object();

    for(var i = 0; i < basket_data.length; i++) {
        if(qtyObj[basket_data[i]['id']] != null) {
            qtyObj[basket_data[i]['id']] += 1;
        } else {
            qtyObj[basket_data[i]['id']] = 1;
        }
    }

    return (

        arrayUniqueByKey.map(product => (
            <tr key={product.id}>
                <td className="col-sm-8">{product.title}</td>
                <td className="col-sm-2">
                <div className="btn-group" role="group" aria-label="Large button group"> 
                    <div className="col-xl-1">
                        <div className="input-group">
                            <span className="qty_counter">{qtyObj[product.id]}</span>
                        </div>
                    </div>
                </div>
                </td>
                <td className="col-sm-2">{qtyObj[product.id] * product.price}</td>
            </tr>   
        ))
    )
}

export default CheckoutProduct

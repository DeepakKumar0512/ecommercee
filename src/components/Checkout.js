import React from 'react'
import { useStateValue } from './StateProvider';
import '../style/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
       
        <div className="checkout">
            <div className="checkout__left">
                
                {
                    basket ?.length === 0 ? (
                        <div>
                            <h2> Your Shopping basket is empty</h2>
                            <p>
                                You have no items in your basket. To
                                buy one or more items, click
                                "Add to basket" next to the item.
                            </p>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Items</th>
                                        <th>Qty</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>                                
                                    <CheckoutProduct basket={basket}/>
                                </tbody>
                            </table>   
                        </div>
                        )}
            </div>
        </div>
    )
}

export default Checkout

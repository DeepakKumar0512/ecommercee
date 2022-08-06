import React,{useRef} from 'react'
import { Link } from 'react-router-dom';
import Checkout from './Checkout'
import '../style/Payment.css';
import { useStateValue } from './StateProvider';

const Payment = () => {
  const [{basket},dispatch] = useStateValue();
  let ref = useRef(null)
    const paydone= ()=>{
      alert("Order Confirmed");
      dispatch({
        type : "CLEAR_CART"
      })
      ref.current.click()
    }
    const clicked =()=>{
      ref.current.click()
    }
    return (
      <div>
        <div className='bg-white'><Link ref={ref} to="/">
          <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </Link>
         </div>
          <Checkout/>
          {basket.length>0? <p className='bg-white m-0'><span className='bg-green' onClick={paydone}>Select Payment</span></p>: <p className='bg-white m-0'><span className='bg-green' onClick={clicked}>Click to Add Product</span></p>}
       
      </div>
    )
  }
  
  export default Payment
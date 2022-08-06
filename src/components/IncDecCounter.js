import {useState} from "react";
import '../style/IncDecCounter.css';

function IncDecCounter(props){
    let [num, setNum]= useState(0);
    
    let incNum = () => {
        setNum(Number(num)+1);
        props.addToBasket();
    };
    
    let decNum = () => {
        if(num>0)
        {
            setNum(num - 1);
        }
        props.removeFromBasket();
    }

    return(
        <>
        {num === 0 
        ? 
            <button className="btn btn btn-success add_to_cart_btn" type="button" onClick={incNum}>Add</button>
        :
            <div className="btn-group" role="group" aria-label="Large button group"> 
                <div className="col-xl-1">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn" type="button" onClick={decNum}>-</button>
                        </div>
                        <span className="qty_counter">{num}</span>
                        <div className="input-group-prepend">
                            <button className="btn" type="button" onClick={incNum}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}
export default IncDecCounter;
import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
const {getTotalcartAmount}= useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
<p className="title">Delivery Information</p>
<div className="multi-fields">
    <input type="text" placeholder='First name'/>
    <input type="text" placeholder='Last name'/>
</div>
<input type="email" placeholder='Email Address'/>
<input type="text" placeholder='street'/>
<div className="multi-fields">
    <input type="text" placeholder='City'/>
    <input type="text" placeholder='State'/>
</div>
<div className="multi-fields">
    <input type="text" placeholder='Zip Code'/>
    <input type="text" placeholder='Country'/>
</div>
<input type="text" placeholder='Phone'/>

      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
<p>Subtotal</p>
<p>{getTotalcartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
<p>Delivery Fee</p>
<p>{getTotalcartAmount()===0?0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
<p><b>Total</b></p>
<p>{getTotalcartAmount()===0?0:getTotalcartAmount()+2}</p>
                </div>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

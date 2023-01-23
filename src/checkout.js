import { useDispatch, useSelector} from 'react-redux';

import { incrementQuantity } from './reducers/cartreducer';
import { decrementQuantity } from './reducers/cartreducer';
import { remove } from './reducers/cartreducer';
import { Container, Table,Button,Row,Col } from 'react-bootstrap';
import {   useNavigate,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gettotal } from './reducers/cartreducer';

function Checkout() {

    const list = useSelector((state) => state.cart.product);
    const list2 = useSelector((state) => state.cart);
    const discount = 10;
    const Total = list2.total - discount/100 * list2.total;
  

const dispatch = useDispatch();
const Navigate = useNavigate();

const removeItem = (item) =>{
  dispatch(remove(item))
}
const incrementItem = (item) =>{
  dispatch(incrementQuantity(item))
}

const decrementItem= (item) =>{
  dispatch(decrementQuantity(item))
}

useEffect(() => {
  dispatch(gettotal());
}, [list])

const [upi,setUpi] = useState(false);
const [wallet,setWallet] = useState(false);
const [card,setCard] = useState(false);
const [cod,setCod] = useState(false);

function upic() {
  setUpi(true)
  setWallet(false)
  setCard(false)
  setCod(false)
}

function walletc() {
  setUpi(false)
  setWallet(true)
  setCard(false)
  setCod(false)
}



function cardc() {
  setUpi(false)
  setWallet(false)
  setCard(true)
  setCod(false)
}

function codc() {
  setUpi(false)
  setWallet(false)
  setCard(false)
  setCod(true)
}

const now = new Date().getFullYear().toString().slice(-2);
const year = Number(now)





    return (
    <>
    {list.length === 0? (
    <>
<h1>no products</h1>
    </>):(
    <>
 <Container className="tablecont">
      <Row>
        <Col>
        <Row className="mt-2" >
         <Col className="corbr" lg='12'>
         <Row  className="bg-dark text-white p-3">LOGIN OR SIGNUP</Row>
         <Row>
             <Col lg='6' className="pt-3 ps-3">
            <input type='email' placeholder="Enter email" className="w-75 cli  pt-2 pb-2"></input>
            <p className="cotap">By clicking continue,you agree to the <a href="#">terms and policy</a></p>
            <Button className="bg-dark w-100 chebtn">CONTINUE</Button>
         </Col>
         <Col lg='6' className="p-3">
            <p>Advantages of our login</p>
                <p className="coads">Easily Track Orders, Hassle Free Returns</p>
                <p className="coads">Get Relevant Alerts and Recommendations </p>
                <p className="coads">Wishlists,Reviews,Ratings And More.</p>
         </Col>
         </Row>
         </Col>
        </Row>
        <Row className="mt-2">
        <Col className="corbr" lg='12'>
        <Row  className="bg-dark text-white p-3">DELIVERY AND ADDRESS</Row> 
        <Row >
           <Col className="ps-3 pt-3 pb-3">Name,Number,DoorNo,Street,City,Pincode</Col> 
           <Col className="text-end ps-3 pt-3 pb-3"><Button className="cocb">CHANGE</Button></Col>
        </Row>
        </Col>
        </Row>

        <Row className="mt-2">
        <Col className="corbr" lg='12'>
        <Row  className="bg-dark text-white p-3">ORDER SUMMARY</Row> 
           <Row>
            <Col className='scrtable'>
             <Table className='mt-4 '>
             <thead>
       <tr className='text-center'>
         <th>Product</th>
         <th>Quantity</th>
         <th>Price</th>
         <th>Total</th>
         <th></th>
       </tr>
     </thead>
     <tbody   >
      {list.map((item) => (  <tr key={item.id}>
         <td  className='m-0 p-0 td'><img src={item.image} className='cartim' alt='itemimage'/><br/><h5 className='mt-3 '>{item.name}</h5></td>
         <td className='text-center cartval  '><Button onClick={() => incrementItem(item)} className='btn-dark bttn'>+</Button ><span className='m-2' >{item.quantity}</span><Button onClick={() => decrementItem(item)} className='btn-dark bttn2'>-</Button></td>
         <td className='text-center cartval'>${item.price}</td>
         <td className='text-center cartval'>${item.price*item.quantity}</td>
         <td className='text-center cartval'><Button className='removebtn'  onClick={() => removeItem(item)}>X</Button></td>
       </tr>))}
     </tbody>
    </Table>
    </Col>
    </Row>
        </Col>
        </Row>

        <Row className="mt-2">
        <Col className="corbr" lg='12'>
        <Row  className="bg-dark text-white p-3">PAYMENT</Row> 
        <Row >
          <Col className='p-3' lg='12'><input type='radio' name='payment' onClick={upic} /><label className='ms-1'>UPI</label>
          {upi && <Container fluid className='mt-2'>
            <Row>
              <Col lg={5} md={5} sm={6} xs={12} className='mb-2'>
                <input type={'text'} placeholder={'Enter UPI ID'} className='upiinput p-2'></input>
              </Col>
              <Col lg={5} md={5}  sm={6} xs={12} className='text-start'>
              <Button className='p-2 upibutton'>PAY ${Total}</Button>
              </Col>
            </Row>
          
            </Container>}
          </Col>
          <Col className='p-3' lg='12'><input type='radio' name='payment' onClick={walletc}  /><label className='ms-1'>Wallet</label>
          {wallet && <Container fluid className='mt-2'>
            <p className='text-success'>$cashback offer applicable on paytm</p>
            <Row>
              <Col lg={5} md={5} sm={6} xs={12} className='mb-2'>
                <input type={'text'} placeholder={'Enter Paytm Linked Number'} className='upiinput p-2'></input>
              </Col>
              <Col lg={5} md={5} sm={6} xs={12} className='text-start'>
              <Button className='p-2 upibutton'>CONTINUE</Button>
              </Col>
            </Row>
          
            </Container>}
          </Col>
          <Col className='p-3' lg='12'><input type='radio' name='payment' onClick={cardc} /><label className='ms-1'>Credit / Debit / ATM Card</label>
           {card && <div>
            <input type={'number'} placeholder='Enter Card Number'  className='cdn mt-3 p-2'></input><br/>
            <div  className='mt-3 p-2 validthru '>
              valid thru
              <select name='month'  className='d-inline ms-2' >
                <option> 1</option>
                <option> 2</option>
                <option> 3</option>
                <option> 4</option>
                <option> 5</option>
                <option> 6</option>
                <option> 7</option>
                <option> 8</option>
                <option> 9</option>
                <option> 10</option>
                <option> 11</option>
                <option> 12</option>
              </select>
            <select name='year' className='d-inline w-25 ms-2' >
               <option> YY</option>
               <option> {year + 1}</option>
               <option> {year + 2}</option>
               <option> {year + 3}</option>
              <option> {year + 4}</option>
              <option>{year + 5}</option>
              <option> {year + 6}</option>
              <option> {year + 7}</option>
              <option> {year + 8}</option>
              <option> {year + 9}</option>
              <option> {year + 10}</option>
              <option> {year + 11}</option>
          </select>
            </div>
            <input type={'number'} placeholder='CVV'  className=' mt-3 ms-2 p-2 d-inline cvv'></input><br/>
            <Button className='cardbtn mt-3'>PAY ${Total}</Button>
            </div>}
          </Col>
         
          <Col className='p-3' lg='12'><input type='radio' name='payment' onClick={codc} /><label className='ms-1'>Cash On Delivery</label>
          {cod && <div></div>}
          </Col>
        </Row>
        </Col>
        </Row>
        </Col>
        <Col lg='4' >
          <div className='pt-3 ps-4 pb-3 paydet'>
          <Row className='mt-3 pe-3'>
            <h6>PRICE DETAILS</h6>
            <Col className='text-secondary mt-3'>
            
            <p>Price({list.length} items):</p>
            <p>Shipping:</p>
            <p className='text-dark fw-bold'>Amount payable:</p>
            </Col>
            <Col className='text-end mt-3'>
              <p className='text-dark'>${list2.total}</p>
              <p className='text-success'>Free</p>
              <p className='text-dark  fw-bold'>${Total}</p>
              </Col>
          </Row>
          </div>
          </Col>
        </Row>
    </Container>

    </>) }
   
    </>  );
}

export default Checkout;
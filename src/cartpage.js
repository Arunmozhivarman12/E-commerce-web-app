import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { incrementQuantity } from './reducers/cartreducer';
import { decrementQuantity } from './reducers/cartreducer';
import { remove } from './reducers/cartreducer';
import { Container, Table,Button,Row,Col } from 'react-bootstrap';
import { Link,  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { gettotal } from './reducers/cartreducer';


function Cart() {
    const list = useSelector((state) => state.cart.product);
    const list2 = useSelector((state) => state.cart);
    const discount = 10;
    const Total = list2.total - discount/100 * list2.total ;
   

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


    return (
      <div className='cpage'>
        {list.length === 0 ? (
       <Container className='cartnum1 text-center'>
            <h5 className='mt-5'>Your cart is empty</h5>
            <Button className='btn-dark mt-3' onClick={() =>Navigate('/')}>Start Shopping</Button>
          </Container>
        ):(
          <div>
           <Container className='cartnum mt-3'>
           <Row>
            <Col lg="8" md='6' sm='12' className='scrtable'>
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
         <td className='text-center cartval'><Button className='removebtn' onClick={() => removeItem(item)}>X</Button></td>
       </tr>))}
     
     </tbody>
    

    </Table>
    <Button className='cspb' onClick={() =>Navigate('/')}>CONTINUE SHOPPING</Button>
            </Col>
          <Col className='pt-5 ps-4  chedet  'lg='4' md='6' sm='8'>
          <span className='text-secondary'>Enter Coupon Code:</span><br></br>
          <input placeholder='Coupon Code' className='mt-1 p-1 probin'></input>
          <Button className=' ms-2 probtn btn-dark'>APPLY</Button><br/>
          <Row className='mt-3 pe-3'>
            <Col className='text-secondary'>
            <p>Sub Total:</p>
            <p>Discount:</p>
            <p>Shipping:</p>
            <p>Total:</p>
            </Col>
            <Col className='text-end'>
              <p className='text-dark'>${list2.total}</p>
              <p className='text-dark'>-{discount}%</p>
              <p className='text-success'>Free</p>
              <p className='text-dark '>${Total}</p>
              </Col>
              <Button className='btn-dark chebtn'><Link to='/checkout'>Check Out</Link></Button>
          </Row>
          </Col>
        </Row>
            
   
    </Container> 
   
    </div>
        )}
       
     


   </div>

      );
}

export default Cart;
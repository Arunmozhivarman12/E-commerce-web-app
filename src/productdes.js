import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';

import { useSelector,useDispatch } from 'react-redux';
import {useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { addtocart } from './reducers/cartreducer';






function Productdes() {

    const Pros = useSelector(state => state.Pros)
    const {id} = useParams();
   const pid = id; 
   
const dispatch = useDispatch()


   
const product = Pros.find(product => product.id === parseInt (pid));

const image = "../" + product.image;
   const additem = () =>{
    dispatch(addtocart(product))
} 

    return ( 
        <>
 <Container className='pdcn mt-4'>
    <Row>
    <Col lg="4" md='4' sm='12' >
        <div  className="pdbi" style={{backgroundImage:`url(${image})`}} ></div>
        
    </Col>
 
    <Col lg="8" md="8" sm='12'>
        <div className='mt-4 ms-2'> 

        <h4 className='proname'> {product.name}</h4>
        <h2>${product.price}</h2>
        <h4 className='ooo'> Available offers</h4>

        <ul className='mt-4'>
        <li>Bank Offer5% Cashback on  Axis Bank CardT&C.</li>
       <li> Buy this Product and Get Extra 10% Off on Two-WheelersT&C.</li>
       <li>Partner OfferGet GST Invoice Available & Save up to 28% for Business purchases. </li> 
       <li>Partner OfferBuy this product and get upto 30% off on  Fashion products</li> 
        <li className='mt-2 text-primary' type='button'>View 3 more offers</li>
        </ul>
        
    <div className='mt-4'>
      
      <Button className='cbu m-2' onClick={additem}>ADD TO CART</Button>
     
      <Button className='bb m-2 '>BUY NOW</Button>
     
      
       
        </div> 
        </div>
        </Col> 
        </Row>
        <Row className='mt-3'>
        <h5 className='text-secondary'>Specifications:</h5><br></br>
        <p className='spec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Row>
        </Container>
        </>
     );
}

export default Productdes;
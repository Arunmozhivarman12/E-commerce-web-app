import React from "react";
import {Container,Navbar,NavDropdown,Nav} from "react-bootstrap"
import logo from './logo.png'
import { useState } from "react";
import search from "./search.png"
import heart from "./heart.png";
import cart from "./cart.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Header(){
const navigate = useNavigate();

const list = useSelector((state) => state.cart.product);

  const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
    return(
        <div>
<Container fluid className=" black1">
<Container className=" text-white ps-2 pe-2 pt-2 pb-2  black" >
    <span>Free shipping, 30-day return or refund guarantee.</span> 
    <span style={{float :'right'}}>
<ul className="text-end fs-6">
    <li type='button'>SIGN IN</li>
    <li type='button'>FAQs</li>
    <li type='button'>USD</li>
</ul>
   </span>
</Container>
</Container>

    <Container  className="nb ps-2 pe-2">     
   
<Navbar  className="w-100 " expand="lg" >
        <Navbar.Brand className="me-0" ><img src={logo} alt='logo'/></Navbar.Brand>
         <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
         <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby='offcanvasNavbarLabel-expand-lg'
              placement="start"
              className='offn'
            >
         <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                
<ul className="ofs">
    <li type='button'>SIGN IN</li>
    <li type='button'>FAQs</li>
    <li type='button'>USD</li>
</ul>

<p className="ofsp">Free shipping, 30-day return or refund guarantee.</p>
   
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
          <Nav className="m-auto ">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Shop</Nav.Link>
            <NavDropdown className="dd" title="Pages" show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}  id='offcanvasNavbarDropdown-expand-lg'>
              <NavDropdown.Item className="dl" href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item className="dl" href="#action/3.2">
                Shopping details
              </NavDropdown.Item>
              <NavDropdown.Item className="dl" type='button' onClick={()=>navigate('cart')}>Shopping Cart</NavDropdown.Item>
              <NavDropdown.Item className="dl" href="#action/3.4">Check Out</NavDropdown.Item>
              <NavDropdown.Item className="dl" href="#action/3.5">Blog Details</NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link >Blog</Nav.Link>
            <Nav.Link >Contacts</Nav.Link>            
    </Nav>
      <Nav className="sin">
       
           <img src={search}  type= 'button' alt= 'search' className="si"/>
           <img src={heart}  type= 'button' alt='heart' className="si"/>
           <Link to={'cart'} className='m-0 p-0 '>
            <div className="ci">
            <img src={cart} type= 'button' alt='cart' className="si"/> 
            {list.length === 0 ? (<></>):(<div className="notify">{list.length}</div>)}
            </div>
            </Link>
         
           
          
            </Nav>
    </Offcanvas.Body>   
</Navbar.Offcanvas>
    </Navbar>
      
    </Container>
 
    </div>
    );
};

export default Header;
  



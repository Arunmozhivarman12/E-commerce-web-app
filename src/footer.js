import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import logo from './footer-logo.png'
import payment from './payment.png'


function Footer() {
    return ( 
        <div className="footercont pt-4 mt-5">
            <Container className="cartnum2 pt-5 pb-5">
                <Row>
                    <Col lg={3} md={6} sm={6} xs={12}> 
                    <img src={logo} alt='logo'></img> 
                    <p className="mt-4 tc1">The customer is at the heart of our unique business model, which includes design.</p>
                    <img src={payment} alt="payment" className="mt-3"></img>
                    </Col>
                    <Col lg={{span:2,offset:1}} md={6} sm={6} xs={12}>
                       <h6 className="text-white ws">SHOPPING</h6>
                       <p className="mt-4 tc">Clothing Store</p>
                       <p className="tc">Trending Shoes</p>
                       <p className="tc">Accessories</p>
                       <p className="tc">Sale</p>
                    </Col>
                    <Col lg={2} md={6} sm={6} xs={12}>
                       <h6 className="text-white ws">SHOPPING</h6>
                       <p className="mt-4 tc">Contact Us</p>
                       <p className="tc">Payment Methods</p>
                       <p className="tc">Delivary</p>
                       <p className="tc">Return & Exchanges</p>
                    </Col>
                    <Col lg={{span:3,offset:1}} md={6} sm={6} xs={12}>
                       <h6 className="text-white ws">NEWLETTER</h6>
                       <p className="mt-4 tc1">Be the first to know about new arrivals, look books, sales & promos!</p>
                       <input type={'email'} placeholder='Your email' className="mt-3 pb-3 ki"></input>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-4 text-center">
                <span className="tc">Copyright © 20232020 All rights reserved </span>
            </Container>
        
        </div>
     );
}

export default Footer;
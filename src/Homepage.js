import React, { useEffect,useState } from "react";
import { Container, Row,Col, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './banner-1.jpg';
import banner2 from './banner-2.jpg';
import banner3 from './banner-3.jpg';


import offerim from "./product-sale.png";
import search from "./search.png";
import heart from "./heart.png";
import compare from "./compare.png";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import insta1 from "./instagram-1.jpg"
import insta2 from "./instagram-2.jpg"
import insta3 from "./instagram-3.jpg"
import insta4 from "./instagram-4.jpg"
import insta5 from "./instagram-5.jpg"
import insta6 from "./instagram-6.jpg"



function Home(){

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("feb 28,2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }); 

  const pros = useSelector(state => state.Pros)
  
  
    return(
        <>
        <Container fluid className="pb-5">
        <Carousel fade >
        <Carousel.Item className="car1">
        <Container className="cartnum">
          <Row>
            <Col lg='5' className="cc">
             <p className="cp">SUMMER COLLECTION </p>
             <h1 className="ch">Fall - Winter Collections 2030</h1>
             <p className="cl">A specialist label creating luxury essentials.Ethically crafted with an unwavering commitment to exceptional quality. </p>
             <Button className="cb">SHOP NOW</Button>
            </Col>
          </Row>
       
        </Container>
        </Carousel.Item>
        <Carousel.Item className="car2">
        <Container className="cartnum">
          <Row>
            <Col lg='5' className="cc">
             <p className="cp">SUMMER COLLECTION </p>
             <h1 className="ch">Fall - Winter Collections 2030</h1>
             <p className="cl">A specialist label creating luxury essentials.Ethically crafted with an unwavering commitment to exceptional quality. </p>
             <Button className="cb">SHOP NOW</Button>
            </Col>
          </Row>
       
        </Container>
        </Carousel.Item>
      </Carousel>
      </Container>
      <Container className="sb3 mt-5">
        <Row>
          <Col lg={{span:7,offset:4}} >
            <div className="bn">
              <div >
<img src={banner1} className="ms-auto d-block bni"></img>
              </div>
              <div className="bnt">
<h1 >Clothing Collections 2030</h1>
<p type="button" className="bnb">SHOP NOW</p>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="bn2" >
              <div >
<img src={banner2} className="bni3" ></img>
              </div>
              <div >
<h1>Accessories</h1>
<p type="button" className="bnb">SHOP NOW</p>
              </div>
            </div>
          </Col>
           <Col lg="7" className="cbn3">
            <div className="bn3">
              <div >
<img src={banner3} className="ms-auto d-block bni2"></img>
              </div>
              <div className="bnt3">
<h1 >Shoes Spring 2030</h1>
<p type="button" className="bnb">SHOP NOW</p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
      <Container className="mt-5 productbn">
         <Row className="prr text-center m-auto">
<Col><h4>Best Sellers</h4> </Col>
<Col><h4>New Arrivals </h4></Col>
<Col><h4>Hot Sales</h4> </Col>
         </Row>


<Row className=" m-auto pt-5">
{pros.map(Pro =>(

  <Col key={Pro.id} lg="3" md='6' sm='6' className="cont" >
    
<div >
  <div className="prim">
  <Link to={`pd/${Pro.id}`}><img src={Pro.image} className='proimg'></img></Link>
    <ul className="oul"> 
     <li className="oli"><img src={heart}  className='oim' type= 'button' alt='heart' /></li>
     <li className="oli"><img src={compare}  className='oim' type= 'button' alt='compare'  /></li> 
     <li className="oli "> <img src={search} className='oim'  type= 'button' alt= 'search' /></li>
 </ul>
   
</div>
<div >

 <p className="prot">{Pro.name}</p>
 
 <p></p>
 <Row>
  <Col>
   <p className="prot1">${Pro.price}</p>
  </Col>
  <Col className="text-end">
  <label type='button' className="color"></label>
  <label type='button'  className="color2"></label>
  <label type='button'  className="color3"></label>
  </Col>
   </Row>

</div>
</div>
</Col>

))}
</Row>

 </Container>

 <Container fluid className="offer pt-5 mt-5  mb-5" >
  <Row className="offerrow mt-5 mb-5">
    <Col lg='3'>
    <div className="mt-5 csa ">
      <h2 className="mb-4 text-secondary">Clothings Hot</h2>
      <h2 className="mb-4 ">Shoe Collection</h2>
      <h2 className="mb-4 text-secondary">Accessories</h2>
    </div>
    </Col>
    <Col lg='4' className="offer2">
      <div ><img src={offerim} className='ms-auto me-auto d-block offerim'></img></div>
       <div className="sale text-center" > sale of <span className="fs-4">$2.99</span></div>
    </Col>
 
    <Col lg={{span:4,offset:1}}>
      <div className="mt-5 ">
        <h6 className="offerh">DEAL OF THE WEEK</h6>
        <h2 className="mt-3 offerh2">Multi-Pocket Chest Bag Black</h2>
        <h2  className="timer mt-4"> 
              <span>{timerDays}d:</span>
              <span>{timerHours}h:</span>
              <span>{timerMinutes}m:</span>
              <span>{timerSeconds}s</span>
        </h2>
     
        <Button className="tb mt-5 d-block">SHOP NOW</Button>
      </div>
    </Col>
  </Row>
 </Container>
 <Container className="instacon">
  <Row>
<Col lg='8'>
<Row>
  <Col className="insta" lg='4'md='4' sm='6' xs='6' style={{backgroundImage:`Url(${insta1})`}}></Col>
  <Col className="insta" lg='4' md='4' sm='6' xs='6' style={{backgroundImage:`Url(${insta2})`}}></Col>
  <Col className="insta" lg='4' md='4' sm='6' xs='6' style={{backgroundImage:`Url(${insta3})`}}></Col>
    <Col className="insta" lg='4' md='4' sm='6' xs='6' style={{backgroundImage:`Url(${insta4})`}}></Col>
    <Col className="insta"lg='4' md='4' sm='6' xs='6' style={{backgroundImage:`Url(${insta5})`}}></Col>
    <Col className="insta" lg='4'md='4' sm='6' xs='6' style={{backgroundImage:`Url(${insta6})`}}></Col>
  </Row>
</Col>
<Col className="instacol">
<div className="instadiv">
<h1 className=" ">Instagram</h1>
<p className="mt-4  instap">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<h2 className="mt-5  text-danger">#Male_Fashion</h2>
</div>
</Col>
  </Row>
 </Container>
     
      </>
    )
    
}

export default Home;
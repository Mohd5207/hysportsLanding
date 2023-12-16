import React, { useEffect, useState } from "react";

//Import Components
import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"
import CardsMini from "./HeroSection/cards-mini"
import AboutUs from "./AboutUs/about-us"
import Features from "./Features/features"
import RoadMap from "./RoadMap/road-map"
import OurTeam from "./Team/our-team"
import Blog from "./Blog/blog"
import FAQs from "./Faqs/FAQs"
import Footer from "./Footer/footer"
import SlideDark from "pages/Home/slideDark";
import ProductCard from "pages/Home/ProductCard";
import FWGames from "pages/Dashboard/FWGames";
import { Col, Row } from "reactstrap";
import ConnectCard from "pages/Dashboard/ConnectCard";
import Navbar1 from '../../../components/HorizontalLayout/Navbar'
import { CalendarContainer } from "react-datepicker";
import Calender from './Calender'
const CryptoIcoLanding = () => {
  
  //meta title
  document.title="ICO Landing | Skote - React Admin & Dashboard Template";

  const [imglight, setimglight] = useState(true);
  const [navClass, setnavClass] = useState("");


  const job =[
    {title :'Post Job'},
    {title :'Find Job'},
  ]
  
  const consult =[
   {title :'Book Coonsultation'},
   {title :' Hire Professionals'},
 ]
  const community =[
   {title :'Community'},
   
 ]
  const gym =[
   {title :`<h4>Mnage Your Gym </h4>`},
   
 ]
  const Diet =[
   {title :`<h4>GET CUSTOMISE DIET PLAN </h4>`},
   
 ]
  const Exercide =[
   {title :`<h4>GET CUSTOMISE EXERCISE </h4>`},
   
 ]
  const fitness =[
   {title :<h4>CALCULATE FITNESS & HEALTH </h4>},
   
 ]


 const tab1 = [
  { id:'5',
    index :'Inter',
    data :[
     {id :1, title :'Inter School' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :2, title :'Inter Gym' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :3, title :'Inter College' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :4, title :'Inter Corporate' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :5, title :'Inter Services' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :6, title :'Inter Open For All' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' }
    ]
  },
  {  
   id :'6',
    index :'District',
    data :[
     {id :1, title :'Inter School' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :2, title :'Inter Gym' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :3, title :'Inter College' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :4, title :'Inter Corporate' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :5, title :'Inter Services' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
     {id :6, title :'Inter Open For All' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' }
    ]
  },
]

  // Use ComponentDidMount
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true)
  },[])

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop
    if (scrollup > 80) {
      setimglight(false)
      setnavClass("nav-sticky")
    } else {
      setimglight(true)
      setnavClass("")
    }
  }

  return (
    <React.Fragment>
      <div style={{
        background:'#260202'
      }}>
      {/* import navbar */}
      {/* <Navbar navClass={navClass} /> */}
      {/* <Navbar navClass={navClass} imglight={imglight} /> */}
      <Navbar navClass={navClass} imglight={imglight} />
      {/* <Navbar1 /> */}
      {/* Hero section */}
      
      <div style={{marginTop :'90px'}} >

        <SlideDark />
      </div>
      

        <ProductCard />
        <div className="mx-3">

        <FWGames  heading ='FW COMMUNITY' tab={tab1}   className='mx-3'/>
        </div>
        <div className="mx-3">

        <FWGames  heading ='FW Activity'   className='mx-3'/>
        </div>
        <Row className="text-center mx-auto">
          <Col xl={4}><ConnectCard tab={job} color ='bg-black text-white' ></ConnectCard></Col>
          <Col xl={4}><ConnectCard tab={consult} color ='bg-black text-white' ></ConnectCard></Col>
          <Col xl={4}><ConnectCard tab={community} color ='bg-black text-white' ></ConnectCard></Col>
        </Row>
       
      {/* <Section /> */}

      {/* mini cards */}
      <CardsMini />

      {/* aboutus */}
      {/* <AboutUs /> */}

      {/* features */}
      {/* <Features /> */}

      {/* roadmap */}
      {/* <RoadMap /> */}

      {/* our team */}
      {/* <OurTeam /> */}

      {/* blog */}
      <Blog />

      {/* faqs */}
      {/* <FAQs /> */}
         <Row>
          <Col lg={4}>
            {/* <Calender/> */}k
          </Col>
          <Col lg={8}>
          <FWGames   heading='FW Blogs'  />
          </Col>

         </Row>
      {/* footer */}
      <Footer />
      </div>
    </React.Fragment>
  )
}

export default CryptoIcoLanding

import PropTypes from 'prop-types';
import React, { useState } from "react";
import {
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Row,
  Col,
  Card,
} from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./scrollSpy";

//Import Images
import logodark from "../../../../assets/images/hysportsdark.svg";
import logolight from "../../../../assets/images/hysportx.jpg";
import FittestWarrior from "../../../../assets/images/linkicon/FittestWarrior.svg";
import HireProfessional from "../../../../assets/images/linkicon/HireProfessional.svg";
import Leaderboard from "../../../../assets/images/linkicon/Leaderboard.svg";
import Activities from "../../../../assets/images/linkicon/Activities.svg";
import Community from "../../../../assets/images/linkicon/Community.svg";
import Competition from "../../../../assets/images/linkicon/Competition.svg";
import Connection from "../../../../assets/images/linkicon/Connection.svg";
// import Connection1 from "../../../../assets/images/linkicon/Connection1.svg";
import Consultancy from "../../../../assets/images/linkicon/Consultancy.svg";
import CoursesCertificate from "../../../../assets/images/linkicon/Courses-Certificate.svg";
import Diets from "../../../../assets/images/linkicon/Diets.svg";
import Exercises from "../../../../assets/images/linkicon/Exercises.svg";
import FitnessCalculator from "../../../../assets/images/linkicon/Fitness-Calculator.svg";
import FitnessCliniq from "../../../../assets/images/linkicon/Fitness-Cliniq.svg";
import GPRRating from "../../../../assets/images/linkicon/GPRRating.svg";
import HSXStudio from "../../../../assets/images/linkicon/HSXStudio.svg";
import Jobs from "../../../../assets/images/linkicon/Jobs.svg";
import Live from "../../../../assets/images/linkicon/Live.svg";
import Shop from "../../../../assets/images/linkicon/Shop.svg";
import SportsEvent from "../../../../assets/images/linkicon/SportsEvent.svg";
import Training from "../../../../assets/images/linkicon/Training.svg";
import Vendors from "../../../../assets/images/linkicon/Vendors.svg";
import Header from 'components/VerticalLayout/Header';
import classname from "classnames";
import { Label } from 'recharts';

const navItems = [
  { id: 1, idnm: "home", navheading: "Home" },
  { id: 2, idnm: "about", navheading: "About" },
  { id: 3, idnm: "features", navheading: "Features" },
  { id: 3, idnm: "roadmap", navheading: "Roadmap" },
  { id: 4, idnm: "team", navheading: "Team" },
  { id: 5, idnm: "news", navheading: "News" },
  { id: 6, idnm: "faqs", navheading: "FAQs" },
];

const Navbar_Page = props => {
  const [dashboard, setdashboard] = useState(false);
  const [dashboard1, setdashboard1] = useState(false);
  const [ui, setui] = useState(false);
  const [isOpenMenu, setisOpenMenu] = useState(true);
         
  const services = [
    {id:1, src: Connection , alt:'Connection'},
   
    {id:2, src: Competition , alt:'Competition'},
    {id:3, src: Community , alt:'Community'},
    {id:4, src: HSXStudio , alt:'HSXStudio'},
    {id:5, src: Jobs , alt:'Jobs'},
    {id:6, src: SportsEvent , alt:'SportsEvent'},
    {id:7, src: Exercises , alt:'Exercises'},
    {id:8, src: FitnessCalculator , alt:'Calculator'},
    {id:9, src: Diets , alt:'Diets'},
    {id:10, src: Consultancy , alt:'Consultancy'},
    {id:11, src: HireProfessional , alt:'Professional'},
    {id:12, src: Activities , alt:'Activities'},
    {id:13, src: Training , alt:'Training'},
    {id:14, src: CoursesCertificate , alt:'Certificate'},
    {id:15, src: Live , alt:'Live'},
    {id:16, src: Leaderboard , alt:'Leaderboard'},
    {id:17, src: GPRRating , alt:'GPRRating'},
    {id:18, src: Shop , alt:'Marketplace'},
    {id:19, src: Vendors , alt:'Vendors'},
  ]

  const LinkIco= [
   
  ]

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };


  //Store all NavigationbaFr Id into TargetID variable(Used for Scrollspy)
  let TargetId = navItems.map(item => {
    return item.idnm;
  });

  return (
    <React.Fragment>
       
      <nav
      style={{
        background :'#260202',
        backdropFilter:'blur(blur(5px))'
      }}
      className={"navbar navbar-expand-lg navigation fixed-top sticky " + props.navClass}
      >
        <div>


                {/* <Container> */}
          <Link className="navbar-logo" to="/">
            {props.imglight !== true ? (
              <img
              src={logodark}
              alt=""
              height="80"
              className="logo logo-dark"
              />
            ) : (
              
              <img
              src={logodark}
              
                alt=""
                height="80"
                className="logo logo-light"
              />
            )}
          </Link>
            </div>
          <div style={{height:''}} className='navigation text-white'>
            <div style={{listStyle:'none'}} className=' d-flex mt-1 pt-1 pb-0 border-none px-5  justify-content-end gap-5 place-item-center navigation '>
          {/* <NavbarToggler
            className="p-0"
            onClick={() => {
              setisOpenMenu();
            }}
          >
            <i className="fa fa-fw fa-bars" />
          </NavbarToggler> */}
          {/* <Collapse id="topnav-menu-content" isOpen={isOpenMenu} navbar> */}
            {/* <ScrollspyNav
              scrollTargetIds={TargetId}
              scrollDuration="800"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse my-0 py-0"
            > */}
              {/* <Nav className="mx-auto d-flex justify-content-end place-item-center navigation navbar-nav" id="topnav-menu"> */}
                {navItems.map((item, key) => (
                  <NavItem
                  style={{height:''}}
                    key={key}
                    // className={item.navheading === "Home" ? "active text-center  mt-0 mb-2 py-0 " : ""}
                  >
                    <NavLink className='py-0 my-0' href={"#" + item.idnm}>
                    {/* <i className="bx bx-home-circle me-2"></i> */}
                       <span>{item.navheading}</span>
                      
                       </NavLink>
                  </NavItem>
                ))}
              {/* </Nav> */}
            {/* </ScrollspyNav> */}
            {/* <div className="ms-lg-2"> */}
              {/* <Link to="#" className="btn btn-outline-success w-xs">
                Sign in
              </Link> */}
            {/* </div> */}
          {/* </Collapse> */}
            
            </div>
            <hr className='bg-warning border m-0 p-0 border-warning'/>
         <Row  className='navbar  my-0 py-0 '>

  
          <NavbarToggler
            className="p-0  m-0"
            onClick={() => {
              setisOpenMenu();
            }}
          >
            <i className="fa fa-fw fa-bars" />
          </NavbarToggler>

          <Collapse id="topnav-menu-content" isOpen={isOpenMenu} navbar>
            <ScrollspyNav
              scrollTargetIds={TargetId}
              scrollDuration="800"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse d-flex"
            >
              <Nav style={{height:'60px'}} className="mx-auto   d-flex text-white justify-content-start place-item-center navigation navbar-nav" id="topnav-menu">
                {navItems.map((item, key) => (
                  <NavItem
                  // style={{height:'30px'}}
                    key={key}
                    className={item.navheading === "Home" ? "active border-none  my-0 py-0 " : ""}
                  >
                    <NavLink className='mt-0 mb-2 py-0' href={"#" + item.idnm}>
                      <span> {item.navheading}</span>
                      <i className='arrow-down'></i></NavLink>
                  </NavItem>
                ))}
              </Nav>
            </ScrollspyNav>
            <div className="d-flex font-size-22 gap-3">
              <div className='mx-1'>
              <Link
                    className="nav-link dropdown-toggle "
                    onClick={e => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="/dashboard"
                  >
                     <i className='mdi mdi-dots-grid'></i>
                   
                    {/* <div className="arrow-down text-white  mx-0 p-0 font-size-11"></div> */}
                  </Link>
                  <div
                    style={{borderRadius:'10px',background:'#260000' }}
                    className={classname("dropdown-menu dropdown-menu-lg dropdown-menu-end pt-3 pb-0 px-2  ", { show: dashboard })}
                  >
                    <Card style={{maxHeight:'65vh', overflowY:'scroll',whiteSpace:'nowrap', overflowX :'hidden', overscrollBehaviorY:'-moz-initial', borderRadius:'7px',scrollMargin:'50px' }} className='bg-white mb-3 d-flex' >

                   <Row className='m-0 px-0 d-flex'>
                     {services.map((key)=>
                    <Col key={key.id} className=' mx-0 my-1 px-0 px-2 py-1 ' style={{borderRadius:'20px'}} sm={4}>
                    <Link to="/dashboard-job" style={{borderRadius:'5px'}}  className="dropdown-item d-grid place-items-center mx-0 px-0  d-grid text-center">
                      <img height='65' className=' m-auto' src={key.src} alt={key.alt}></img>
                      <div className=' '>{key.alt}</div>
                    </Link>

                    </Col>
                     )}
                   </Row>
                     </Card>
                  </div>
              </div>
              {/* <div>

              <Link 
                   className="nav-link dropdown-toggle arrow-none"
                   
                    onClick={e => {
                      e.preventDefault();
                      setdashboard1(!dashboard1);
                    }}
                    to="/dashboard"
                 >
                <i className='mdi mdi-dots-grid'></i>
             
              </Link>
              <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: dashboard1 }
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                          <Link to="/ui-alerts" className="dropdown-item">
                          hhhhh
                          </Link>
                          <Link to="/ui-buttons" className="dropdown-item">
                            
                            hhhhh
                          </Link>
                          <Link to="/ui-cards" className="dropdown-item">
                            Cards
                          </Link>
                          {/* <Link to="/ui-carousel" className="dropdown-item">
                            {props.t("Carousel")}
                          </Link>
                          <Link to="/ui-dropdowns" className="dropdown-item">
                            {props.t("Dropdowns")}
                          </Link>
                          <Link to="/ui-grid" className="dropdown-item">
                            {props.t("Grid")}
                          </Link>
                          <Link to="/ui-images" className="dropdown-item">
                            {props.t("Images")}
                          </Link>
                          <Link to="/ui-lightbox" className="dropdown-item">
                            {props.t("Lightbox")}
                          </Link>
                        </div>
                      </Col>
                       <Col lg={4}>
                        <div>
                          <Link to="/ui-modals" className="dropdown-item">
                            {props.t("Modals")}
                          </Link>
                          <Link to="/ui-offcanvas" className="dropdown-item">
                            {props.t("Offcanvas")}
                          </Link>
                          <Link to="/ui-rangeslider" className="dropdown-item">
                            {props.t("Range Slider")}
                          </Link>
                          <Link
                            to="/ui-session-timeout"
                            className="dropdown-item"
                          >
                            {props.t("Session Timeout")}
                          </Link>
                          <Link to="/ui-progressbars" className="dropdown-item">
                            {props.t("Progress Bars")}
                          </Link>
                          <Link to="/ui-placeholders" className="dropdown-item">
                            {props.t("Placeholders")}
                          </Link>
                        <Link to="#t" className="dropdown-item">
                              {props.t("Sweet-Alert")}
                            </Link> 
                          <Link
                            to="/ui-tabs-accordions"
                            className="dropdown-item"
                          >
                            {props.t("Tabs & Accordions")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="/ui-typography" className="dropdown-item">
                            {props.t("Typography")}
                          </Link>
                          <Link to="/ui-toasts" className="dropdown-item">
                            {props.t("Toasts")}
                          </Link>
                          <Link to="/ui-video" className="dropdown-item">
                            {props.t("Video")}
                          </Link>
                          <Link to="/ui-general" className="dropdown-item">
                            {props.t("General")}
                          </Link>
                          <Link to="/ui-colors" className="dropdown-item">
                            {props.t("Colors")}
                          </Link>
                          <Link to="/ui-rating" className="dropdown-item">
                            {props.t("Rating")}
                          </Link>
                          <Link to="/ui-notifications" className="dropdown-item">
                            {props.t("Notifications")}
                          </Link>
                          <Link to="/ui-utilities" className="dropdown-item">
                            {props.t("Utilities")}
                          </Link>
                        </div>
                      </Col> 
                    </Row>
                  </div>
              </div> */}
              <Link to="#" className="btn btn-outline-success m-0 p-1 ">
                Sign in
              </Link>
            </div>
          </Collapse>
          </Row>
          </div>
        {/* </Container> */}
      </nav>
    </React.Fragment>
  );
};

Navbar_Page.propTypes = {
  imglight: PropTypes.any,
  navClass: PropTypes.string
};

export default Navbar_Page;

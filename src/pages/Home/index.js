import React from 'react'
import { Button, Card, CardBody, CardTitle, Col, Container, Form, Input, Label, Row } from 'reactstrap'
import Slidewithfade from './slidewithfade'
// import Slider from './Slider'
import SlideDark from './slideDark'
import ProductCard from './ProductCard'
import FWGames from 'pages/Dashboard/FWGames'
import ConnectCard from 'pages/Dashboard/ConnectCard'
import SportsKutumb from './SportsKutumb'


function index() {

   const job =[
    {title :'Post Job'},
    {title :'Find Job'},
  ]
  
  const consult =[
   {title :''},
   {title :''},
 ]
  const community =[
   {title :'Post Job'},
   {title :'Find Job'},
 ]
   


  

  return (
    <React.Fragment>
      <Row>
      
      </Row>
      <div className='d-flex mb-5' style={{width :'100vw', height:'100vh'}}>

    <SlideDark/>
      </div>
      <ProductCard className='bg-black'/>
    <div style={{width :'100vw',height:'100vh'}}className="px-3 mb-5  d-grid  ">
      <FWGames tab1={tab1}  heading ='Fw GAMES' />
    </div>
    <Row className='d-flex mt-5'>
      <Col>
      <ConnectCard tab={job} color='bg-black text-white' />
      </Col>
      <Col>
      <ConnectCard tab={consult} color='bg-black text-white' />
      </Col>
      <Col>
      <ConnectCard tab={community} color='bg-black text-white' />
      
      </Col>
    </Row>
    <Row>
      <Col><ConnectCard tab ={community} color='bg-black text-white' ></ConnectCard></Col>
    </Row>
    <Row>
      <SportsKutumb/>
    </Row>
    </React.Fragment>
  )
}

export default index
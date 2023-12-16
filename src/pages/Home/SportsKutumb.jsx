import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import SlideDark from './slideDark'

function SportsKutumb() {



  return (
    <Card>

        <CardBody className='p-0'>
            <Row className='d-flex'> 

            
            <Col >
            <Row  style={{height:'50px'}} className='bg-success text-center py-2'>
                <h2>
                  Sports Kutumb
                </h2>
            </Row>
                <Card>
                    h
                </Card>
            </Col>
            <Col>
            <Row style={{height:'50px'}} className='bg-success text-center py-2'>
            <u>Manage your Sports Event</u>
            </Row>
            <Card className='m-0 p-0'>

            </Card>
            </Col>
            <Col xl={4}>
            <SlideDark/>
            </Col>
            </Row>
            </CardBody>
        
    

    </Card>
  )
}

export default SportsKutumb
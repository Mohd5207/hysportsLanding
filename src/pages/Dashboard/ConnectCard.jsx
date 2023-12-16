import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

function ConnectCard(props) {
  const [heading, setHeading] = useState('')
   

  return (
    <Card   className='p-0'>
        <CardHeader className={props.color}>
                <u>
            <Row> 
                {props.tab.map((key)=>
                <Col key={key}>{key.title} </Col>
                )}
               
            </Row>
                </u>

        </CardHeader>
        <CardBody style={{width:'100%', height:'80%'}}>

        </CardBody>
    </Card>
  )
}

export default ConnectCard
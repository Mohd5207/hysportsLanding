import React from "react"
import { Container, Row } from "reactstrap"

//Import Components
import CardBox from "./card-box"

const CardsMini = () => {
  const coins = [
    {
      title: "CALCULATE FITNESS & HEALTH",
      color: "warning",
      icon: "mdi mdi-bitcoin",
      value: "9134.39",
      rate: "0.0012.23 ( 0.2 % )",
      isIncrease: true,
    },
    {
      title: "GET CUSTOMISE EXERCISE",
      color: "primary",
      icon: "mdi mdi-ethereum",
      value: "245.44",
      rate: "004.12 ( 0.1 % )",
      isIncrease: false,
    },
    {
      title:'GET CUSTOMISE DIET PLAN',
      color: "info",
      icon: "mdi mdi-litecoin",
      value: "63.61",
      rate: "0.0001.12 ( 0.1 % ) ",
      isIncrease: true,
    },
  
    {
      title:'Manage Your Gym',
      color: "info",
      icon: "mdi mdi-litecoin",
      value: "63.61",
      rate: "0.0001.12 ( 0.1 % ) ",
      isIncrease: true,
    },
  ]

  return (
    <React.Fragment>
      <section className="section py-0 mx-0 ">
        <Row className="mx-3 ">
              <CardBox coins={coins} />
        </Row>
        <Container className="mx-0  bg-success">
          <div className="">
            <Row className="mx-0">
              {/* reder card boxes */}
            </Row>
              {/* <CardBox coins={coins} /> */}
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default CardsMini

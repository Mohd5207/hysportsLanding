import React from "react"
import { Container, Row, Col, CardHeader, CardBody, Card, CardSubtitle, CardTitle, CardImg, CardText } from "reactstrap"

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "../../../node_modules/swiper/swiper.scss";
import { Link } from "react-router-dom";
import img6 from "../../assets/images/small/img-6.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
const ProductCard = () => { 

  
  const card =[
    {id:1, },
    {id:2, },
    {id:3, },
    {id:4, },
    {id:5, },
    {id:6, },
    {id:7, },
    {id:8, },
    {id:9, },
  ]

  return (
    <React.Fragment>
      <section className=" m-0 p-0 " id="roadmap">
        {/* <Container> */}
          {/* <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">Timeline</div>
                <h4>Our Roadmap</h4>
              </div>
            </Col>
          </Row> */}

          <Row className="mt-5  p-0">
            <Col lg="12">
              <div className="hori-timeline m-0 ">
                <Swiper
                  slidesPerView={1}
                  // spaceBetween={10}
                  navigation
                  pagination={{                   
                    clickable: true,
                  }}
                  breakpoints={{
                    400: {
                      slidesPerView: 2,
                    },
                    600: {
                      slidesPerView: 3,
                    },
                    800: {
                      slidesPerView: 4,
                    }
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Pagination, Navigation, Autoplay, ]}
                  className="owl-carousel owl-theme m-0 p-0 events " id="timeline-carousel">
              
                  
                    {card.map((key)=>
                  <Col key={key.id} md={4} xl={3}>
                  <SwiperSlide key={key.id} className="item mx-4 event-list">
              <Card>
                {/* <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle className="font-14 text-muted">
                    Support card subtitle
                  </CardSubtitle>
                </CardBody> */}
                <CardImg className="border-radius-3 img-fluid" src={img4} alt="Skote" />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </CardText>
                  <Link to="#" className="card-link">
                    Card link
                  </Link>
                  <Link to="#" className="card-link">
                    Another link
                  </Link>
                </CardBody>
              </Card>
            </SwiperSlide>
            </Col>
                    )}
                

                  {/* <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">January, 2020</div>
                        <h5 className="mb-4">Research on project</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">To an English person, it will seem like simplified English existence.</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list active">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">February, 2020</div>
                        <h5 className="mb-4">ICO & Token Design</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">For science, music, sport, etc, Europe uses the same vocabulary.</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">March, 2020</div>
                        <h5 className="mb-4">ICO Launch Platform</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">New common language will be more simple than existing.</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">April, 2020</div>
                        <h5 className="mb-4">Token sale round 1</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">It will be as simple as occidental in fact it will be Cambridge</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">May, 2020</div>
                        <h5 className="mb-4">Token sale round 2</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">To an English person, it will seem like simplified English existence.</p>
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>                
              </div>
            </Col>
          </Row>
        {/* </Container> */}
      </section>
    </React.Fragment>
  )
}

export default ProductCard

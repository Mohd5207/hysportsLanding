import React, { useState } from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'
import Slidewithfade from 'pages/Home/slidewithfade';
import SlideDark from 'pages/Home/slideDark';
// import tab1 fro
function FWGames(props) {
  const [activeTab, setactiveTab] = useState("1");
  const [activeTab1, setactiveTab1] = useState("5");
  const [tab1, settab1] = useState([])
 const card =[
  {id :1, title :'Inter School' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
  {id :2, title :'Inter Gym' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
  {id :3, title :'Inter College' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
  {id :4, title :'Inter Corporate' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
  {id :5, title :'Inter Services' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
  {id :6, title :'Inter Open For All' , description :'Inter school qualify round start get participate' , date :'December 9, 2023' },
 ]

  const toggle = tab => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab);
    }
  };
 


  return (
    <div className='col-lg-12'>
     <Row>
            {/* <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Tabs</CardTitle>
                  <p className="card-title-desc">
                    Use the tab JavaScript plugin—include it individually or
                    through the compiled{" "}
                    <code className="highlighter-rouge">bootstrap.js</code>{" "}
                    file—to extend our navigational tabs and pills to create
                    tabbable panes of local content, even via dropdown menus.
                  </p>

                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "3",
                        })}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "4",
                        })}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab} className="p-3 text-muted">
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Raw denim you probably haven&apos;t heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan american apparel, butcher
                            voluptate nisi qui.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts
                            ullamco ad vinyl cillum PBR. Homo nostrud organic,
                            assumenda labore aesthetic magna delectus mollit.
                            Keytar helvetica VHS salvia yr, vero magna velit
                            sapiente labore stumptown. Vegan fanny pack odio
                            cillum wes anderson 8-bit.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven&apos;t heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="4">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table VHS viral locavore cosby
                            sweater. Lomo wolf viral, mustache readymade
                            thundercats keffiyeh craft beer marfa ethical. Wolf
                            salvia freegan, sartorial keffiyeh echo park vegan.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col> */}

            <Col lg={12}>
              <Card className='p-0 '>
                <CardBody className='m-0 p-0'>
                  <Row className='d-flex py-2 m-0 place-items-center justify-content-center  bg-danger' >
                   <Col className='p-0 mx-2'>
                  <CardTitle className="h4 my-2  ">{props.heading}</CardTitle>
                   </Col>
                  {/* <p className="card-title-desc">
                    Use the tab JavaScript plugin—include it individually or
                    through the compiled{" "}
                    <code className="highlighter-rouge">bootstrap.js</code>{" "}
                    file—to extend our navigational tabs and pills to create
                    tabbable panes of local content, even via dropdown menus.
                  </p> */}
                  <Col sm={6}>
                  <Nav pills className="navtab-bg nav-justified my-2">
                      {tab1.map((key )=>
                      
                    <NavItem key={key.id}>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          "m-0 p-0" : true,
                          active: activeTab1 ==  key.id,
                        })}
                        onClick={(id) => {
                          toggle1(id);
                        }}
                      >
                      

                       {key.index}
                      
                      </NavLink>
                    </NavItem>
                  
                      )}
                      <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          "m-0 p-0" : true,
                          active: activeTab1 === "5",
                        })}
                        onClick={() => {
                          toggle1("5");
                        }}
                      >
                      

                        Inter
                      
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          "m-0 p-0" : true,
                          active: activeTab1 === "6",
                        })}
                        onClick={() => {
                          toggle1("6");
                        }}
                      >
                       District
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          "m-0 p-0" : true,
                          active: activeTab1 === "7",
                        })}
                        onClick={() => {
                          toggle1("7");
                        }}
                      >
                      State
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          "m-0 p-0" : true,
                          active: activeTab1 === "8",
                        })}
                        onClick={() => {
                          toggle1("8");
                        }}
                      >
                        National
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          "m-0 p-0" : true,
                          active: activeTab1 === "9",
                        })}
                        onClick={() => {
                          toggle1("9");
                        }}
                      >
                        International
                      </NavLink>
                    </NavItem>
                  </Nav>
                  </Col>
                   </Row>
                  <TabContent activeTab={activeTab1} className="pb-5 mt-2 text-muted">
                    <TabPane className='' tabId="5">
                      <Row style={{height:'fit- my-2'}} className='  '>
                        <Col   className='mx-0' lg='6' sm="12">
                          <SlideDark/>
                         
                        </Col>
                        <Col className=' mx-0 ' lg='6' sm='12'>
                          <Row className='px-3'>
                          
                           
                               {card.map((key)=>
                               <Col sm='12' lg={6} className='  ' key={key}>
                                <Row>

                               <Card style={{width:'40%', }} color=' col-sm-12 col-lg-6 py-5 bg-info '>m</Card>
                             
                             <Col  sm={6} md={6} lg={6} className='my-2 mx-0'>
                             <h6 className='mb-1 font-size-12 text-black'>{key.title}</h6>
                             <p className='font-size-10 m-0 p-0' >{key.description}</p>
                                <span className='my-1 py-0 font-size-10 text-black'>{key.date}</span>
                               </Col>
                                </Row>
                               </Col>
                               
                               )}
                           
                             </Row>
                            </Col>
                          
                        <Col sm='3'></Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="6">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts
                            ullamco ad vinyl cillum PBR. Homo nostrud organic,
                            assumenda labore aesthetic magna delectus mollit.
                            Keytar helvetica VHS salvia yr, vero magna velit
                            sapiente labore stumptown. Vegan fanny pack odio
                            cillum wes anderson 8-bit.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="7">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven&apos;t heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="8">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table VHS viral locavore cosby
                            sweater. Lomo wolf viral, mustache readymade
                            thundercats keffiyeh craft beer marfa ethical. Wolf
                            salvia freegan, sartorial keffiyeh echo park vegan.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
    </div>
  )
}

export default FWGames
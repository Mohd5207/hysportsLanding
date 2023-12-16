import PropTypes from 'prop-types';
import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const CardBox = props => {
  return (
    <React.Fragment>
      {props.coins.map((coin, key) => (
        <Col md="3" className='px-1 px-0' key={key}>
          <Card className='mx-0'>
                <CardHeader className='text-center bg-success'>

               <p className="text-white font-size-12  mt-3 mb-0 py-0 px-3"><u><h6> { coin.title}</h6> </u></p>
                </CardHeader>
            <CardBody>
              <div className="d-flex">
                {/* <div className="avatar-xs me-3">
                  <span
                    className={
                      "avatar-title rounded-circle bg-"+ coin.color+ "-subtle text-" +
                      coin.color +
                      " font-size-18"
                    }
                  >
                    <i className={coin.icon} />
                  </span>
                </div> */}
                <div className="flex-grow-0 ">
                   <CardBody>

                  <h5>$ {coin.value}</h5>
                  <p className="text-muted text-truncate mb-0">
                    {coin.isIncrease ? "+ " : "- "} {coin.rate}{" "}
                    <i
                      className={
                        coin.isIncrease
                        ? "mdi mdi-arrow-up ms-1 text-success"
                        : "mdi mdi-arrow-down ms-1 text-danger"
                      }
                      />
                  </p>
                      </CardBody>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

CardBox.propTypes = {
  coins: PropTypes.array
};

export default CardBox;

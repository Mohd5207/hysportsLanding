import PropTypes from "prop-types";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Row
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import SlideDark from "pages/Home/slideDark";
import Footer from "components/HorizontalLayout/Footer";
import ProductCard from "pages/Home/ProductCard";
import FWGames from "./FWGames";
import ConnectCard from "./ConnectCard";
// import FWCommunity from "./FWCommunity";


const Dashboard = props => {
  //meta title
  document.title = "Dashboard | Skote - React Admin & Dashboard Template";



  

  return (
    <React.Fragment>
          <Row className=" mt-5 py-0">
          <SlideDark/>
            <ProductCard />
          </Row>
      <div className="page-content mx-0 p-0">
        <Container className="my-0  p-0"  fluid>
          {/* Render Breadcrumb */}
          {/* <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          /> */}
          <Row className="m-0 p-0">
          <ConnectCard/>
          </Row>
          <Row>
         {/* < FWGames /> */}
         
         </Row>
       

        </Container>
      </div>
           <Footer>
           </Footer>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);

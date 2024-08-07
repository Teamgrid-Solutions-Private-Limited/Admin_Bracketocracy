import { Container, Row, Col } from "react-bootstrap";

import DashboardTable from "./DashboardTable";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";

const Dashboard = () => {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          {<Sidebar />}
          <Col className="g-0" xs={12} md={8} lg={9} xl={10}>
            <div className="main">
              <div className="main-inner">
                <div className="main-content">
                  {<Header title="" />}
                  <div className="main-content-row">
                    <DashboardTable />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

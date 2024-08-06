import React from 'react'
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Typography } from "@mui/material";
import SaveTeamModal from './saveTeamModal';
import TeamTable from './teamTable';
import Header from '../global/Header';
import Sidebar from '../global/Sidebar';

const Teams = () => {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          {<Sidebar />}
          <Col className="g-0" xs={12} md={8} lg={8} xl={10}>
            <div className="main">
              <div className="main-inner">
                <div className="main-content">
                  {<Header 
                //   title="Teams" 
                  />}
                  <div className="main-content-row">
                    <div className="top-line">
                      <Typography
                        variant="h4"
                        id="tableTitle"
                        component="div"
                        className="heading-page"
                      >
                        Teams
                      </Typography>
                      <Button variant="primary" 
                    //   onClick={handleShow}
                      >
                        ADD NEW <i className="bi bi-plus-square"></i>
                      </Button>
                    </div>
                    <TeamTable
                    //   records={teamList}
                    //   handleEditAction={handleTeamAction}
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Modal
        //   show={show}
        //   onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg" 
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Manage Team</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SaveTeamModal />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  )
}

export default Teams
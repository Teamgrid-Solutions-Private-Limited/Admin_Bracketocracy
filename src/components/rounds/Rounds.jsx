import React from 'react'
import { Container, Row, Col, Modal } from "react-bootstrap";
import RoundsTable from "./RoundsTable";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";
import SaveRoundModal from "./SaveRoundModal";
import { Typography } from "@mui/material";
const Rounds = () => {
  return (
    <div className="App">
    <Container fluid>
      <Row>
        {<Sidebar />}
        <Col className="g-0" xs={12} md={8} lg={8} xl={10}>
          <div className="main">
            <div className="main-inner">
              <div className="main-content">
                {<Header title="Rounds" />}
                <div className="main-content-row">
                  <div className="top-line">
                    <Typography
                      variant="h1"
                      id="tableTitle"
                      component="div"
                      className="heading-page"
                    >
                      Rounds
                    </Typography>
                    {/* <Button variant="primary" onClick={handleShow}>
                      ADD NEW
                    </Button> */}
                  </div>
                  <RoundsTable
                    // records={roundList}
                    // handleEditAction={handleTeamAction}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        // show={show}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Manage Round</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SaveRoundModal 
        //   selectedRound={selectedRound} 
          />
        </Modal.Body>
      </Modal>
    </Container>
  </div>
  )
}

export default Rounds
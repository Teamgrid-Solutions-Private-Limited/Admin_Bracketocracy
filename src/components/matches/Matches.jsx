import React from 'react';
import { Typography } from "@mui/material";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { useSelector } from 'react-redux';
const Matches = () => {
  const { login, status } = useSelector((state) => state.login);
  return (
    <div className="App">
      <Container fluid>
        <Row>
          {/* {<Sidebar />} */}
          <Col className="g-0" xs={12} md={8} lg={8} xl={10}>
            <div className="main">
              <div className="main-inner">
                <div className="main-content">
                  {/* {<Header title="Matches" />} */}
                  <div className="main-content-row">
                    <div className="top-line">
                      <Typography
                        variant="h1"
                        id="tableTitle"
                        component="div"
                        className="heading-page"
                      >
                        Matches
                      </Typography>
                    </div>

                    <Form>
                      <div className="top-filter">
                        <div className="top-filter-left">
                          <Form.Label>
                            <strong>Filter by</strong>
                          </Form.Label>

                          <Form.Group className="formgroup">
                            <Form.Select
                            //   onChange={(e) => setZoneSlug(e.target.value)}
                            //   value={zoneSlug}
                            >
                              {/* <option value={""}>All Regions</option>
                              {zoneList.map((item) => {
                                return (
                                  <option value={item.slug} key={item.slug}>
                                    {item.name}
                                  </option>
                                );
                              })} */}
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="formgroup">
                            <Form.Select
                            //   onChange={(e) => setRoundSlug(e.target.value)}
                            //   value={roundSlug}
                            >
                              {/* <option value={""}>All Rounds</option>
                              {roundList.map((item) => {
                                return (
                                  <option value={item.slug} key={item.slug}>
                                    {item.name}
                                  </option>
                                );
                              })} */}
                            </Form.Select>
                          </Form.Group>
                        </div>
                        <div className="top-filter-right">
                        <Button variant="dark" 
                        // onClick={handleResetTournament} 
                        >
                        New tournament <i className="bi bi-trophy"></i>
                          </Button>
                          <Button variant="primary" 
                        //   onClick={handleShow}
                          >
                            ADD NEW <i className="bi bi-plus-square"></i>
                          </Button>
                        </div>
                      </div>
                    </Form>

                    {/* <RoundsTable
                    //   teamIDNameArr={teamIDNameArr}
                    //   teamIDLogoArr={teamIDLogoArr}
                    //   records={records}
                    //   handleEditAction={handleTeamAction}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <ConfirmModal
        // showConfirm={confirmResetTournament}
        // handleCloseConfirm={handleCloseConfirmResetTournament}
        // handleOKConfirm={handleOkConfirmResetTournament}
        // actionButton="Confirm"
        // confirmDetails={showConfirmDetail}
      /> */}
        <Modal
        //   show={show}
        //   onHide={handleClose}
        //   backdrop="static"
        //   keyboard={false}
        //   size="lg"
        //   centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Manage Match</Modal.Title>
          </Modal.Header>

          {/* <Modal.Body>
            {actionFor === "scroeupdate" ? (
              <SaveScoreMatchModal selectedMatch={selectedMatch} />
            ) : (
              <SaveRoundModal selectedMatch={selectedMatch} />
            )}
          </Modal.Body> */}
        </Modal>
      </Container>
    </div>
  )
}

export default Matches
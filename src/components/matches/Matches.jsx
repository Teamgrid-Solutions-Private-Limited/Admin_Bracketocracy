import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";

import RoundsTable from "./MatchesTable";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";
import ConfirmModal from "../global/ConfirmModal";
import SaveRoundModal from "./SaveMatchModal";
import SaveScoreMatchModal from "./SaveScoreMatchModal";

const Matches = () => {
  const [records, setRecords] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(false);
  const [zoneSlug, setZoneSlug] = useState("");
  const [roundSlug, setRoundSlug] = useState("");
  const [actionFor, setActionFor] = useState("");
  const [show, setShow] = useState(false);
  const [confirmResetTournament, setConfirmResetTournament] = useState(false);
  const [showConfirmDetail, setShowConfirmDetails] = useState(false);

  const handleResetTournament = () => {
    setConfirmResetTournament(true);
    const confirmDetailsLoc = {
      text: "Are you sure you want to create a new tournament? This will archive and reset all the current matches permanently.",
    };
    setShowConfirmDetails(confirmDetailsLoc);
  };
  const handleCloseConfirmResetTournament = () => {
    setConfirmResetTournament(false);
  };

  const handleOkConfirmResetTournament = () => {
    setConfirmResetTournament(false);
    const payload = {};
  };
  const handleClose = () => {
    setShow(false);
    setSelectedMatch({});
    setActionFor("");
  };
  
  const handleShow = () => {
    setShow(true);
    setSelectedMatch({});
  };
  const handleTeamAction = (selectedteamRecv, actionForLoc) => {
    setShow(true);
    setSelectedMatch(selectedteamRecv);
    setActionFor(actionForLoc);
    // console.log(selectedteamRecv);
  };
  // useEffect(() => {
  //   if (actionDone === "create" || actionDone === "update") {
  //     handleClose();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [actionDone]);

  // useEffect(() => {
  //   let matchListLoc = JSON.parse(JSON.stringify(matchList));
  //   if (zoneSlug !== "") {
  //     matchListLoc = matchListLoc.filter((item) => {
  //       return item.zoneSlug === zoneSlug;
  //     });
  //   }
  //   if (roundSlug !== "") {
  //     matchListLoc = matchListLoc.filter((item) => {
  //       return item.roundSlug === roundSlug;
  //     });
  //   }

  //   setRecords(matchListLoc);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [matchList, zoneSlug, roundSlug]);


  return (
    <div className="App">
      <Container fluid>
        <Row>
          {<Sidebar />}
          <Col className="g-0" xs={12} md={8} lg={8} xl={10}>
            <div className="main">
              <div className="main-inner">
                <div className="main-content">
                  {<Header title="Matches" />}
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
                              onChange={(e) => setZoneSlug(e.target.value)}
                              value={zoneSlug}
                            >
                              <option value={""}>All Regions</option>
                              {/* {zoneList.map((item) => {
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
                              onChange={(e) => setRoundSlug(e.target.value)}
                              value={roundSlug}
                            >
                              <option value={""}>All Rounds</option>
                              {/* {roundList.map((item) => {
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
                        <Button variant="dark" onClick={handleResetTournament} >
                        New tournament <i className="bi bi-trophy"></i>
                          </Button>
                          <Button variant="primary" onClick={handleShow}>
                            ADD NEW <i className="bi bi-plus-square"></i>
                          </Button>
                        </div>
                      </div>
                    </Form>

                    <RoundsTable
                      // teamIDNameArr={teamIDNameArr}
                      // teamIDLogoArr={teamIDLogoArr}
                      records={records}
                      handleEditAction={handleTeamAction}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <ConfirmModal
        showConfirm={confirmResetTournament}
        handleCloseConfirm={handleCloseConfirmResetTournament}
        handleOKConfirm={handleOkConfirmResetTournament}
        actionButton="Confirm"
        confirmDetails={showConfirmDetail}
      />
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Manage Match</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {actionFor === "scroeupdate" ? (
              <SaveScoreMatchModal selectedMatch={selectedMatch} />
            ) : (
              <SaveRoundModal selectedMatch={selectedMatch} />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Matches;

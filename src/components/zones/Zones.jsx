import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ZonesTable from "./ZonesTable";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";
import SaveZoneModal from "./ZonesTable";
// import { getZones } from "../../store/actions/Zone.Action";

const Zones = () => {
//   const dispatch = useDispatch();
//   const zoneList = useSelector((state) => state.ZoneReducer.zoneList);
//   const actionDone = useSelector((state) => state.ZoneReducer.actionDone);
//   const [selectedZone, setSelectedZone] = useState(false);
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//     setSelectedZone({});
//   };
//   const handleTeamAction = (selectedteamRecv) => {
//     setShow(true);
//     setSelectedZone(selectedteamRecv);
//     // console.log(selectedteamRecv);
//   };
//   useEffect(() => {
//     if (actionDone === "create" || actionDone === "update") {
//       handleClose();
//       dispatch(getZones());
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [actionDone]);

//   useEffect(() => {
//     dispatch(getZones());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          {<Sidebar />}
          <Col className="g-0" xs={12} md={8} lg={8} xl={10}>
            <div className="main">
              <div className="main-inner">
                <div className="main-content">
                  {<Header title="Regions" />}
                  <div className="main-content-row">
                    <div className="top-line">
                      <Typography
                        variant="h1"
                        id="tableTitle"
                        component="div"
                        className="heading-page"
                      >
                        Region List
                      </Typography>
                      {/* <Button variant="primary" onClick={handleShow}>
                        ADD NEW
                      </Button> */}
                    </div>
                    <ZonesTable
                    //   records={zoneList}
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
            <Modal.Title className="modal-title">Manage Region</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SaveZoneModal 
            // selectedZone={selectedZone} 
            />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Zones;

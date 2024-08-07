import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import NotificationsTable from "./NotificationsTable";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";
import SaveNotificationsModal from "./SaveNotificationsModal";
// import {
//   getNotifications,
//   sendNotification,
// } from "../../store/actions/Notifications.Action";

const Notifications = () => {
  // const dispatch = useDispatch();
  // const notificationsList = useSelector(
  //   (state) => state.NotificationsReducer.notificationsList
  // );
  // const actionDone = useSelector(
  //   (state) => state.NotificationsReducer.actionDone
  // );
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleTeamAction = (selectedRecv) => {
    const formData = new FormData();
    formData.append("notificationTitle", selectedRecv.notificationTitle);
    formData.append("notificationText", selectedRecv.notificationText);
    // dispatch(sendNotification(formData, "resend"));
    // setShow(true);
    // console.log(selectedteamRecv);
  };
  // useEffect(() => {
  //   if (actionDone === "resend" || actionDone === "send") {
  //     handleClose();
  //     dispatch(getNotifications());
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [actionDone]);

  // useEffect(() => {
  //   dispatch(getNotifications());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          {<Sidebar />}
          <Col className="g-0" xs={12} md={8} lg={9} xl={10}>
            <div className="main">
              <div className="main-inner">
                <div className="main-content">
                  {<Header title="Notifications" />}
                  <div className="main-content-row">
                    <div className="top-line">
                      <Typography
                        variant="h1"
                        id="tableTitle"
                        component="div"
                        className="heading-page"
                      >
                        Notification List
                      </Typography>
                      <Button variant="primary" onClick={handleShow}>
                        CREATE NEW
                      </Button>
                    </div>
                    <NotificationsTable
                      // records={notificationsList}
                      handleEditAction={handleTeamAction}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">
              Notification Details
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SaveNotificationsModal />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Notifications;

import { useIdleTimer } from "react-idle-timer";


import { Modal } from "react-bootstrap";

import { useState } from "react";

import "./Global.css";


const IdleTimerComponent = ({ children }) => {
  const sessionExpireTime = window.ENV.sessionExpiresIn;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const onIdle = () => {
    handleShow();
  };

  const handleLogout = () => {
    handleClose();

    handleReset();

    sessionStorage.clear();
  };

  const handleReset = () => {
    reset();
  };

  const { reset } = useIdleTimer({
    timeout: sessionExpireTime,

    onIdle,
  });

  return (
    <div className="timeout-modal-container">
      {isLoggedIn ? (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="s"
          className="timeout-modal"
        >
          <Modal.Header>
            <Modal.Title className="modal-title">Session Expired</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="session-timeout-message">
              Your session has expired due to inactivity!
            </div>

            <button className="session-timeout-btn" onClick={handleLogout}>
              OK
            </button>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default IdleTimerComponent;

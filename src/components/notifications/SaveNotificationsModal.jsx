import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { sendNotification } from "../../store/actions/Notifications.Action";

const SaveNotificationsModal = () => {
  // const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    if (title !== "" && message !== "") {
      const formData = new FormData();
      formData.append("notificationTitle", title);
      formData.append("notificationText", message);
      // dispatch(sendNotification(formData, "send"));
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Notification Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Notifications Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={submitForm}>
        Send
      </Button>
    </Form>
  );
};

export default SaveNotificationsModal;

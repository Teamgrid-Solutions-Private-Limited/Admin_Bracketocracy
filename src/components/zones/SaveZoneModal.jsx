import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { createUpdateZone } from "../../store/actions/Zone.Action";

const SaveZoneModal = () => {
//   const dispatch = useDispatch();
//   const [actionFor, setActionFor] = useState("create");
//   const [name, setName] = useState("");

//   const submitForm = () => {
//     const formData = new FormData();
//     if (selectedZone.id && selectedZone.id !== "") {
//       formData.append("zoneId", selectedZone.id);
//     }
//     formData.append("name", name);
//     formData.append("slug", selectedZone.slug);
//     dispatch(createUpdateZone(formData, actionFor));
//   };
//   useEffect(() => {
//     if (selectedZone.id && selectedZone.id !== "") {
//       setName(selectedZone.name);
//       setActionFor("update");
//     } else {
//       setActionFor("create");
//     }
//   }, [selectedZone]);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Region Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="button" 
    //   onClick={submitForm}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SaveZoneModal;
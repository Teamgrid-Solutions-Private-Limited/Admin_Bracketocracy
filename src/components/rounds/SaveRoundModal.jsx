import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import MUIDatePicker from "../global/MUIDatePicker";
// import MUIDateTimePicker from "../global/MUIDateTimePicker";
// import {
//   formateDateConvert,
//   formateDateTimeConvert,
// } from "../global/UtilFunction";

// import { createUpdateRounds } from "../../store/actions/Round.Action";

const SaveRoundModal = () => {
//   const dispatch = useDispatch();
//   const [actionFor, setActionFor] = useState("create");
//   const [name, setName] = useState("");
//   const [dateRoundPlay, setDateRoundPlay] = useState(new Date());
//   const [dateRoundBidEnd, setDateRoundBidEnd] = useState(new Date());

//   const submitForm = () => {
//     const formData = new FormData();
//     if (selectedRound.id && selectedRound.id !== "") {
//       formData.append("roundId", selectedRound.id);
//     }
//     formData.append("name", name);
//     formData.append("slug", selectedRound.slug);
//     formData.append("playDate", formateDateConvert(dateRoundPlay));
//     formData.append("biddingEndDate", formateDateTimeConvert(dateRoundBidEnd));
//     dispatch(createUpdateRounds(formData, actionFor));
//   };

//   useEffect(() => {
//     if (selectedRound.id && selectedRound.id !== "") {
//       setName(selectedRound.name);
//       if (selectedRound.playDate !== "") {
//         setDateRoundPlay(new Date(selectedRound.playDate.replace(/-/g, "/")));
//       }
//       if (selectedRound.biddingEndDate !== "") {
//         setDateRoundBidEnd(new Date(selectedRound.biddingEndDate.replace(/-/g, "/")));
//       }
//       setActionFor("update");
//     } else {
//       setActionFor("create");
//     }
//   }, [selectedRound]);
  return (
    <Form>
      <Form.Group className="formgroup">
        <Form.Label>Round Label</Form.Label>
        <Form.Control
          type="text"
          placeholder="Label"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      {/* <Form.Group className="formgroup">
        <Form.Label>Round</Form.Label>
        <Form.Select onChange={(e) => setRound(e.target.value)} value={round}>
          <option>Select</option>
          {Object.keys(roundSlugOptions).map((item) => {
            return <option value={item}>{roundSlugOptions[item]}</option>;
          })}
        </Form.Select>
      </Form.Group> */}
      <Row>
        <Col>
          <Form.Group className="formgroup" controlId="datepicket-ID">
            <Form.Label>Selection End Date and Time</Form.Label>
            {/* <MUIDateTimePicker
              date={dateRoundBidEnd}
              setDate={setDateRoundBidEnd}
            /> */}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formgroup" controlId="datepicket-ID">
            <Form.Label>Round Play Date</Form.Label>
            {/* <MUIDatePicker date={dateRoundPlay} setDate={setDateRoundPlay} /> */}
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="button" 
    //   onClick={submitForm}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SaveRoundModal;
import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
// import MUIDateTimePicker from "../global/MUIDateTimePicker";

const SaveMatchModal = ({ selectedMatch }) => {

  const [actionFor, setActionFor] = useState("create");
  const [zoneSlug, setZoneSlug] = useState("");
  const [roundSlug, setRoundSlug] = useState("");
  const [teamOneId, setTeamOneId] = useState("");
  const [teamTwoId, setTeamTwoId] = useState("");
  const [matchDate, setMatchDate] = useState(new Date());
  const submitForm = () => {
    // console.log(matchDate);
    if(roundSlug == "round-5" || roundSlug == "round-6"){
      if(roundSlug !=="" && teamOneId !== "" && teamTwoId !==""){
        const formData = new FormData();
        if (selectedMatch.id && selectedMatch.id !== "") {
          formData.append("matchId", selectedMatch.id);
        }
        formData.append("zoneSlug", zoneSlug);
        formData.append("roundSlug", roundSlug);
        formData.append("teamOneId", teamOneId);
        formData.append("teamTwoId", teamTwoId);
        // formData.append("matchDate", matchDate);
      }
    }else{
      if(zoneSlug !== "" && roundSlug !=="" && teamOneId !== "" && teamTwoId !==""){
        const formData = new FormData();
        if (selectedMatch.id && selectedMatch.id !== "") {
          formData.append("matchId", selectedMatch.id);
        }
        formData.append("zoneSlug", zoneSlug);
        formData.append("roundSlug", roundSlug);
        formData.append("teamOneId", teamOneId);
        formData.append("teamTwoId", teamTwoId);
        // formData.append("matchDate", matchDate);
      }
    }
    
   
  };
  useEffect(() => {
    if (selectedMatch.id && selectedMatch.id !== "") {
      setZoneSlug(selectedMatch.zoneSlug);
      setRoundSlug(selectedMatch.roundSlug);
      setTeamOneId(selectedMatch.teamOneId);
      setTeamTwoId(selectedMatch.teamTwoId);
      // if (selectedMatch.matchDate) {
      //   setMatchDate(selectedMatch.matchDate);
      // } else {
      //   setMatchDate(null);
      // }
      setActionFor("update");
    } else {
      setActionFor("create");
    }
  }, [selectedMatch]);
  const handleRoundSelect = (value) => {
    setRoundSlug(value);
    if (value === "round-5" || value === "round-6") {
      setZoneSlug("");
    }
  };
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="formgroup">
            <Form.Label>Round</Form.Label>
            <Form.Select
              onChange={(e) => handleRoundSelect(e.target.value)}
              value={roundSlug}
            >
              <option>Select</option>
              {/* {roundList.map((item) => {
                return (
                  <option value={item.slug} key={item.slug}>
                    {item.name}
                  </option>
                );
              })} */}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formgroup">
            <Form.Label>Region</Form.Label>
            <Form.Select
              disabled={roundSlug === "round-5" || roundSlug === "round-6"}
              onChange={(e) => setZoneSlug(e.target.value)}
              value={zoneSlug}
            >
              <option>Select</option>
              {/* {zoneList.map((item) => {
                return (
                  <option value={item.slug} key={item.slug}>
                    {item.name}
                  </option>
                );
              })} */}
            </Form.Select>
            {/* <Form.Control.Feedback type="invalid">
            Field Mandatory
          </Form.Control.Feedback> */}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="formgroup">
            <Form.Label>Team One</Form.Label>
            <Form.Select
              onChange={(e) => setTeamOneId(e.target.value)}
              value={teamOneId}
            >
              <option>Select</option>
              {/* {teamList.map((item) => {
                return (
                  <option value={item.id} key={item.id + item.name}>
                    {item.name}
                  </option>
                );
              })} */}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="formgroup">
            <Form.Label>Team Two</Form.Label>
            <Form.Select
              onChange={(e) => setTeamTwoId(e.target.value)}
              value={teamTwoId}
            >
              <option>Select</option>
              {/* {teamList.map((item) => {
                return (
                  <option value={item.id} key={item.id + item.name}>
                    {item.name}
                  </option>
                );
              })} */}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <Form.Group className="formgroup" controlId="datepicket-ID">
            <Form.Label>Tip off time</Form.Label>
            <MUIDateTimePicker date={matchDate} setDate={setMatchDate} />
          </Form.Group>
        </Col>
      </Row> */}
      <br />

      <Button variant="primary" type="button" onClick={submitForm}>
        Submit
      </Button>
    </Form>
  );
};

export default SaveMatchModal;

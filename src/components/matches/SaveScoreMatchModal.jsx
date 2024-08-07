import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const SaveScoreMatchModal = ({ selectedMatch }) => {

  const [actionFor, setActionFor] = useState("scroeupdate");
  const [teamOneScore, setTeamOneScore] = useState("");
  const [teamTwoScore, setTeamTwoScore] = useState("");

  const submitForm = () => {
    const formData = new FormData();
    if (selectedMatch.id && selectedMatch.id !== "") {
      formData.append("matchId", selectedMatch.id);
    }
    formData.append("teamOneScore", teamOneScore);
    formData.append("teamTwoScore", teamTwoScore);
  };
  useEffect(() => {
    if (selectedMatch.id && selectedMatch.id !== "") {
      setTeamOneScore(selectedMatch.teamOneScore);
      setTeamTwoScore(selectedMatch.teamTwoScore);
      setActionFor("scroeupdate");
    }
  }, [selectedMatch]);
  return (
    <Form>
      <Form.Group className="formgroup">
        <Form.Label>Team One Final Score</Form.Label>
        <Form.Control
          type="text"
          placeholder="Score"
          value={teamOneScore}
          onChange={(e) => setTeamOneScore(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="formgroup">
        <Form.Label>Team Two Final Score</Form.Label>
        <Form.Control
          type="text"
          placeholder="Score"
          value={teamTwoScore}
          onChange={(e) => setTeamTwoScore(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="button" onClick={submitForm}>
        Submit
      </Button>
    </Form>
  );
};

export default SaveScoreMatchModal;

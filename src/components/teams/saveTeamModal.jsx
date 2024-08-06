import React from 'react'
import { Form, Button, Col, Row } from "react-bootstrap";
import { Avatar } from "@mui/material";
const SaveTeamModal = () => {
  return (
    <Form>
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Team Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Seed Value</Form.Label>
        <Form.Control
          type="text"
          placeholder="Seed"
        //   value={seed}
        //   onChange={(e) => setSeed(e.target.value)}
        />
      </Form.Group>
      </Col>
      </Row>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Team Logo</Form.Label>
        {/* {logoDisplay !== "" ? ( */}
          <Avatar
            // alt={name}
            // src={logoDisplay}
            sx={{ width: 56, height: 56 }}
            variant="square"
          />
        {/* ) : null} */}
        {/* <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        /> */}
      </Form.Group>
      <Button variant="primary" type="button" 
    //   onClick={submitForm}
      >
        Submit
      </Button>
    </Form>
  )
}

export default SaveTeamModal
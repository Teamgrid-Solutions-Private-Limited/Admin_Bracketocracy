import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { roles, geography, CareerLevel } from "../../constants/Constants";
import { masterDataFormFields } from "../../constants/FormFieldConstants";
import { validationCheckField } from "../global/UtilFunction"; // Ensure this import is correct

const groupNameOptions =
  window.WFMDATA && window.WFMDATA.GroupNames ? window.WFMDATA.GroupNames : [];

const teamNameOptions =
  window.WFMDATA && window.WFMDATA.TeamNames ? window.WFMDATA.TeamNames : [];
  const handleSubmitClick = () => {
    const validation = JSON.parse(JSON.stringify(validationDefault));
  
    validation.enterpriseID = validationCheckField(
      userDetails.enterpriseID,
      MasterDataFormRules.enterpriseID
    );
  
    validation.employeeID = validationCheckField(
      userDetails.employeeID,
      MasterDataFormRules.employeeID
    );
  
    validation.name = validationCheckField(
      userDetails.name,
      MasterDataFormRules.name
    );
  
    validation.geography = validationCheckField(
      userDetails.geography,
      MasterDataFormRules.geography
    );
  
    validation.teamName = validationCheckField(
      userDetails.teamName,
      MasterDataFormRules.teamName
    );
  
    validation.groupName = validationCheckField(
      userDetails.groupName,
      MasterDataFormRules.groupName
    );
  
    validation.supervisor_id = validationCheckField(
      userDetails.supervisor_id,
      MasterDataFormRules.supervisor_id
    );
  
    validation.primary_skill = validationCheckField(
      userDetails.primary_skill,
      MasterDataFormRules.primary_skill
    );
  
    validation.role = validationCheckField(
      userDetails.role,
      MasterDataFormRules.role
    );
  
    validation.careerLevel = validationCheckField(
      userDetails.careerLevel,
      MasterDataFormRules.careerLevel
    );
  
    setFormValidation(validation);
  
    const hasErrors = Object.values(validation).some((field) => field.hasError);
  
    if (!hasErrors) {
      // Proceed with form submission
      console.log("Form submitted successfully with data: ", userDetails);
      // You can add your form submission logic here (e.g., API call)
    }
  };
  const handleLKMPTOChange = (value, field) => {
    let validationCheck = validationCheckField(value, MasterDataFormRules[field]);
    setUserDetails({ ...userDetails, [field]: value });
    setFormValidation({ ...formValidation, [field]: validationCheck });
  };
  const FormMasterDataModal = ({ selectedUser, actionFor }) => {
    const [userDetails, setUserDetails] = useState(
      JSON.parse(JSON.stringify(defaultValueForm))
    );
  
    const [formValidation, setFormValidation] = useState(
      JSON.parse(JSON.stringify(validationDefault))
    );
  
    useEffect(() => {
      if (selectedUser.enterpriseID) {
        setUserDetails(selectedUser);
      } else {
        setUserDetails(JSON.parse(JSON.stringify(defaultValueForm)));
      }
    }, [selectedUser]);
  
    return (
      <Form>
        <div className="masterdata-form-container">
          <div className="flex-wrapper-marterdate">
            <Form.Group
              className="halfwidth-col"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>{masterDataFormFields.enterpriseID}</Form.Label>
              <Form.Control
                disabled={
                  actionFor === "view" || actionFor === "edit" ? true : false
                }
                value={userDetails.enterpriseID}
                type="text"
                placeholder="*****.*****"
                onChange={(e) =>
                  handleLKMPTOChange(e.target.value, "enterpriseID")
                }
              />
              {formValidation.enterpriseID.hasError ? (
                <p className="validation-message">
                  {formValidation.enterpriseID.errorMessage}
                </p>
              ) : null}
            </Form.Group>
            <Form.Group
              className="halfwidth-col"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>{masterDataFormFields.employeeID}</Form.Label>
              <Form.Control
                disabled={actionFor === "view" ? true : false}
                value={userDetails.employeeID}
                type="text"
                placeholder="12345678"
                onChange={(e) =>
                  handleLKMPTOChange(e.target.value, "employeeID")
                }
              />
              {formValidation.employeeID.hasError ? (
                <p className="validation-message">
                  {formValidation.employeeID.errorMessage}
                </p>
              ) : null}
            </Form.Group>
          </div>
  
          {/* Rest of the form groups */}
          {/* ... */}
  
          {actionFor !== "view" ? (
            <div className="flex-wrapper-marterdate">
              <button
                type="button"
                className="btn main-submit-btn"
                onClick={() => handleSubmitClick()}
              >
                SUBMIT
              </button>
            </div>
          ) : null}
        </div>
      </Form>
    );
  };
  
  export default FormMasterDataModal;
      
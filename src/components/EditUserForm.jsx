// Importing necessary dependencies from React and Bootstrap
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { XCircle } from "react-bootstrap-icons";
import { CheckCircle } from "react-bootstrap-icons";

// Functional component representing a form for editing user details
function EditUserForm({
  handleChange,
  handleSave,
  handleCancel,
  editMode,
  userData,
  changesMade,
}) {
  // Check if userData is undefined, log an error, and return null to handle the case when userData is undefined

  if (!userData) {
    console.error("userData is undefined in EditUserForm"); // Add this line
    return null; // Add this line to handle the case when userData is undefined
  }
  // Check if the user is an adult
  const isAdult = userData.age >= 18;
  // Function to validate and update age input
  const validateAgeInput = (value) => {
    if (editMode && !isNaN(value) && value !== "") {
      handleChange("age", value);
    }
  };
  // Function to validate and update country input
  const validateCountryInput = (value) => {
    if (editMode && isNaN(value)) {
      handleChange("country", value);
    }
  };
  // Render the EditUserForm component
  return (
    <>
      {/* Card component containing the form */}
      <Card className="p-3">
        {/* Row for age, gender, and country inputs */}
        <Row className="mb-3">
          <Col>
            {/* Age input */}
            <Form.Label htmlFor="countryName" className="text-secondary">
              Age
            </Form.Label>

            {editMode ? (
              <Form.Control
                size="sm"
                type="number"
                value={userData.age}
                onChange={(e) => validateAgeInput(e.target.value)}
                readOnly={!editMode || !isAdult}
              />
            ) : (
              <p>{userData.age} years</p>
            )}
          </Col>

          <Col>
            {/* Gender input */}
            <Form.Label htmlFor="gender" className="text-secondary">
              Gender
            </Form.Label>

            <Form.Select
              id="gender"
              size="sm"
              onChange={(e) => handleChange("gender", e.target.value)}
              value={userData.gender}
              disabled={!editMode}
            >
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Others">Others</option>
              <option value="Rather not to say">Rather not to say</option>
            </Form.Select>
          </Col>

          <Col>
            {/* Country input */}
            <Form.Label htmlFor="countryName" className="text-secondary">
              Country
            </Form.Label>

            <Form.Control
              size="sm"
              type="text"
              id="countryName"
              value={userData.country}
              onChange={(e) => validateCountryInput(e.target.value)}
              disabled={!editMode}
            />
          </Col>
        </Row>
        {/* Description input */}
        <section>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              value={userData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              readOnly={!editMode}
            />
          </FloatingLabel>
        </section>
        {/* Buttons for cancel and save actions in edit mode */}
        {editMode && (
          <div className="text-end">
            <Card.Link href="#" type="button" onClick={handleCancel}>
              <XCircle color="red" size={16} />
            </Card.Link>

            <Card.Link
              href="#"
              type="button"
              onClick={handleSave}
              disabled={!changesMade}
            >
              <CheckCircle color="green" size={16} />
            </Card.Link>
          </div>
        )}
      </Card>
    </>
  );
}
// Exporting the EditUserForm component as the default export
export default EditUserForm;

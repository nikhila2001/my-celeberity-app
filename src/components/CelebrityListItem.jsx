// Importing necessary dependencies from React and Bootstrap
import { useEffect, useState } from "react";
import EditUserForm from "./EditUserForm";
import DeleteConfirmationButton from "./DeleteConfirmationButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Trash3 } from "react-bootstrap-icons";
import { Pencil } from "react-bootstrap-icons";

// Functional component representing an item in the celebrity list
function CelebrityListItem({ celebrities }) {
  // Initializing user data with information derived from the provided celebrities object
  const initialUserData = {
    age: calculateAge(celebrities.dob),
    gender: celebrities.gender,
    country: celebrities.country,
    description: celebrities.description,
  };

  // State variables to manage the edit mode, changes made, user data, and delete confirmation
  const [editMode, setEditMode] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [userData, setUserData] = useState(initialUserData);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  // Function to handle changes in the user data
  const handleChange = (key, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    setChangesMade(true);
  };
  // Function to handle saving changes
  const handleSave = () => {
    setEditMode(false);
    setChangesMade(false);
  };
  // Function to handle canceling changes
  const handleCancel = () => {
    setUserData(initialUserData);
    setEditMode(false);
    setChangesMade(false);
  };
  // Function to toggle edit mode
  const handleToggleEditMode = () => {
    setEditMode(!editMode);
    setChangesMade(false);
  };
  // Function to handle displaying the delete confirmation dialog
  const handleDialog = () => {
    // Perform deletion logic here, e.g., invoke a function from the parent component
    // to delete the celebrity
    setShowDeleteDialog(true);
  };
  // Function to handle user deletion
  const handleDelete = () => {
    setConfirmDelete(true);
    setShowDeleteDialog(false);
    setUserData("");
  };

  // Render the CelebrityListItem component
  return (
    <>
      {/* Display user details such as age, gender, and country */}
      <Row>
        <Col>
          <p className="text-secondary">Age</p>
          <p>{`${userData.age} Years`}</p>
        </Col>

        <Col>
          <p className="text-secondary">Gender</p>
          <p>{userData.gender}</p>
        </Col>

        <Col>
          <p className="text-secondary">Country</p>
          <p>{userData.country}</p>
        </Col>
      </Row>
      {/* Display user description */}
      <section>
        <Card.Title className="text-secondary">Description</Card.Title>
        <p>{userData.description}</p>
      </section>
      {/* Render the EditUserForm component if in edit mode */}
      {editMode ? (
        <EditUserForm
          handleChange={handleChange}
          handleCancel={handleCancel}
          handleSave={handleSave}
          editMode={editMode}
          userData={userData}
          changesMade={changesMade}
        />
      ) : (
        ""
      )}

      {/* Buttons for delete and edit actions */}
      <div className="text-end">
        <Card.Link href="#" type="button" onClick={handleDialog}>
          <Trash3 color="red" size={16} />
        </Card.Link>
        <Card.Link href="#" type="button" onClick={handleToggleEditMode}>
          <Pencil size={16} />
        </Card.Link>
      </div>
      {/* Delete confirmation dialog */}
      <DeleteConfirmationButton
        show={showDeleteDialog}
        onHide={() => setShowDeleteDialog(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
// Function to calculate age based on date of birth
function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();

  if (isNaN(birthDate.getTime())) {
    // Invalid date format, return an error value or handle it accordingly
    return "Invalid date";
  }

  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Check if the birthday has occurred this year
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  } else {
    return age;
  }
}
// Exporting the CelebrityListItem component as the default export
export default CelebrityListItem;

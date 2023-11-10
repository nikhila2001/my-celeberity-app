// Importing necessary dependencies from React and Bootstrap
import { useState } from "react";
import SearchBar from "./SearchBar";
import CelebrityListItem from "./CelebrityListItem";
import celebrities from "../data/celebrities.json";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { PlusLg } from "react-bootstrap-icons";
import { DashLg } from "react-bootstrap-icons";

// Functional component representing the CelebrityList
function CelebrityList() {
  // State variables to manage expanded accordions and search query
  const [expandedAccordions, setExpandedAccordions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle accordion toggle
  const handleToggle = (index) => {
    if (expandedAccordions.includes(index)) {
      setExpandedAccordions(
        expandedAccordions.filter((item) => item !== index)
      );
    } else {
      setExpandedAccordions([...expandedAccordions, index]);
    }
  };

  // Function to handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // CustomToggle component to handle accordion button clicks
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      handleToggle(Number(eventKey))
    );

    return (
      <a type="button" href="#" onClick={decoratedOnClick}>
        {children}
      </a>
    );
  }

  // Render the CelebrityList component
  return (
    <>
      {/* SearchBar component for filtering celebrities */}
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      {/* Accordion component to display the list of celebrities */}
      <Accordion className="">
        {celebrities.map((user, index) => (
          // Card component for each celebrity
          <Card key={index} className="my-3 border border-secondary ">
            <Card.Header>
              <div className="d-flex justify-content-between p-2">
                <div className="d-flex">
                  {/* Displaying the profile picture and name of the celebrity */}
                  <Image
                    src={user.picture}
                    alt="profile"
                    width={40}
                    height={40}
                    roundedCircle
                  />
                  <p className="m-2">
                    <b>{`${user.first} ${user.last}`}</b>{" "}
                  </p>
                </div>
                {/* CustomToggle component for accordion button */}
                <CustomToggle eventKey={index.toString()}>
                  {expandedAccordions.includes(index) ? <DashLg /> : <PlusLg />}
                </CustomToggle>
              </div>
            </Card.Header>
            {/* Accordion.Collapse component to display additional details */}
            <Accordion.Collapse eventKey={index.toString()} className="p-3">
              <CelebrityListItem celebrities={user} />
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  );
}

// Exporting the CelebrityList component as the default export
export default CelebrityList;

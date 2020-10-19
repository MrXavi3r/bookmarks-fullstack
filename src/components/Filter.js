import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap/";

const Filter = () => {
  
  return (
    <DropdownButton
      className="bxs rounded filter-btn text-dark"
      title="FILTER"
      id="dropdown-menu"
      size="lg"
    >
      <Dropdown.Item eventKey="5">5 Stars</Dropdown.Item>
      <Dropdown.Item eventKey="4">4 Stars</Dropdown.Item>
      <Dropdown.Item eventKey="3">3 Stars</Dropdown.Item>
      <Dropdown.Item eventKey="2">2 Stars</Dropdown.Item>
      <Dropdown.Item eventKey="1">1 Star</Dropdown.Item>
    </DropdownButton>
  );
};

export default Filter;

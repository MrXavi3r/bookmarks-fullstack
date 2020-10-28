import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap/";

const Filter = (props) => {
  let filterTitle;

  if (props.ratingFilter === 0) {
    filterTitle = "ALL";
  } else if (props.ratingFilter === 5) {
    filterTitle = "5 Stars";
  } else {
    filterTitle = `${props.ratingFilter}+ Stars`;
  }

  return (
    <DropdownButton
      className="bxs rounded filter-btn text-dark"
      title={filterTitle}
      id="dropdown-menu"
      size="lg"
      onSelect={(eventKey) => {
        props.filterBookmarks(eventKey);
      }}
      // as="select"
    >
      <Dropdown.Item eventKey={0}>ALL</Dropdown.Item>
      <Dropdown.Item eventKey={5}>5 Stars</Dropdown.Item>
      <Dropdown.Item eventKey={4}>4+ Stars</Dropdown.Item>
      <Dropdown.Item eventKey={3}>3+ Stars</Dropdown.Item>
      <Dropdown.Item eventKey={2}>2+ Stars</Dropdown.Item>
      <Dropdown.Item eventKey={1}>1+ Stars</Dropdown.Item>
    </DropdownButton>
  );
};

export default Filter;

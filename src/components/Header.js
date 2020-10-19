import React from "react";
import Filter from './Filter'
import { Container, Row, Col, Button } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTag, faBookmark } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <Container fluid className="mt-2 mb-5">
      <Row className="mb-5">
        <Col className="h1 text-center">
          <Container className="gr1 d-inline rounded-circle mr-2 bxs">
            <FontAwesomeIcon icon={faUserTag} />
          </Container>
          My BookMarks
        </Col>
      </Row>
      <Row className="d-flex justify-content-around">
        <Button size="sm" className="bxs d-flex gr2">
          <h3 className="mr-3 mb-0">+NEW</h3>
          <FontAwesomeIcon icon={faBookmark} size="2x" className="my-auto" />
        </Button>
        <Filter />
      </Row>
    </Container>
  );
};

export default Header;

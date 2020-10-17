import React from "react";
import { Container, Row, Accordion, Card, Col } from "react-bootstrap/";

const Bookmark = (props) => {
  return (
    <Container>
      <Row>
        <Accordion className="w-100">
          <Accordion.Toggle
            variant="link"
            eventKey={props.id}
            as={Card.Header}
            className="bg-light rounded"
          >
            <Row>
              <Col className="d-flex justify-content-start">{props.title}</Col>
              <Col className="d-flex justify-content-end">{props.rating}</Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.id}>
            <p>{props.description}</p>
          </Accordion.Collapse>
        </Accordion>
      </Row>
    </Container>
  );
};

export default Bookmark;

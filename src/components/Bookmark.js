import React from "react";
import { Container, Row, Accordion, Card, Col } from "react-bootstrap/";
import BookmarkExpand from "./BookmarkExpand";

const Bookmark = (props) => {
  
  return (
    <Container>
      <Row>
        <Accordion className="w-100">
          <Accordion.Toggle
            variant="link"
            eventKey={props.id}
            as={Card.Header}
            className="bg-light rounded gr1 border-secondary bxs"
          >
            <Row>
              <Col className="d-flex justify-content-start align-items-center text-uppercase h5 mb-0">
                <a
                  href={props.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link text-secondary"
                >
                  {props.title}
                </a>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                {props.stars}
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.id}>
            <BookmarkExpand
              title={props.title}
              url={props.url}
              rating={props.rating}
              stars={props.stars}
              description={props.description}
              id={props.id}
              deleteBookmark={props.deleteBookmark}
            />
          </Accordion.Collapse>
        </Accordion>
      </Row>
    </Container>
  );
};

export default Bookmark;
 
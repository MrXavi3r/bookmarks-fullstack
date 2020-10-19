import React from "react";
import { Row, Form, Button } from "react-bootstrap/";

const BookmarkExpand = (props) => {
    return (
        <Form className="my-3 w-75 mx-auto">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>TITLE</Form.Label>
                <Form.Control type="text" placeholder={props.title} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>URL</Form.Label>
                <Form.Control type="text" placeholder={props.url} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>RATING</Form.Label>
                <Form.Control as="select" defaultValue={props.rating}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>DESCRIPTION</Form.Label>
                <Form.Control as="textarea" placeholder={props.description} rows={3} />
              </Form.Group>
              <Row className="d-flex justify-content-around mx-3">
              <Button variant="success" data-id={props.id}>UPDATE</Button>
              <Button variant="danger" data-id={props.id}>DELETE</Button>
              </Row>
            </Form>
    )
}

export default BookmarkExpand

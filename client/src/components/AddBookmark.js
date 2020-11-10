import React, { Component } from "react";
import { Form, Col, InputGroup, Button } from "react-bootstrap";

export class AddBookmark extends Component {
  render() {
    return (
      <Form onSubmit={this.props.addBookmark} className="mb-5">
        <Form.Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="add-form-title"
            className="mx-auto"
          >
            <Form.Label>TITLE</Form.Label>
            <Form.Control required type="text" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="add-form-url"
            className="mx-auto"
          >
            <Form.Label>URL</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  http://
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group
            as={Col}
            md="3"
            controlId="add-form-rating"
            className="mx-auto"
          >
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" min="1" max="5" required />
            <Form.Control.Feedback type="invalid">
              Please provide a rating between 1 and 5.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group
            as={Col}
            md="6"
            controlId="add-form-desc"
            className="mx-auto"
          >
            <Form.Label>DESCRIPTION</Form.Label>
            <Form.Control type="text" as="textarea" required />
            <Form.Control.Feedback type="invalid">
              Please provide a description.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row className="d-flex justify-content-around mt-3">
          <Button type="submit" variant="success">
            SUBMIT
          </Button>
          <Button type="reset" variant="danger" onClick={this.props.cancelAdd}>
            CANCEL
          </Button>
        </Form.Row>
      </Form>
    );
  }
}

export default AddBookmark;

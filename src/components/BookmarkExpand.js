import React from "react";
import { Row, Form, Button } from "react-bootstrap/";

const BookmarkExpand = (props) => {
    return (
        <Form className="my-3 w-75 mx-auto">
              <Form.Group controlId="expanded-form-title">
                <Form.Label>TITLE</Form.Label>
                <Form.Control type="text" defaultValue={props.title} />
              </Form.Group>
              <Form.Group controlId="expanded-form-url">
                <Form.Label>URL</Form.Label>
                <Form.Control type="text" defaultValue={props.url} />
              </Form.Group>
              <Form.Group controlId="expanded-form-rating">
                <Form.Label>RATING</Form.Label>
                <Form.Control as="select" defaultValue={props.rating}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="expanded-form-desc">
                <Form.Label>DESCRIPTION</Form.Label>
                <Form.Control as="textarea" defaultValue={props.description} rows={3} />
              </Form.Group>
              <Row className="d-flex justify-content-around mx-3">
              <Button variant="success" id={props.id} onClick={() => props.updateBookmark(props.id)}>UPDATE</Button>
              <Button variant="danger" id={props.id} onClick={e => props.deleteBookmark(e)}>DELETE</Button>
              </Row>
            </Form>
    )
}

export default BookmarkExpand

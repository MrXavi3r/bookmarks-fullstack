import React from "react";
import { Row, Form, Button } from "react-bootstrap/";

class BookmarkExpand extends React.Component {
  // state = {
  //   title: this.props.title,
  //   url: this.props.url,
  //   rating: this.props.rating,
  //   desc: this.props.description
  // };;

  // changeTitle = (ev) => {
  //   this.setState({
  //     title: ev.target.value,
  //   });
  // };

  // changeURL = (ev) => {
  //   this.setState({
  //     url: ev.target.value,
  //   });
  // };

  // changeRating = (ev) => {
  //   this.setState({
  //     rating: ev.target.value,
  //   });
  // };

  // changeDescription = (ev) => {
  //   this.setState({
  //     desc: ev.target.value,
  //   });
  // };

  // handleUpdateBookmark = (event, id) => {
  //   event.preventDefault();
  //   this.setState(() => {
  //     let patchBookmark = this.state;
  //     let edited = Object.assign(
  //       this.props.bookmarks.find((book) => book.id === id),
  //       patchBookmark
  //     );

  //     console.log(edited)

  //     return {
  //       bookmarks: edited
  //     };
  //   });
  // };

  //each form could have book id
  //onsubmit 
  render() {
    return (
      // consider implementing controlled input components for update bookmark func
      <Form
        className="my-3 w-75 mx-auto"
        // onSubmit={(ev) => this.props.updateBookmark(ev, this.props.id)}
      >
        <Form.Group controlId={`expanded-form-title-${this.props.id}`}>
          <Form.Label>TITLE</Form.Label>
          <Form.Control
            type="text"
            // onChange={this.changeTitle}
            defaultValue={this.props.title}
            required
          />
        </Form.Group>
        <Form.Group controlId={`expanded-form-url-${this.props.id}`}>
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            // onChange={this.changeURL}
            defaultValue={this.props.url}
            required
          />
        </Form.Group>
        <Form.Group controlId={`expanded-form-rating-${this.props.id}`}>
          <Form.Label>RATING</Form.Label>
          <Form.Control
            as="select"
            // onChange={this.changeRating}
            defaultValue={this.props.rating}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId={`expanded-form-desc-${this.props.id}`}>
          <Form.Label>DESCRIPTION</Form.Label>
          <Form.Control
            as="textarea"
            // onChange={this.changeDescription}
            defaultValue={this.props.description}
            required
            rows={3}
          />
        </Form.Group>
        <Row className="d-flex justify-content-around mx-3">
          <Button
            variant="danger"
            id={this.props.id}
            onClick={(e) => this.props.deleteBookmark(e)}
          >
            DELETE
          </Button>
          <Button variant="success" onClick={() => this.props.updateBookmark(this.props.id)}>
            UPDATE
          </Button>
        </Row>
      </Form>
    );
  }
}

export default BookmarkExpand;

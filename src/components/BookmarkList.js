import React, { Component } from "react";
import { Container, Accordion } from "react-bootstrap/";
import Bookmark from "./Bookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


class BookmarkList extends Component {

  handleStarRating = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <FontAwesomeIcon
            icon={faStar}
            className="mx-1 text-warning"
            size="lg"
            key={i}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon icon={faStar} className="mx-1" size="lg" key={i} />
        );
      }
    }
    return stars;
  };
  render() {
    return (
      <Container>
      <Accordion className="w-100 mx-auto">
        {this.props.bookmarks.map((bookmark) => {
          return (
            <Bookmark
              title={bookmark.title}
              url={bookmark.url}
              rating={bookmark.rating}
              stars={this.handleStarRating(bookmark.rating)}
              description={bookmark.desc}
              id={bookmark.id}
              key={bookmark.id}
              bookmarks={this.props.bookmarks}
              deleteBookmark={this.props.deleteBookmark}
              updateBookmark={this.props.updateBookmark}
            />
          );
        })}
        </Accordion>
      </Container>
    );
  }
}

export default BookmarkList;

import React, { Component } from "react";
import { Container } from "react-bootstrap/";
import Bookmark from './Bookmark';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class BookmarkList extends Component {

    state = {
        bookmarks: [
          {
            title: 'google',
            url: 'http://www.google.com',
            rating: 5,
            desc: 'this is google',
            id: 374211
          },
          {
            title: 'hotmail',
            url: 'http://www.hotmail.com',
            rating: 3,
            desc: 'this is hotmail',
            id: 907647
          },
          {
            title: 'apple',
            url: 'http://www.apple.com',
            rating: 3,
            desc: 'this is apple',
            id: 431243
          },
          {
            title: 'yahoo',
            url: 'http://www.yahoo.com',
            rating: 1,
            desc: 'this is yahoo',
            id: 654390
          },
          {
            title: 'amazon',
            url: 'http://www.amazon.com',
            rating: 5,
            desc: 'this is amazon',
            id: 985687
          },
          {
            title: 'youtube',
            url: 'http://www.youtube.com',
            rating: 5,
            desc: 'this is youtube',
            id: 768776
          }
        ]
    }

    handleStarRating = (rating) => {
      let stars = [];
      for(let i = 0; i < rating; i++){
        stars.push(<FontAwesomeIcon icon={faStar} className="mx-1 text-warning" size="lg" />)
      }
      return stars
    }
  render() {
    return (<Container>
      {this.state.bookmarks.map(bookmark => {
        return <Bookmark 
          title={bookmark.title}
          url={bookmark.url}
          rating={this.handleStarRating(bookmark.rating)}
          description={bookmark.desc} 
          id={bookmark.id}
          key={bookmark.id}
        />
      })}
    </Container>);
  }
}

export default BookmarkList;

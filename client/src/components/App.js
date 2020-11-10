import React from "react";
import "../App.css";
import Header from "./Header";
import BookmarkList from "./BookmarkList";
import AddBookmark from "./AddBookmark";
const { v4: uuidv4 } = require("uuid");

const defaultBookmarks = [
  {
    title: "hard coded",
    url: "someurl",
    rating: 3,
    desc: "description",
    id: "566b-769j-khg0-986b-5hg6",
  },
];
class App extends React.Component {
  state = {
    addingBookmark: false,
    bookmarks: [],
    ratingFilter: 0,
  };

  componentDidMount() {
    this.setState({
      bookmarks: defaultBookmarks,
    });
  }

  handleAddNewBtnClicked = (event) => {
    event.preventDefault();
    this.setState({
      addingBookmark: true,
    });
  };

  handleCancelBtnClicked = (event) => {
    event.preventDefault();
    this.setState({
      addingBookmark: false,
    });
  };

  handleAddNewBookmark = (event) => {
    event.preventDefault();

    let title = document.getElementById("add-form-title").value;
    let url = document.getElementById("add-form-url").value;
    let rating = +document.getElementById("add-form-rating").value;
    let desc = document.getElementById("add-form-desc").value;

    let newBookmark = {
      title,
      url,
      rating,
      desc,
      id: uuidv4(),
    };

    defaultBookmarks.push(newBookmark);

    this.setState({
      bookmarks: defaultBookmarks,
      addingBookmark: false,
    });
  };

  // consider adding a ComponentWillUpdate or ComponentDidUpdate to App or Bookmark/bookmarkList component to fix this issue
  handleDeleteBookmark = (event) => {
    event.preventDefault();
    let id = event.target.id;

    this.setState({
      bookmarks: this.state.bookmarks.filter((bookmark) => bookmark.id !== id),
    });
  };

  handleUpdateBookmark = (id) => {
    let title = document.getElementById(`expanded-form-title-${id}`).value;
    let url = document.getElementById(`expanded-form-url-${id}`).value;
    let rating = +document.getElementById(`expanded-form-rating-${id}`).value;
    let desc = document.getElementById(`expanded-form-desc-${id}`).value;


    let patchBookmark = {
      title,
      url,
      rating,
      desc,
    };


    this.setState(() => {
      let bookArray = [...this.state.bookmarks];
      Object.assign(
        bookArray.find((book) => book.id === id),
        patchBookmark
      );

      return {
        bookmarks: bookArray,
      };
    });
  };

  handleFilterBookmarks = (rating) => {
    this.setState({
      ratingFilter: rating || 0,
      bookmarks: defaultBookmarks.filter(
        (bookmark) => bookmark.rating >= rating
      ),
    });
  };

  render() {
    return (
      <div className="App container-lg">
        <Header
          addForm={this.handleAddNewBtnClicked}
          filterBookmarks={this.handleFilterBookmarks}
          ratingFilter={this.state.ratingFilter}
        />
        {this.state.addingBookmark ? (
          <AddBookmark
            addBookmark={this.handleAddNewBookmark}
            cancelAdd={this.handleCancelBtnClicked}
          />
        ) : null}
        <BookmarkList
          bookmarks={this.state.bookmarks}
          deleteBookmark={this.handleDeleteBookmark}
          updateBookmark={this.handleUpdateBookmark}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import "../App.css";
import Header from "./Header";
import BookmarkList from "./BookmarkList";
import AddBookmark from "./AddBookmark";
const { v4: uuidv4 } = require("uuid");

class App extends React.Component {
  state = {
    addingBookmark: false,
    bookmarks: [],
  };

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
    let rating = document.getElementById("add-form-rating").value;
    let desc = document.getElementById("add-form-desc").value;

    let newBookmark = {
      title: title,
      url: url,
      rating: rating,
      desc: desc,
      id: uuidv4(),
    };

    this.setState((prevState) => {
      return {
        bookmarks: [...prevState.bookmarks, newBookmark],
      };
    });
    this.setState({
      addingBookmark: false,
    });
  };

  handleDeleteBookmark = (event) => {
    event.preventDefault();
    let id = event.target.id;

    this.setState((prevState) => {
      return {
        bookmarks: prevState.bookmarks.filter((bookmark) => bookmark.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="App container-lg">
        <Header addForm={this.handleAddNewBtnClicked} />
        {this.state.addingBookmark ? (
          <AddBookmark
            addBookmark={this.handleAddNewBookmark}
            cancelAdd={this.handleCancelBtnClicked}
          />
        ) : null}
        <BookmarkList
          bookmarks={this.state.bookmarks}
          deleteBookmark={this.handleDeleteBookmark}
        />
      </div>
    );
  }
}

export default App;

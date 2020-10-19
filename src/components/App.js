import React from "react";
import "../App.css";
import Header from "./Header";
import BookmarkList from "./BookmarkList";
import AddBookmark from "./AddBookmark";
const { v4: uuidv4 } = require("uuid");

class App extends React.Component {
  state = {
    addingBookmark: false,
    bookmarks: [
      {
        title: "google",
        url: "http://www.google.com",
        rating: 5,
        desc: "this is google",
        id: 374211,
      },
      {
        title: "hotmail",
        url: "http://www.hotmail.com",
        rating: 3,
        desc: "this is hotmail",
        id: 907647,
      },
      {
        title: "hard coded bookmark",
        url: "http://www.apple.com",
        rating: 3,
        desc: "this is apple",
        id: 431243,
      },
      {
        title: "yahoo",
        url: "http://www.yahoo.com",
        rating: 1,
        desc: "this is yahoo",
        id: 654390,
      },
      {
        title: "amazon",
        url: "http://www.amazon.com",
        rating: 5,
        desc: "this is amazon",
        id: 985687,
      },
      {
        title: "youtube",
        url: "http://www.youtube.com",
        rating: 4,
        desc: "this is youtube",
        id: 768776,
      },
    ],
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

    let title = document.getElementById('add-form-title').value
    let url = document.getElementById('add-form-url').value
    let rating = document.getElementById('add-form-rating').value
    let desc = document.getElementById('add-form-desc').value

    let newBookmark = {
      title: title,
      url: url,
      rating: rating,
      desc: desc,
      id: uuidv4(),
    };

    this.setState({
      bookmarks: [...this.state.bookmarks, newBookmark]
    })
    this.setState({
      addingBookmark: false,
    });
  };

  render() {
    return (
      <div className="App container-lg">
        <Header addForm={this.handleAddNewBtnClicked} />
        {this.state.addingBookmark ? (
          <AddBookmark addBookmark={this.handleAddNewBookmark} cancelAdd={this.handleCancelBtnClicked} />
        ) : null}
        <BookmarkList bookmarks={this.state.bookmarks} />
      </div>
    );
  }
}

export default App;

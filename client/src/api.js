import React from 'react';
import axios from "axios";


async function getBookmarks() {
    try {
      const res = await axios.get("https://thinkful-list-api.herokuapp.com/xavier/bookmarks");

      dispatch({
        type: "GET BOOKMARKS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deleteBookmark(id) {
    try {
      await axios.delete(`https://thinkful-list-api.herokuapp.com/xavier/bookmarks/${id}`);

      dispatch({
        type: "DELETE_BOOKMARK",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addBookmark(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `https://thinkful-list-api.herokuapp.com/xavier/bookmarks`,
        transaction,
        config
      );

      dispatch({
        type: "ADD_BOOKMARK",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import React from "react";
import Post from "./Posts";

class App extends React.Component {
  state = { posts: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }

  handleUpdate = async (id, value) => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            title: `${value}`,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      result.status === 200 &&
        this.setState({
          posts: this.state.posts.map((post) =>
            post.id === id ? { ...post, title: value, body: value } : post
          ),
        });
    } catch (err) {
      console.log(err);
    }
  };
  handleRemove = async (id) => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      result.status === 200 &&
        this.setState({
          posts: this.state.posts.filter((post) => post.id !== id),
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div
        css={css`
          max-width: 1200px;
          margin: 20px auto;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding: 20px 15px;
        `}
      >
        {this.state.posts.map((post) => (
          <Post
            post={post}
            handleUpdate={this.handleUpdate}
            handleRemove={this.handleRemove}
            key={post.id}
          />
        ))}
      </div>
    );
  }
}

export default App;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { PureComponent } from "react";
import TextField from "@mui/material/TextField";

export class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentWillUnmount() {
    console.log("Operation completed successfully");
  }
  componentDidUpdate() {
    console.log("Operation completed successfully");
  }
  render() {
    return (
      <div
        css={css`
          width: 300px;
          min-height: 150px;
          border: 1px solid gray;
          border-radius: 5px;
          box-shadow: 3px -6px 3px 2px #afadad;
          display: flex;
          flex-direction: column;
          padding: 10px;
        `}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          css={css`
            width: 80%;
            min-height: 30px;
            padding: 10px 15px;
            margin: auto;
          `}
          defaultValue={this.props.post.title}
          ref={this.myRef}
        />

        <TextField
          id="outlined-basic"
          variant="outlined"
          css={css`
            width: 80%;
            min-height: 50px;
            padding: 10px 15px;
            margin: auto;
          `}
          defaultValue={this.props.post.body}
          ref={this.myRef}
        />

        <button
          css={css`
            width: 80px;
            margin: auto;
            padding: 8px 10px;
            background: #47a9e5d1;
            border-radius: 5px;
            margin-bottom: 10px;
            &:hover {
              background: #216289d1;
            }
          `}
          onClick={() =>
            this.props.handleUpdate(
              this.props.post.id,
              this.myRef.current.value
            )
          }
        >
          Update
        </button>

        <button
          css={css`
            width: 80px;
            margin: auto;
            background: #47a9e5d1;
            border-radius: 5px;
            &:hover {
              background: red;
            }
          `}
          onClick={() => this.props.handleRemove(this.props.post.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Post;

import React, { useState } from "react";
import axios from "axios";
const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("beginning");
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    console.log("ending");
    setTitle("");
    console.log("title reset");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary ">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;

import axios from "axios";
import React, { useState } from "react";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    const data = {
      title,
      body,
      user_id:localStorage.getItem("user_id")
    };
    await axios.post("http://localhost:4500/notes/add", data, {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Add Post</button>
    </div>
  );
};

import { useState } from "react";

const CommentsPage = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const comm = await res.json();
    setData(comm);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const comm = await res.json();
    console.log(comm);
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  const handleUpdate = async (e, commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ comment: e.target.value }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };





  return (
    <div>
      <button onClick={fetchComments}>Load Comments</button>
      <br />
      <input
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button onClick={handleSubmit}>send comment</button>
      <br />
      <br />
      <br />
      {data?.map((item) => (
        <div key={item.id}>
          {item.id} -
          <input style={{ width: `100%` }} type="text" value={item.text} onChange={e => handleUpdate(e, item.id)} />{" "}
          <button onClick={() => deleteComment(item.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CommentsPage;

import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find((comment) => comment.id === Number(commentId));

  if (req.method === "GET") {
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const index = comments.findIndex(
      (comment) => comment.id === Number(commentId)
    );
    comments.splice(index, 1);
    comments = []
    res.status(200).json(comment);
  } else if (req.method === "PATCH") {

    const { comment: editComment } = req.body;

    const index = comments.findIndex(
        (comment) => comment.id === Number(commentId)
    );
    comments[index].text = editComment

    res.status(200).json(comment);
  }
}

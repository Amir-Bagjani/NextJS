import React from "react";

const PostDetail = ({ post }) => {
  return (
    <h1>
      {post.id} - {post.title}
      <br />
      <hr />"{post.body}"
    </h1>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) =>{
      return {
          params: { postId: `${post.id}`}
      }
  })
  return {
    // paths: [
    //   { params: { postId: "1" } },
    //   { params: { postId: "2" } },
    //   { params: { postId: "3" } },
    // ],
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default PostDetail;

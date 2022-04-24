import React from "react";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <>
      <h1>All Posts</h1>

        {posts?.map((post) => (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id} - {post.title} 
                <hr />
              </h2>
            </Link>
          </div>
        ))}

    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.splice(0, 5),
    },
  };
}

export default Posts;

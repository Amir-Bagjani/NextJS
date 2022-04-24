import { useRouter } from "next/router";

const Posts = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>This is Post page</h1>
      <button onClick={handleClick}>Go to Homepage</button>
    </>
  );
};

export default Posts;

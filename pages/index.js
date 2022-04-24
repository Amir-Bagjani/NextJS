import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>This Is Home Page</h1>
      <Link href={"/posts"}>
        <a>Go to Posts</a>
      </Link>
    </>
  );
};

export default Home;

import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>This Is Home Page</h1>
      
      <Link href={"/todos"}>
        <a>Go to Todos</a>
      </Link>
    </>
  );
};

export default Home;

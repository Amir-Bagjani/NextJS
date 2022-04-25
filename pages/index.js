import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>This Is Home Page</h1>
      
      <Link href={"/dashboard"}>
        <a>Go to Dashboard</a>
      </Link>
    </>
  );
};

export default Home;

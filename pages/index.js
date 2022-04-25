import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>This Is Home Page</h1>
      <Link href={"/about"}>
        <a>Go to About</a>
      </Link><br />
      <Link href={"/login"}>
        <a>Go to Login</a>
      </Link>
    </main>
  );
};

export default Home;

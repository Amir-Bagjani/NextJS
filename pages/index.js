import { useSession } from "next-auth/react";
import Image from "next/image";
import style from "../styles/Home.module.css";

const Home = () => {
  const { data: session, status } = useSession();
  console.log({session});
  return (
    <main className={style.main}>
      <h1>This is Home page</h1>
      {status === "authenticated" && <p>Signed in as {session.user.email}</p>}
      {status === "authenticated" && <img src={session.user.image} width='100' height='100' />}
    </main>
  );
};

export default Home;

import style from "../styles/About.module.css";
import { useSession, getSession } from "next-auth/react";

const About = ({ data }) => {
  const { data: session, status } = useSession();
  console.log({session});
  return (
    <main className={style.main}>
      <h1>This is Blog page</h1>
      <h1>{data}</h1>
      <h1>{session && JSON.stringify(session, null, 2)}</h1>
      <h1>{!session && <p>Access Denied</p>}</h1>
    </main>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
      data: session ? "All data" : "Just Free data not all",
    },
  };
}

export default About;

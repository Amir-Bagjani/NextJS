import style from "../styles/About.module.css";
import { useSession, getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  // const { data: session, status } = useSession();
  // console.log({ loading });
  // console.log({ session });

  useEffect(() => {
    const secure = async () => {
      const sessionn = await getSession();
      console.log(sessionn);
      if (!sessionn) {
        signIn();
      } else {
        setLoading(false);
      }
    };

    secure();
  }, []);

  // if (loading) {
  //   <main className={style.main}>Loading</main>;
  // }

  return (
    <>
      {!loading && (
        <main className={style.main}>
          {/* {status === "unauthenticated" && <h1>Access Denied</h1>} */}
          {/* {status === "loading" && <h1>Loading...</h1>} */}

          <h1>
            This is{" "}
            <strong style={{ color: `red` }}>{session?.user?.name}'s</strong>{" "}
            Dashboard page
          </h1>

          {/* {status === "authenticated" && (
        <h1>
          This is{" "}
          <strong style={{ color: `red` }}>{session.user.name}'s</strong>{" "}
          Dashboard page
        </h1>
      )} */}
        </main>
      )}
    </>
  );
};

export default Dashboard;

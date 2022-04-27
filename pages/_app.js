import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/navbar.css";
// import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
    // </Layout>
  );
}

export default MyApp;

import Header from "./Header";
import Footer from "./Footer";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <Header />
      {children}
      <Footer />
    </SessionProvider>
  );
};

export default Layout;

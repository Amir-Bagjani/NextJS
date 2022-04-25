import Footer from "../components/Footer";

const Login = () => {
  return <main>Login</main>;
};

Login.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

export default Login;

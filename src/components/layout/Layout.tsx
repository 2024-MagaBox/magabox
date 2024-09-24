import Footer from "./Footer";
import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="my-40">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

import Footer from "./Footer";
import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-32 py-10">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

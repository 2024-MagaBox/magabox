import Footer from "./Footer";
import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="h-[600px]">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

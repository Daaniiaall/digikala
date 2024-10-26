import Footer from "./Footer";
import Header from "./Header";

const Layout  = ({children}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <div style={{minHeight:"800px"}}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;

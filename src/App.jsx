import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="content-background">
        <Outlet />
      </div>
      <div className="footer-background">
        <Footer />
      </div>
    </>
  );
}
export default App;

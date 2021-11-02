import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
// import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Switch>
          <div id="content">
            <TopBar />
            <div className="container-fluid">
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="*">
                {/* <Error404></Error404> */}
              </Route>
            </div>
          </div>
        </Switch>
        <Footer />
      </div>
             
    </Router>
  );
}

export default App;

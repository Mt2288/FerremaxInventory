import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Home from "./pages/dashboard/Home";
import Products from "./pages/products/Products";
import Users from './pages/users/Users';
// import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <div id="content-wrapper" className="d-flex flex-column">
        <Switch>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="*">
            {/* <Error404></Error404> */}
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;

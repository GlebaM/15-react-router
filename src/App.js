// import styled from "styled-components";
import { Fade } from "./components/animations/Fade";
import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <div>
      <MainHeader />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <CSSTransition
              in
              timeout={600}
              unmountOnExit
              classNames="fade"
              appear
            >
              <Welcome />
            </CSSTransition>
          </Route>
          <Route path="/products" exact>
            <Fade
              in={true}
              timeout={600}
              unmountOnExit
              classNames="fade"
              appear
            >
              <Products />
            </Fade>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;

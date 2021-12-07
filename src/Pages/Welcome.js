import { Route, useHistory, useLocation } from "react-router-dom";
import { Fade } from "../components/animations/Fade";

const Welcome = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const redirectToNewUser = () => {
    if (location === "/welcome/new-user") {
      return;
    } else history.push("/welcome/new-user");
  };
  return (
    <section>
      <h1>The Welcome Page</h1>
      <button onClick={redirectToNewUser}>New user</button>
      <Route path="/welcome/new-user">
        <Fade in={true} timeout={500} unmountOnExit classNames="fade" appear>
          <p>Welcome new user!</p>
        </Fade>
      </Route>
    </section>
  );
};

export default Welcome;

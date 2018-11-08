import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useAuth } from "./context/auth-context";
import Home from "./routes/home";
import SignUp from "./routes/sign-up";
import Login from "./routes/login";
import Jobs from "./routes/jobs";

export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container-fluid">
      {isLoggedIn ? (
        <Switch>
          <Route exact path="/" component={Jobs} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      )}
    </div>
  );
}

// function PrivateRoute({ component: Component, ...props }) {
//   const { isLoggedIn } = useAuth();

//   return (
//     <Route
//       render={props =>
//         !isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
//       }
//       {...props}
//     />
//   );
// }

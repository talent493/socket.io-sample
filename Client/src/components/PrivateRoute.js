import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../context/GlobalContext";

function PrivateRoute({ component: Component, path, admin, ...rest }) {
  const { user } = useContext(StateContext);
  console.log("user", user)
  console.log("user.auth", user.auth)
  console.log("user.isAdmin", user.isAdmin)
  console.log("admin", admin)
  return (
    <Route
      // {...rest}
      // render={(props) =>
      //   user && user.auth ? (
      //     // admin ? (
      //       // user.isAdmin ? (
      //         <Component {...props} />
      //       // ) : (
      //         // <Redirect to={{ pathname: "/login", state: { from: path } }} />
      //       // )
      //     // ) : (
      //       // <Component {...props} />
      //     // )
      //   ) : (
      //     <Redirect to={{ pathname: "/login", state: { from: path } }} />
      //   )
      // }
    />
  );
}

PrivateRoute.defaultProps = {
  admin: false,
};

export default PrivateRoute;

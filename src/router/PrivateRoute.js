import {Route,Redirect} from 'react-router-dom';

export const PrivateRoute = ({ component: RouteComponent, usuario, ...rest }) => {
  console.log(!!usuario)
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!usuario? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};


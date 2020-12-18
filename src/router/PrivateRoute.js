import {Route,Redirect} from 'react-router-dom';

export const PrivateRoute = ({ component: RouteComponent, usuario, setPending, ...rest }) => {
  console.log(!!usuario)
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!usuario? (
          <RouteComponent {...routeProps} usuario={usuario} setPending={setPending} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};


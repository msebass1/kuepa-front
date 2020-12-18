import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Redirect

} from "react-router-dom";
import Login from '../pages/login';
import Registro from '../pages/registro';
import Clase from '../pages/clase';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {
  const [usuario, setUsuario] = React.useState(JSON.parse(localStorage.getItem('Usuario')))

  React.useEffect(()=>{
    setUsuario(JSON.parse(localStorage.getItem('Usuario')))
    console.log(usuario);
  },
    [localStorage.getItem('Usuario')]
  )

    return (
        <div>
            <Router>
                <Switch>
		  <Route exact path="/">
		    <Login usuario={usuario}/>
		  </Route>
		  <Route exact path="/registro">
		    <Registro usuario={usuario}/>
		  </Route>
		  <PrivateRoute component={Clase} usuario={usuario} exact path='/clase'/>
                </Switch>
            </Router>
        </div>
    )
}

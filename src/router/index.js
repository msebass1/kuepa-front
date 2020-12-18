import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Redirect

} from "react-router-dom";
import Login from '../pages/login';
import Registro from '../pages/registro';
import Clase from '../pages/clase';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {
  const [usuario, setUsuario] = React.useState({})
  const [pending, setPending] = useState(true);

  React.useEffect(()=>{
    setUsuario(JSON.parse(localStorage.getItem('Usuario')))
    setPending(false);
  },[pending])

  if(pending){
    return <>
      Cargando...
      </>
  }
   console.log(usuario);

    return (
        <div>
            <Router>
                <Switch>
		  <Route exact path="/">
		    <Login usuario={usuario} setPending={setPending}/>
		  </Route>
		  <Route exact path="/registro">
		    <Registro usuario={usuario}/>
		  </Route>
		  <PrivateRoute component={Clase} setPending={setPending} usuario={usuario} exact path='/clase'/>
                </Switch>
            </Router>
        </div>
    )
}

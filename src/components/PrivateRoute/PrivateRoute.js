import { Route, Redirect } from "react-router-dom";
import React, {useEffect, useState} from "react";


const PrivateRoute = ({ componentUser: ComponentUser, componentAdmin: ComponentAdmin, redirectTo,  ...rest }) => {

  const [token, setToken] = useState('');


  useEffect(
    () => {
      setToken( localStorage.getItem('token') );
    }
  );


  const componentToRender = (props) => {
      return <ComponentUser {...props}/>
  };

const routeRender =  (props) => {
  return(

    (localStorage.getItem('token').length > 1) ? (

      componentToRender(props)

      ) :
       (
        <Redirect
          to={redirectTo}
        />
      )
  )

  };


  return (
  <Route
    {...rest}
    render={
      routeRender
      }

  />
 );
};

export default PrivateRoute;

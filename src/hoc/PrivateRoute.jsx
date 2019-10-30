// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import AuthContext from './../context/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <AuthContext.Consumer>
      {context => (
        <Route
          {...rest}
          render={props => {
            console.log(context.token);
            if (context.token !== null) {
              console.log('zalogowany!');
              return <Component {...props} />;
            } else {
              console.log('redirect to login');
              return (
                <Redirect
                  to={{pathname: '/login', state: {from: props.location}}}
                />
              );
            }
          }}
        />
      )}
    </AuthContext.Consumer>
  );
};

export default PrivateRoute;
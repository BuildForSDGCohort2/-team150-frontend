import React from 'react';
import { AppLayout, /*ScrollTop PrivateRoute PublicRoute*/ } from "./component"
import { Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import  { history } from "./helpers"
function App() {
  return (
    <Router history={history}>
      <AppLayout>
      <Switch>
          <Route path="/" exact component={Home} />
          {/* <PrivateRoute path="/dashboard" component={dashboard} /> */}
          {/* <Route path="/story" component={Story} /> */}
        </Switch> 
      </AppLayout>
    </Router>
  );
}

export default App;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const MapRoute = props => (
  <Switch>
    {props.route.map(item =>
      item.path ? (
        <Route
          key={item.path}
          path={item.path}
          render={props => <item.component {...props} route={item.children} />}
        />
      ) : (
        <Redirect key={item.from} {...item} />
      )
    )}
  </Switch>
);
export default MapRoute;

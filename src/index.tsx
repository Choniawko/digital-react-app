import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store/";
import "./index.css";
import App from "./app/App";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route path="/" component={App} />
          <Route render={() => <div>Miss</div>} />
          <Route exact path="/first" render={() => <div>first page</div>} />
          <Route exact path="/second" render={() => <div>second page</div>} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);


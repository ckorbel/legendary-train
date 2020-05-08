import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage/HomePage";
import Players from "./routes/Players/Players";
import Teams from "./routes/Teams/Teams";

import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route exact path="/players" component={Players} />
          <Route exact path="/teams" component={Teams} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

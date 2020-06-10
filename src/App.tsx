import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage/HomePage";
import Players from "./routes/Players/Players";
import Teams from "./routes/Teams/Teams";
import RegisterPage from "./routes/Register/RegisterPage";
import CapExplorer from "./routes/CapExplorer/CapExplorer";
import "./App.css";

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
          <Route exact path="/cap-explorer" component={CapExplorer} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage/HomePage";
import Players from "./routes/Players/Players";
import Teams from "./routes/Teams/Teams";
import RegisterPage from "./routes/Register/RegisterPage";

import { Provider } from "react-redux";
import store from "./store";

const client = new ApolloClient({
  uri: "https://aqueous-cove-99197.herokuapp.com/"
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Switch>
            <Route exact path="/players" component={Players} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </Router>
      </ApolloProvider>
    </Provider>
  );
};

export default App;

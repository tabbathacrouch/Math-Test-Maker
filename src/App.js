import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";

const BOOK_QUERY = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;
function App() {
  const { data, loading, error } = useQuery(BOOK_QUERY);
  // console.log(data);

  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    const newUser = [...users, user];
    setUsers(newUser);
  };

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/register">
            <Register addUser={addUser} />
          </Route>
          <Route path="/signin">
            <SignIn users={users} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

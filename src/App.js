import { gql, useQuery } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { Register, SignIn, Dashboard, CreateTest } from "./routes";

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
  console.log(data);
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/create-test">
            <CreateTest />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

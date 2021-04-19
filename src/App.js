import { gql, useQuery } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './routes/SignIn';


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
        
        <Switch>
          <Route path="/register">
            register page
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

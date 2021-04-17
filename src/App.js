import { gql, useQuery } from "@apollo/client";

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
  return <div>Hello World</div>;
}

export default App;

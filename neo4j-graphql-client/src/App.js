import './App.css';
import { useQuery, gql } from '@apollo/client';
import { Item } from 'semantic-ui-react';


const GET_MOVIES = gql`
  query movies {
    movies {
      title
      tagline
      released
    }
  }
`;

function DisplayMovies() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.movies.map(({ title, tagline, released }) => (
    <Item>
        <Item.Content verticalAlign="middle">
          <Item.Header>{title}</Item.Header>
          <Item.Description>{tagline}</Item.Description>
          <Item.Meta>Release Date: {released}</Item.Meta>
          <br></br>
        </Item.Content>
      </Item>
  ));
}

export default function App() {
  return (
    <div>
      <h2>React Movie App 🚀</h2>
      <br/>
      <div>
        <DisplayMovies />
      </div>
    </div>
  );
}

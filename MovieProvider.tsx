import * as React from 'react';

const MovieProvider = (props) => {
  const [movies, updateMovies] = React.useState({});
  const apiKey = process.env.API_KEY;
  const api = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

  React.useEffect(() => {
    const makeApiCall = async () => {
      await fetch(`${api}`, {
        headers: { 'content-type': 'application/json' },
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          updateMovies(data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    makeApiCall();
  }, []);

  console.log(movies);

  return <div {...props}>{console.log(movies)}</div>;
};

export default MovieProvider;

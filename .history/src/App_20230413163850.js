import React, { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/food/search?apiKey=FOOD_API_KEY&query=chicken&number=10"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSearchResults(data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <h2>{result.title}</h2>
            <img src={result.image} alt={result.title} />
            <p>{result.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

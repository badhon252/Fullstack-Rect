import React, { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.spoonacular.com/food/search?apiKey=YOUR_API_KEY"
      );
      const data = await response.json();
      setSearchResults(data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Search Results</h1>
      <ul></ul>
    </div>
  );
}

export default App;

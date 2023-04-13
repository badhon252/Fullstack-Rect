import React, { useState, useEffect } from "react";

function App() {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.spoonacular.com/food/search?query=apple&number=2&apiKey=YOUR_API_KEY"
      );
      const data = await response.json();
      setFoods(data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Food Search Results</h1>
      <ul></ul>
    </div>
  );
}

export default App;

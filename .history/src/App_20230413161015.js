import { sort } from "mathjs";
import "./App.css";
const foodItems = [
  {
    id: 1,
    name: "Pizza",
    price: 10.99,
    description: "A classic pizza with tomato sauce, cheese, and pepperoni",
  },
  {
    id: 2,
    name: "Burger",
    price: 7.99,
    description: "A juicy beef burger with lettuce, tomato, and onion",
  },
  {
    id: 3,
    name: "Sushi",
    price: 15.99,
    description: "A selection of fresh sushi rolls with soy sauce and wasabi",
  },
  {
    id: 4,
    name: "Taco",
    price: 4.99,
    description: "A crispy taco with ground beef, lettuce, and cheese",
  },
  {
    id: 5,
    name: "Pasta",
    price: 12.99,
    description: "Penne pasta with tomato sauce, basil, and parmesan cheese",
  },
];
function App() {
  const listItem = foodItems.map((dessert) => {
    const itemText = `${dessert.name} - $${dessert.price}`;
    return <li key={dessert.id}>{itemText}</li>;
  });

  const sortedByPrice = foodItems.map((items) => {
    return items.price;
  });
  console.log(sortedByPrice.sort((a, b) => a - b));
  return (
    <div>
      <ul>{listItem.sort((a, b) => a.price - b.price)}</ul>
    </div>
  );
}

export default App;

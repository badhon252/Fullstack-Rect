import './App.css';
  const foodItems = [
  {
    name: "Pizza",
    price: 10.99,
    description: "A classic pizza with tomato sauce, cheese, and pepperoni"
  },
  {
    name: "Burger",
    price: 7.99,
    description: "A juicy beef burger with lettuce, tomato, and onion"
  },
  {
    name: "Sushi",
    price: 15.99,
    description: "A selection of fresh sushi rolls with soy sauce and wasabi"
  },
  {
    name: "Taco",
    price: 4.99,
    description: "A crispy taco with ground beef, lettuce, and cheese"
  },
  {
    name: "Pasta",
    price: 12.99,
    description: "Penne pasta with tomato sauce, basil, and parmesan cheese"
  }
];
function App() {

const listItem = foodItems.map(dessert=>{
  const itemText = `${dessert.name} - price ${dessert.price}`;
  return <li>{itemText}</li>
})

console.log("HELlo")
  return (
    <div>
      <ul>
        {listItem}
      </ul>
    </div>
  );
}

export default App;

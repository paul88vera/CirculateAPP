// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Restaurant } from "./types";

function App() {
  // const [count, setCount] = useState();

  const restaurant: Restaurant = {
    address: {
      street: "123 Dope",
      city: "San Antonio",
      zip: "78221",
    },
  };

  return <div className="App">{restaurant.address.street}</div>;
}

export default App;

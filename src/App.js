import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./components/MainPage.component";
import { BrowserRouter as Router } from "react-router-dom";
let myArr = [
  {
    id: 5,
    name: "xbox",
    price: "1000$",
    quantity: 5,
    productimag: "xbox.jpg",
    productdescription: "xbox",
  },
  {
    id: 4,
    name: "PS4",
    price: "2000$",
    quantity: 5,
    productimag: "PS5.jpg",
    productdescription: "PS5.jpg",
  },
  {
    id: 3,
    name: "PS3",
    price: "1000$",
    quantity: 5,
    productimag: "PS5.jpg",
    productdescription: "PS5.jpg",
  },
  {
    id: 2,
    name: "PS5",
    price: "30000$",
    quantity: 5,
    productimag: "PS5.jpg",
    productdescription: "PS5.jpg",
  },
];
function App() {
  return <MainPage products={myArr}></MainPage>;
}

export default App;

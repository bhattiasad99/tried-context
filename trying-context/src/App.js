import { useState } from "react";
import "./styles.css";
import Items from "./Items";
import AddItemsForm from "./AddItemsForm";
import Header from './Header'
import CartProvider from './CartProvider'
function App() {
  const [items, setItems] = useState([]);

  const submitUserDataHandler = (data) => {
    let itemsCopy = [...items]
    itemsCopy.push(data)
    setItems(itemsCopy)
  }

  const inputData = [
    {
      label: "Name",
      key: "name",
      attr: {
        type: "text",
        id: "name",
        required: "true",
        style: {
          padding: "5px",
          fontSize: "16px"
        }
      }
    },
    {
      label: "Description",
      key: "descr",
      attr: {
        type: "text",
        id: "descr",
        style: {
          padding: "5px",
          fontSize: "16px",
          marginTop: "10px"
        }
      }
    },
    {
      label: "Price",
      key: "price",
      attr: {
        type: "number",
        id: "price",
        required: "true",
        style: {
          padding: "5px",
          fontSize: "16px",
          marginTop: "10px"
        }
      }
    }
  ];

  return (
    <CartProvider>
      <div className="App">
        <Header />
        {/* cart */}
        <AddItemsForm onSubmitUserData={submitUserDataHandler} inputData={inputData} />
        <Items itemsList={items} />
      </div>
    </CartProvider>
  );
}

export default App;

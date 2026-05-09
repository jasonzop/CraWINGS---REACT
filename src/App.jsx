import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import "./mobile.css";

import SiteNavbar from "./components/SiteNavbar";
import SiteFooter from "./components/SiteFooter";

const API_BASE =
  window.location.hostname.includes("github.dev")
    ? `${window.location.protocol}//${window.location.hostname.replace(
        "5173",
        "5000"
      )}`
    : "https://crawings-react.onrender.com";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/menu`)
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.log(err));
  }, []);

  function addToCart(item) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  }

  function increaseQty(id) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQty(id) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  }

  async function checkout() {
    try {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const response = await fetch(`${API_BASE}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems,
          total,
        }),
      });

      await response.json();

      alert("Order placed successfully!");
      setCartItems([]);
    } catch (error) {
      console.log(error);
      alert("Checkout failed");
    }
  }

  return (
    <div className="app-wrapper">
      <SiteNavbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={<Menu menuItems={menuItems} addToCart={addToCart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
              checkout={checkout}
            />
          }
        />
      </Routes>

      <SiteFooter />
    </div>
  );
}
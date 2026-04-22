import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import SiteNavbar from "./components/SiteNavbar";
import SiteFooter from "./components/SiteFooter";
import pizza1 from "./assets/pizza1.png";
import pizza2 from "./assets/pizza2.png";
import pizza3 from "./assets/pizza3.png";
import pizza4 from "./assets/pizza4.png";
import pizza5 from "./assets/pizza5.png";
import pizza6 from "./assets/pizza6.png";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: "Grandma Pizza",
      desc: "Fresh mozzarella, rich tomato sauce, garlic, basil, and a crispy thin crust.",
      price: 12,
      image: pizza1,
    },
    {
      id: 2,
      name: "Neapolitan-Style Pizza",
      desc: "San Marzano tomato sauce, fresh mozzarella, basil, and a soft wood-fired crust.",
      price: 14,
      image: pizza2,
    },
    {
      id: 3,
      name: "Sicilian Pizza",
      desc: "Thick, fluffy crust, topped with tomato sauce, mozzarella, olive oil, and herbs.",
      price: 15,
      image: pizza3,
    },
    {
      id: 4,
      name: "Roman-Style Pizza",
      desc: "Crispy thin crust, with tomato sauce, mozzarella, oregano, and a light cheesy finish.",
      price: 13,
      image: pizza4,
    },
    {
      id: 5,
      name: "Quad City-Style Pizza",
      desc: "Spicy tomato sauce, mozzarella, Italian sausage, and a hand-tossed malt crust.",
      price: 16,
      image: pizza5,
    },
    {
      id: 6,
      name: "California-Style Pizza",
      desc: "Mozzarella, grilled chicken, arugula, fresh vegetables, and a light garlic olive oil base.",
      price: 14,
      image: pizza6,
    },
  ];

  function addToCart(item) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
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
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQty(id) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div className="app-wrapper">
      <SiteNavbar cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />

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
            />
          }
        />
      </Routes>

      <SiteFooter />
    </div>
  );
}
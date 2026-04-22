export default function Cart({
  cartItems,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <div className="container">
        <h2 className="cart-title">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <div className="cart-box">
            {cartItems.map((item) => (
              <div className="cart-item-row" key={item.id}>
                <div>
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">${item.price}</p>
                </div>

                <div className="cart-actions">
                  <button
                    className="cart-qty-btn"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span className="cart-qty">{item.quantity}</span>

                  <button
                    className="cart-qty-btn"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>

                  <button
                    className="cart-remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-total-row">
              <h3>Total: ${total}</h3>
              <button className="cart-checkout-btn">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
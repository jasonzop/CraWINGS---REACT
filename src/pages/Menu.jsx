export default function Menu({ menuItems, addToCart }) {
  return (
    <main className="menu-page-custom py-5">
      <div className="container">
        <h2 className="menu-page-title">
          Our Menu
        </h2>

        <div className="row g-4">
          {menuItems.map((item) => (
            <div
              className="col-12 col-md-6 col-xl-4"
              key={item._id}
            >
              <div className="menu-card-old">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-card-img"
                />

                <h3 className="menu-card-title-old">
                  {item.name}
                </h3>

                <p className="menu-card-desc-old">
                  {item.desc}
                </p>

                <div className="menu-card-bottom">
                  <span className="menu-card-price-old">
                    ${item.price}
                  </span>

                  <button
                    className="menu-card-btn-old"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section-home">
        <div className="hero-overlay">
          <div className="hero-content-home">
            <h1 className="hero-title-home">
              BEST IN THE
              <br />
              WORLD
            </h1>

            <p className="hero-subtitle-home">Fresh, Healthy, and Tasty</p>

            <Link to="/menu" className="hero-btn-home">
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
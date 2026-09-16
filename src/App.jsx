import React, { useState } from "react";
import "./App.css";

const products = [
  {
    type: "Course",
    title: "The Complete Web Development Bootcamp",
    creator: "John Adeyemi",
    rating: "4.8",
    reviews: "1.2k",
    price: "₦25,000",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    selarLink: "#",
  },
  {
    type: "Template",
    title: "Business Plan Template (Editable)",
    creator: "Creative Assets",
    rating: "4.7",
    reviews: "856",
    price: "₦8,000",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    selarLink: "#",
  },
  {
    type: "Ebook",
    title: "The Mindset Shift",
    creator: "Peace Okafor",
    rating: "4.9",
    reviews: "2.4k",
    price: "₦5,000",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85",
    selarLink: "#",
  },
  {
    type: "Course",
    title: "Graphic Design Mastery",
    creator: "Daniel Elum",
    rating: "4.6",
    reviews: "942",
    price: "₦18,000",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85",
    selarLink: "#",
  },
  {
    type: "Productivity",
    title: "Ultimate Productivity Planner",
    creator: "Grace Ikenna",
    rating: "4.5",
    reviews: "713",
    price: "₦6,000",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85",
    selarLink: "#",
  },
];

const categories = [
  {
    icon: "⌘",
    title: "Tech & Programming",
    count: "120+ products",
    className: "blue",
  },
  {
    icon: "▥",
    title: "Business & Finance",
    count: "95+ products",
    className: "green",
  },
  {
    icon: "◉",
    title: "Design & Creativity",
    count: "68+ products",
    className: "purple",
  },
  {
    icon: "◈",
    title: "Marketing",
    count: "72+ products",
    className: "pink",
  },
  {
    icon: "●",
    title: "Personal Development",
    count: "54+ products",
    className: "yellow",
  },
  {
    icon: "▢",
    title: "Ebooks & Guides",
    count: "90+ products",
    className: "cyan",
  },
];

const creators = [
  {
    name: "John Adeyemi",
    role: "Web Developer",
    products: "12 products",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Sarah Olumide",
    role: "Digital Marketer",
    products: "9 products",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Daniel Elum",
    role: "Graphic Designer",
    products: "7 products",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Peace Okafor",
    role: "Business Coach",
    products: "6 products",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Ibrahim Musa",
    role: "Software Engineer",
    products: "8 products",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=85",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-mark">
              <span></span>
              <span></span>
            </span>
            <span>LearnHub</span>
          </a>

          <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#courses" onClick={closeMenu}>
              Courses
            </a>
            <a href="#products" onClick={closeMenu}>
              Digital Products
            </a>
            <a href="#categories" onClick={closeMenu}>
              Categories
              <span className="nav-arrow">⌄</span>
            </a>
            <a href="#creators" onClick={closeMenu}>
              Creators
            </a>

            <a
              href="#products"
              className="mobile-browse-button"
              onClick={closeMenu}
            >
              Browse Products
            </a>
          </nav>

          <div className="nav-actions">
            <a href="#products" className="browse-button">
              Browse Products
              <span>⌕</span>
            </a>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>

          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <span>✦</span>
                Learn <b>•</b> Create <b>•</b> Grow
              </div>

              <h1>
                Learn from people
                <br />
                who <span>actually do it.</span>
              </h1>

              <p>
                Discover practical courses and digital products from real
                creators, designed to help you build skills, boost your career,
                and achieve your goals.
              </p>

              <div className="hero-buttons">
                <a href="#courses" className="primary-button">
                  Explore Courses
                  <span>→</span>
                </a>

                <a href="#products" className="secondary-button">
                  Browse Products
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hero-visual">
              <div className="hero-orb"></div>

              <div className="laptop">
                <div className="laptop-screen">
                  <div className="screen-top">
                    <div className="mini-logo">
                      <span></span>
                      LearnHub
                    </div>

                    <div className="screen-nav">
                      <span>Courses</span>
                      <span>Products</span>
                      <span>Categories</span>
                      <span>⌕</span>
                    </div>
                  </div>

                  <div className="screen-body">
                    <div className="screen-copy">
                      <small>COURSES</small>
                      <h3>
                        Build
                        <br />
                        Your Future
                        <br />
                        With The Right Skills
                      </h3>

                      <div className="screen-search">
                        <span>⌕</span>
                        Search courses, ebooks, templates...
                      </div>

                      <div className="screen-tags">
                        <span>Tech</span>
                        <span>Business</span>
                        <span>Design</span>
                        <span>Marketing</span>
                      </div>
                    </div>

                    <div className="screen-person">
                      <div className="person-head"></div>
                      <div className="person-body"></div>
                    </div>
                  </div>
                </div>

                <div className="laptop-base"></div>
              </div>

              {/* Floating product cards */}
              <div className="floating-card card-course">
                <span className="floating-label">COURSE</span>
                <strong>Web Development</strong>
                <small>Masterclass</small>
                <div className="floating-play">→</div>
              </div>

              <div className="floating-card card-template">
                <span className="template-icon">▤</span>
                <strong>Business Plan</strong>
                <small>Template</small>
                <span className="template-price">₦8,000</span>
              </div>

              <div className="phone">
                <div className="phone-screen">
                  <div className="phone-logo">
                    <span>✦</span>
                  </div>

                  <h4>
                    Learn
                    <br />
                    Anywhere,
                    <br />
                    Anytime.
                  </h4>

                  <p>
                    Courses, ebooks and
                    <br />
                    digital products.
                  </p>

                  <button>Explore →</button>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="feature-icon">ϟ</span>
              <div>
                <strong>Expert Creators</strong>
                <small>Learn from real professionals</small>
              </div>
            </div>

            <div className="hero-feature">
              <span className="feature-icon">☆</span>
              <div>
                <strong>Quality Products</strong>
                <small>Curated & trusted</small>
              </div>
            </div>

            <div className="hero-feature">
              <span className="feature-icon">◷</span>
              <div>
                <strong>Instant Access</strong>
                <small>Start immediately</small>
              </div>
            </div>

            <div className="hero-feature">
              <span className="feature-icon">♢</span>
              <div>
                <strong>Secure Payment</strong>
                <small>Powered by Selar</small>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="products-section" id="products">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  <span>✦</span> Trending Products
                </div>

                <h2>Popular right now</h2>

                <p>
                  Handpicked courses and digital products that are creating
                  real impact.
                </p>
              </div>

              <a href="#products" className="view-link">
                View All <span>→</span>
              </a>
            </div>

            <div className="products-grid">
              {products.map((product, index) => (
                <article className="product-card" key={index}>
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />

                    <span className="product-type">{product.type}</span>
                  </div>

                  <div className="product-content">
                    <h3>{product.title}</h3>

                    <p className="product-creator">
                      By {product.creator}
                    </p>

                    <div className="rating">
                      <span className="star">★</span>
                      <strong>{product.rating}</strong>
                      <span>({product.reviews})</span>
                    </div>

                    <div className="product-bottom">
                      <strong>{product.price}</strong>

                      <a
                        href={product.selarLink}
                        className="product-button"
                        aria-label={`Get ${product.title}`}
                      >
                        Get Access <span>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="categories-section" id="categories">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  <span>⊞</span> Explore by Category
                </div>

                <h2>What do you want to learn?</h2>

                <p>
                  Find exactly what you need. Explore by category and discover
                  something new.
                </p>
              </div>

              <a href="#categories" className="view-link">
                View All Categories <span>→</span>
              </a>
            </div>

            <div className="categories-grid">
              {categories.map((category, index) => (
                <a
                  href="#products"
                  className={`category-card ${category.className}`}
                  key={index}
                >
                  <div className="category-icon">{category.icon}</div>

                  <strong>{category.title}</strong>

                  <span>{category.count}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CREATORS ================= */}
        <section className="creators-section" id="creators">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  <span>♟</span> Featured Creators
                </div>

                <h2>Learn from top creators</h2>

                <p>
                  Meet creators sharing their knowledge, skills and experience.
                </p>
              </div>

              <a href="#creators" className="view-link">
                View All Creators <span>→</span>
              </a>
            </div>

            <div className="creators-grid">
              {creators.map((creator, index) => (
                <a href="#products" className="creator-card" key={index}>
                  <img src={creator.image} alt={creator.name} />

                  <strong>{creator.name}</strong>

                  <span>{creator.role}</span>

                  <small>{creator.products}</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY LEARNHUB ================= */}
        <section className="why-section">
          <div className="section-container">
            <div className="section-heading simple-heading">
              <div>
                <div className="section-label">
                  <span>✦</span> Why LearnHub?
                </div>

                <h2>A better way to learn and grow</h2>

                <p>
                  More than just a marketplace — discover quality resources
                  from people who know what they're doing.
                </p>
              </div>
            </div>

            <div className="benefits-grid">
              <div className="benefit">
                <div className="benefit-icon">◆</div>
                <div>
                  <h3>High-Quality Products</h3>
                  <p>
                    Carefully selected courses and digital products from
                    trusted creators.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">♢</div>
                <div>
                  <h3>Instant Access</h3>
                  <p>
                    Get started right after purchase. No unnecessary waiting.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">⚑</div>
                <div>
                  <h3>Learn at Your Own Pace</h3>
                  <p>
                    Study when and where it works best for you.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">✓</div>
                <div>
                  <h3>Secure Payments</h3>
                  <p>
                    All payments are handled securely through Selar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <div className="cta-label">
                ✦ Your Next Skill is Here
              </div>

              <h2>Ready to learn something new?</h2>

              <p>
                Explore our collection of courses and digital products and
                take the next step towards your goals.
              </p>

              <a href="#products" className="primary-button">
                Explore Products <span>→</span>
              </a>
            </div>

            <div className="cta-visual">
              <div className="cta-text">
                Better Skills
                <br />
                <em>Bigger Dreams</em>
              </div>

              <div className="cta-laptop">
                <div className="cta-screen">
                  <div className="cta-code"></div>
                  <div className="cta-code short"></div>
                  <div className="cta-code"></div>
                  <div className="cta-code medium"></div>
                </div>
              </div>

              <div className="cta-book"></div>
              <div className="cta-cup"></div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#home" className="logo">
                <span className="logo-mark">
                  <span></span>
                  <span></span>
                </span>
                <span>LearnHub</span>
              </a>

              <p>Learn · Create · Grow</p>
            </div>

            <div className="footer-links">
              <a href="#courses">Courses</a>
              <a href="#products">Products</a>
              <a href="#categories">Categories</a>
              <a href="#creators">Creators</a>
              <a href="#products">Browse Products</a>
            </div>

            <div className="social-links">
              <a href="#social" aria-label="X">
                𝕏
              </a>
              <a href="#social" aria-label="Instagram">
                ◎
              </a>
              <a href="#social" aria-label="YouTube">
                ▶
              </a>
              <a href="#social" aria-label="LinkedIn">
                in
              </a>
              <a href="#social" aria-label="TikTok">
                ♪
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 LearnHub. All rights reserved.</span>

            <div>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
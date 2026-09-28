import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BatchProvider } from "./context/BatchContext";
import Home from "./Router/Home";
import About from "./Router/About";
import Courses, { ServicesOverview, CourseDetailPage } from "./Router/Courses";
import Contact from "./Router/Contact";
import Profile from "./Router/Profile";
import "./App.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
  { to: "/profile", label: "Profile" },
];

export default function App() {
  return (
    <Provider store={store}>
      <BatchProvider>
        <BrowserRouter>
          <Navigation />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />}>
                <Route index element={<ServicesOverview />} />
                <Route path=":courseId" element={<CourseDetailPage />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </BatchProvider>
    </Provider>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className="brand-logo" onClick={closeMenu}>
          <img
            src="/logo.jpg"
            alt="Videos by RS logo"
            className="brand-logo-image"
          />
          <span>Videos by RS</span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>

        <div
          id="primary-navigation"
          className={`nav-links${isMenuOpen ? " is-open" : ""}`}
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h3>Videos by RS</h3>
          <p>
            Build confidence, fluency, and clarity in spoken English with
            practical learning.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email: rupasri.trainer@example.com</li>
            <li>YouTube: @RupasriMatcha53</li>
            <li>Online &amp; Offline Batches</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Videos by RS. All rights reserved.
      </div>
    </footer>
  );
}

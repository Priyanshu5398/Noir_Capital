import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // 👈 Hook to navigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    navigate("/contact"); // 👈 This takes user to Contact page
  };

  return (
    <section className={`hero-bg ${isVisible ? "fade-in" : ""}`}>
      <div className="hero-content-container">
        <h1 className="hero-title">
          Founders of <span className="highlight-gold">Noir Capital</span>
        </h1>
        <p className="hero-subtext">
          It's not just about the numbers, we know what your money needs.
        </p>
        <button className="hero-button" onClick={handleContactClick}>
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

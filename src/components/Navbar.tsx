'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import '../styles/components/navbar.css';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar"></div>
      
      <nav className="navbar">
        <div className="navbar-container">
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <img 
              src="/images/Nav-logo.svg.svg" 
              alt="Dawg Team Logo" 
              className="logo-image"
            />
          </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link 
            href="/" 
            className={`navbar-link ${isActive('/') && pathname === '/' ? 'active' : ''}`}
          >
            HOME
          </Link>
          
          <Link 
            href="/about" 
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
          >
            ABOUT
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              href="/services" 
              className={`navbar-link ${isActive('/services') ? 'active' : ''}`}
            >
              SERVICES
              <svg 
                className="dropdown-arrow" 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="currentColor"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </Link>
            
            {isServicesOpen && (
              <div className="dropdown-menu">
                <Link href="/services/grooming" className="dropdown-item">
                  GROOMING
                </Link>
                <Link href="/services/pet-boarding" className="dropdown-item">
                  PET BOARDING
                </Link>
                <Link href="/services/self-serve-dog-wash" className="dropdown-item">
                  SELF SERVE DOG WASH
                </Link>
              </div>
            )}
          </div>
          
          <Link 
            href="/shop" 
            className={`navbar-link ${isActive('/shop') ? 'active' : ''}`}
          >
            SHOP
          </Link>
          
          <Link 
            href="/blog" 
            className={`navbar-link ${isActive('/blog') ? 'active' : ''}`}
          >
            BLOG
          </Link>
        </div>

        {/* Right Side Icons & Button */}
        <div className="navbar-actions">
          {/* Search Icon */}
          <button className="navbar-icon" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M12.5 12.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Cart Icon with Badge */}
          <Link href="/cart" className="navbar-icon cart-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1 1H3L3.4 3M5 11H15L17 3H3.4M5 11L3.4 3M5 11L3 15H16M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18ZM16 18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="cart-badge">0</span>
          </Link>

          {/* User Icon */}
          <Link href="/account" className="navbar-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </Link>

          {/* Contact Button */}
          <Link href="/contact" className="contact-button">
            CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-menu-close"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="mobile-menu-content">
          <Link 
            href="/" 
            className={`mobile-link ${pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>

          <Link 
            href="/about" 
            className={`mobile-link ${pathname === '/about' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </Link>

          <div className="mobile-dropdown">
            <button 
              className={`mobile-link ${pathname.startsWith('/services') ? 'active' : ''}`}
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              SERVICES
              <svg 
                className={`mobile-dropdown-arrow ${isMobileServicesOpen ? 'open' : ''}`}
                width="12" 
                height="8" 
                viewBox="0 0 12 8"
              >
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </button>
            {isMobileServicesOpen && (
              <div className="mobile-submenu">
                <Link 
                  href="/services/grooming" 
                  className="mobile-submenu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GROOMING
                </Link>
                <Link 
                  href="/services/pet-boarding" 
                  className="mobile-submenu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PET BOARDING
                </Link>
                <Link 
                  href="/services/self-serve-dog-wash" 
                  className="mobile-submenu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SELF SERVE DOG WASH
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/shop" 
            className={`mobile-link ${pathname === '/shop' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SHOP
          </Link>

          <Link 
            href="/blog" 
            className={`mobile-link ${pathname === '/blog' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BLOG
          </Link>

          <Link 
            href="/contact" 
            className={`mobile-link ${pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </Link>

          <div className="mobile-connect">
            <h3>CONNECT</h3>
            <p>Follow us on social media</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
    </>
  );
}

"use client";
import Link from 'next/link';
import './globals.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navLinks.map((link) => (
          <li key={link.href} className="navbar-item">
            <Link href={link.href} className="navbar-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .navbar {
          width: 100%;
          background: #fff;
          padding: 1rem 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.03);
        }
        .navbar-list {
          display: flex;
          gap: 2rem;
          justify-content: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-link {
          text-decoration: none;
          color: #222;
          font-weight: 500;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .navbar-link:hover,
        .navbar-link:focus {
          color: #0070f3;
        }
        .navbar-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #0070f3;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: width 0.2s;
        }
        .navbar-link:hover::after,
        .navbar-link:focus::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}

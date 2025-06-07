import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">KashNex</Link>
      </div>
      <ul className="navbar-links">
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/solutions">AI Solutions</Link></li>
        <li><Link href="/students">Student Guidance</Link></li>
        <li><Link href="/finance">Finance Hub</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #18181b;
          padding: 1rem 2rem;
        }
        .navbar-logo a {
          color: #06d6a0;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
        }
        .navbar-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }
        .navbar-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
        }
        .navbar-links a:hover {
          color: #06d6a0;
        }
      `}</style>
    </nav>
  );
}
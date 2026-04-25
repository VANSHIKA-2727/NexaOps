import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';


export default function Navbar({ theme, onToggleTheme }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="theme-nav fixed top-0 left-0 right-0 z-50 shadow-[0_18px_45px_-30px_rgba(11,31,58,0.45)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-bold theme-text-strong transition-colors hover:text-[var(--accent)]">
            ProcureEdge
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-body text-base transition-colors duration-300 pb-1 ${
                    isActive
                      ? 'theme-text-strong border-b-2 border-accent-500'
                      : 'theme-nav-link'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'dark'}
            >
             
              <span className="theme-toggle__label">
                {theme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>
            <Button
              label="Free Consultation"
              variant="primary"
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 relative w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-full theme-nav-icon transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full theme-nav-icon transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-full theme-nav-icon transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t theme-border">
            <div className="px-2 pt-3 pb-2">
              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-toggle w-full justify-center"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                aria-pressed={theme === 'dark'}
              >
                <span className="theme-toggle__icon" aria-hidden="true">
                  {theme === 'dark' ? '☀' : '☾'}
                </span>
                <span className="theme-toggle__label">
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </span>
              </button>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block py-3 px-2 font-body text-base transition-colors duration-300 ${
                    isActive
                      ? 'text-accent-500 font-semibold'
                      : 'theme-nav-link'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 px-2">
              <Button
                label="Free Consultation"
                variant="primary"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/contact');
                }}
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

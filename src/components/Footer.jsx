import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="theme-footer">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">ProcureEdge</h3>
            <p className="font-body theme-footer-text leading-relaxed">
              Transforming procurement strategies for Fortune 500 companies and emerging enterprises.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 font-body">
              <li>
                <Link
                  to="/"
                  className="theme-footer-link transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="theme-footer-link transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="theme-footer-link transition-colors duration-300"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="theme-footer-link transition-colors duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="theme-footer-link transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="theme-footer-link transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 font-body theme-footer-text">
              <li>Supply Chain Optimization</li>
              <li>Vendor Management</li>
              <li>Process Automation</li>
              <li>Cost Reduction Strategy</li>
              <li>Digital Transformation</li>
              <li>Compliance & Risk</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t theme-footer-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="font-body theme-footer-copy text-center">
            Copyright 2025 ProcureEdge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

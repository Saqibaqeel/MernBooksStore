import React from 'react';

function Footter() {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Book Store is your one-stop destination for all your favorite books. Explore, read, and grow with us.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-white text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt-fill"></i> 123 Main Street, City, Country
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i> support@bookstore.com
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i> +123 456 7890
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          {/* Social Media Links */}
          <div className="col text-center">
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Book Store. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footter;

import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            leo gravida, bibendum libero id, ultricies libero. Aliquam vel sem
            id lectus ultrices eleifend in eu metus.
          </p>
        </div>
        <div className="footer-section">
          <h3>Customer Care</h3>
          <br />
          <ul>
            <li className="contact-link">
              <a href="#">FAQ</a>
            </li>
            <li className="contact-link">
              <a href="#">Shipping &amp; Returns</a>
            </li>
            <li className="contact-link">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="contact-link">
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Reach Us </h3>
          <br />
          <ul>
            <li className="contact-link">Email: info@example.com</li>
            <li className="contact-link">Phone: 1-800-555-5555</li>
            <li className="contact-link">Address: 123 Main St, Anytown USA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

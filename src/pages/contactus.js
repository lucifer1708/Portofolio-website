import React from "react";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  FaGooglePlus,
} from "react-icons/fa";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="Index">
      <Layout>
        <section id="contact">
          <div className="contact-box">
            <div className="contact-links">
              <h2>Contact me</h2>
              <div className="links">
                <div className="link">
                  <div className="img">
                    <Link style={{ color: "#00992b" }}>
                      <FaInstagramSquare size={56} />
                    </Link>
                  </div>
                </div>
                <div className="link">
                  <div className="img">
                    <Link style={{ color: "#00992b" }}>
                      <FaGithubSquare size={56} />
                    </Link>
                  </div>
                </div>
                <div className="link">
                  <div className="img">
                    <Link style={{ color: "#00992b" }}>
                      <FaLinkedin size={56} />
                    </Link>
                  </div>
                </div>
                <div className="link">
                  <div className="img">
                    <Link style={{ color: "#00992b" }}>
                      <FaGooglePlus size={56} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form>
                <div className="form-item">
                  <input type="text" name="sender" required />
                  <label>Name:</label>
                </div>
                <br />
                <div className="form-item">
                  <input type="text" name="email" required />
                  <label>Email:</label>
                </div>
                <br />
                <div className="form-item">
                  <textarea className="" name="message" required></textarea>
                  <label>Message:</label>
                </div>
                <br />
                <button className="submit-btn">Send</button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contact;

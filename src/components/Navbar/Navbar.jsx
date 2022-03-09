import React, { useState } from "react";
import "./Navbar.css";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    transition: 0.2s;
    &:hover{
        color: #f50057;
    }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{zIndex:999}} className="Navbar">
      <span className="nav-logo">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          LUCIFER{" "}
          <span className="icons">
            <AiTwotoneCheckCircle size={12} />
          </span>
        </Link>
      </span><div className={`nav-items ${isOpen && "open"}`}>
        <StyledLink to="/" activeStyle={{fontWeight:'bold', color:'#f50057'}}>Home</StyledLink>
        <StyledLink to="/education/" activeStyle={{fontWeight:'bold', color:'#f50057'}}>Education</StyledLink>
        <StyledLink to="/projects/" activeStyle={{fontWeight:'bold', color:'#f50057'}}>Projects</StyledLink>
        <StyledLink to="/contactus/" activeStyle={{fontWeight:'bold', color:'#f50057'}}>Contact</StyledLink>

      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;

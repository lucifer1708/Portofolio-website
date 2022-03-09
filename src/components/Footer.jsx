import React from "react"
import styled from 'styled-components'
import {BsSuitHeartFill} from 'react-icons/bs'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const Container = styled.footer`
    min-height: 60px;
    display: flex;
    justify-content: space-around;
    background-color: #050505;
    box-shadow: 0 -1px 11px #e1e5ee;
    align-items:center;
    color: white;

    .Copyright{
        flex: 1;
        text-align: center;
    }

    .icons{
        flex: 1;
        display: flex;
        flex-wrap:wrap;
        a{
            margin: 10px;
            color: white;
        }
    }
    
    .text{
        flex:2;
        margin:0;
        width: 20%;
        font-size: 0.8rem;
        margin: 0 10px;
        text-align: center;
    }

    @media only screen and (max-width: 680px){
        .text{
            font-size: 0.5rem;
        }

        .Copyright{
            font-size: 0.7rem;
        }
    }
`;

const Footer = ()=>{
    return(
        <Container>
            <div className='Copyright'>© {new Date().getFullYear()}, <strong>LUCIFER</strong></div>
            <p className='text'>Made with <BsSuitHeartFill style={{color:"#f50057"}}/> by Sumit Dhiman<strong> <a style={{color:"#f50057"}} href="mailto:teamiste@gmail.com">sd08012003@gmail.com</a> </strong>!</p>
            <div className='icons'>
                <a href="">
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faYoutube} size="1x" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
                <a href="https://github.com/lucifer1708">
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
            </div> 
        </Container>
    )
}


export default Footer

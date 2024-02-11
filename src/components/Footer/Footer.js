import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 40px;
  padding-bottom: 40px;
  background: hsla(171, 87%, 67%, 1);

  background: linear-gradient(
    90deg,
    hsla(171, 87%, 67%, 1) 0%,
    hsla(236, 100%, 72%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(171, 87%, 67%, 1) 0%,
    hsla(236, 100%, 72%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(171, 87%, 67%, 1) 0%,
    hsla(236, 100%, 72%, 1) 100%
  );
`;
const FooterTitle = styled.p`
  color: white;
  text-shadow: 7px 9px 6px rgba(23, 99, 199, 0.5);
  font-size: 45px;
  font-weight: 700;
  margin-top: 0px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  margin-top: 20px;
`;

const MenuTitle = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

const MenuItem = styled.p`
  font-size: 16px;
  margin: 0px;
  font-weight: 350;
  margin-top: 10px;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.45;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #777;
  margin-bottom: 20px;
`;

const IconButton = styled.div`
  cursor: pointer;
  margin-right: 18px;
  opacity: 0.9;
  &:hover {
    opacity: 0.5;
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <FooterTitle>
          Fast, fair, feel-
          <br />
          good broadband
        </FooterTitle>
        <SocialIcons>
          <IconButton>
            <FaFacebook style={{ height: 30, width: 30 }} />
          </IconButton>
          <IconButton>
            <FaTwitter style={{ height: 30, width: 30 }} />
          </IconButton>
          <IconButton>
            <FaLinkedin style={{ height: 30, width: 30 }} />
          </IconButton>
          <IconButton>
            <FaInstagram style={{ height: 30, width: 30 }} />
          </IconButton>
        </SocialIcons>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            marginBottom: 80,
            marginTop: 20,
            flexWrap: "wrap",
          }}
        >
          <Menu>
            <MenuTitle>Company</MenuTitle>
            <MenuItem>About</MenuItem>
            <MenuItem>Careers</MenuItem>
            <MenuItem>Refer a Friend</MenuItem>
            <MenuItem>The Loyalty Tax</MenuItem>
          </Menu>
          <Menu>
            <MenuTitle>Help & Contact</MenuTitle>
            <MenuItem>Support</MenuItem>
            <MenuItem>Contact us</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Press</MenuItem>
            <MenuItem>Hearing Support</MenuItem>
            <MenuItem>Emergency</MenuItem>
          </Menu>
          <Menu>
            <MenuTitle>Useful links</MenuTitle>
            <MenuItem>Terms & Conditions</MenuItem>
            <MenuItem>Privacy Policy</MenuItem>
            <MenuItem>Cookie Policy</MenuItem>
            <MenuItem>Complaints Code</MenuItem>
            <MenuItem>Call Charges</MenuItem>
            <MenuItem>Prices & Charge list</MenuItem>
          </Menu>
        </div>
        <Copyright>
          @ 2024 RocketBand Internet Ltd is a company registered in the United
          States.
        </Copyright>
      </div>
    </Container>
  );
};

export default Footer;

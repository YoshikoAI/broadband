import styled from "styled-components";
import { BsFillFilterCircleFill } from "react-icons/bs";

const HeaderContainer = styled.div`
  background: rgba(0, 0, 0, 0.35);
  margin-bottom: -100px;
  z-index: 20;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Alata", sans-serif;
`;

const LogoText = styled.div`
  font-weight: 700;
  font-size: 23px;
  display: flex;
  align-items: center;
  font-family: "Alata", sans-serif;
  /* font-family: "Bungee", sans-serif; */
  /* font-family: 'Damion', cursive; */
  /* font-family: 'DM Serif Display', serif; */
  /* font-family: 'Honk', system-ui; */
  /* font-family: 'Press Start 2P', system-ui; */
  /* font-family: 'Silkscreen', sans-serif; */
  /* font-family: 'Source Code Pro', monospace; */
  letter-spacing: 1px;
  background: radial-gradient(circle at center center, #ffa751 0%, #eee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MenuItem = styled.button`
  font-family: "Alata", sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 4.5px;
  background: transparent;
  outline: none;
  border: transparent;
  background: radial-gradient(circle at center center, #ffa751 0%, #ffe259 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.4;
    transform: scale(1.02);
  }
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  user-select: none;
`;

const DarkMenuItem = styled.button`
  font-family: "Alata", sans-serif;
  font-weight: 700;
  font-size: 14px;
  background: black;
  color: white;
  border-radius: 14px;
  outline: none;
  border: transparent;
  padding: 14px;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.4;
    transform: scale(1.02);
  }
  cursor: pointer;
  margin-left: 10px;
`;

const Menu = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoText>
        <BsFillFilterCircleFill
          style={{
            marginRight: 10,
            top: 1,
            position: "relative",
            color: "orange",
          }}
          size={22}
        />
        RocketBand
      </LogoText>
      <Menu>
        <MenuItem>Broadband</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Support</MenuItem>
        <MenuItem>Login</MenuItem>
        <DarkMenuItem>Sign Up</DarkMenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;

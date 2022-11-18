import styled from "@emotion/styled";

const Main = styled.main``;
const Header = styled.header`
  height: 85vh;
  width: 90%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
`;
const Logo = styled.h1``;
const Navnar = styled.nav`
  width: 100%;
  padding: 35px 50px;
  display: flex;
  /* justify-content: space-between; */
  font-size: 22px;
`;
const Menu = styled.ul`
  font-size: 17px;
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover {
    color: #f2f2f2;
  }
`;
const Buttons = styled.div``;
const Button = styled.input`
  color: #f2f2f2;
  outline: none;
  font-size: 17px;
  font-weight: 500;
  padding: 6px 12px;
  margin: 0 8px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.97);
  }
  background: linear-gradient(135deg, #ff9a9e 10%, #f6416c 100%);
`;
export { Main, Logo, Navnar, Menu, Buttons, Button, Header };

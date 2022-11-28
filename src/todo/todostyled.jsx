import styled from "@emotion/styled";

const Main = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  display: block;
  align-items: center;
`;
const TodoBox = styled.header`
  height: 85vh;
  width: 60%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin: auto;
  margin-top: 60px;
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

  font-size: 22px;
`;
const Menu = styled.a`
  font-size: 17px;
  font-weight: 500;
  margin: 35px 0px 0px 45px;
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
  margin: 29px 0px 0px 50px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.97);
  }
  background: linear-gradient(135deg, #ff9a9e 10%, #f6416c 100%);
`;

const TextWrap = styled.div`
  margin: -11px 0px 0px 43px;
`;
const WrapInput = styled.div``;
const TextInput = styled.input`
  width: 200px;
  height: 30px;
  outline: none;
  box-shadow: none;
  border-radius: 3px;
  background: #ff9a9e;
  border: 1px solid #fcc8ca;
`;
const TextButton = styled.button`
  width: 50px;
  height: 35px;
  margin: 10px;
  border-radius: 3px;
  background: linear-gradient(135deg, #ff9a9e 10%, #f6416c 100%);

  box-shadow: none;
  border: 1px solid #fcc8ca;
  color: #f2f2f2;
`;
const TodoList = styled.div`
  border-radius: 10px;

  background: #ff9a9e;
  background-color: rgba(242, 94, 94, 0.3);
  /* box-shadow: 3px 3px red, -1em 0 0.4em olive; */
  width: 40%;
  height: 150px;
  word-break: break-all;
`;
const TodoText = styled.p`
  font-size: 20px;
`;

const ImageBox = styled.img`
  width: 300px;
  height: 300px;
`;
export {
  Main,
  Logo,
  Navnar,
  Menu,
  Buttons,
  Button,
  TodoBox,
  TextWrap,
  TodoList,
  TodoText,
  TextInput,
  WrapInput,
  TextButton,
  ImageBox,
};

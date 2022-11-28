import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../todo/todostyled";
const Mail = () => {
  const navigate = useNavigate();

  //file
  const [image, setImage] = useState();
  const failUpload = useRef();
  const onHandleMail = () => {
    failUpload.current.click();
  };
  const onHandleFail = (e) => {
    // console.log(e.target.files[0]);
    const imgReader = new FileReader();
    imgReader.readAsDataURL(e);
    return new Promise((resolve) => {
      imgReader.onload = () => {
        setImage(imgReader.result);
        resolve();
      };
    });
  };
  return (
    <T.Main>
      <T.TodoBox>
        <T.Navnar>
          <T.Logo>TodoList</T.Logo>
          <T.Menu onClick={() => navigate("/")}>Home</T.Menu>
          <T.Menu>Mail</T.Menu>

          <T.Buttons>
            <T.Button type="button" value="Login"></T.Button>
          </T.Buttons>
        </T.Navnar>
        <T.TextWrap>
          <button onClick={() => onHandleMail()}>파일 열기</button>
          <input
            ref={failUpload}
            type="file"
            id="fileUpload"
            onChange={(e) => onHandleFail(e.target.files[0])}
            style={{ display: "none" }}
          />
          <>{image && <T.ImageBox src={image} alt="preview-img" />}</>
          <a href="mailto:superman@test.com">메일 보내기</a>
        </T.TextWrap>
      </T.TodoBox>
    </T.Main>
  );
};

export default Mail;

import { useState } from "react";
import { BasicModal, Backdrop } from "../../atoms";
import { uploadImage } from "../../../apis/upload";
import { addPost } from "../../../apis/post";
import styled from "styled-components";

const AddPost = ({ onClose }) => {
  const [imageList, setImageList] = useState([]);
  const [content, setContent] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const newImage = {
        file: file,
        preview: reader.result,
      };
      setImageList((prev) => [...prev, newImage]);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    // 1. 이미지들을 업로드해서 s3주소를 받아온다.
    // 2. textarea글과 이미지 주소를 서버에 보내서 post를 생성한다.
    // const result1 = await uploadImage(imageList[1].file);
    // const result2 = await uploadImage(imageList[1].file);
    // const result3 = await uploadImage(imageList[2].file);

    // const result = await Promise.all([
    //   uploadImage(imageList[0].file),
    //   uploadImage(imageList[1].file),
    //   uploadImage(imageList[2].file),
    // ]);

    const promiseList = imageList.map((image) => uploadImage(image.file));
    const urlList = await Promise.all(promiseList);
    const result = await addPost({ content, imageList: urlList });

    console.log(result);
  };

  return (
    <>
      <Modal>
        <Header>
          <h2>새 게시물 만들기</h2>
          <BtnSubmit onClick={handleSubmit}>공유하기</BtnSubmit>
          <Textarea rows="6" onChange={(e) => setContent(e.target.value)} />
          <Label htmlFor="file">컴퓨터에서 선택</Label>
          <ImageList>
            {imageList.map((image, index) => (
              <ImageItem key={index}>
                <Image src={image.preview} />
              </ImageItem>
            ))}
          </ImageList>
          <InputFile
            id="file"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={handleFileChange}
          />
        </Header>
      </Modal>
      <Backdrop onClick={onClose} />
    </>
  );
};

const Modal = styled(BasicModal)``;
const Header = styled.header`
  position: relative;
`;
const BtnSubmit = styled.span`
  color: #0095f6;
  position: absolute;
  right: 0;
  top: 5px;
  cursor: pointer;
`;
const ImageList = styled.ul``;
const ImageItem = styled.li``;
const Image = styled.img`
  width: 100%;
`;
const Label = styled.label`
  display: inline-block;
  background-color: #0095f6;
  color: #fff;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;
const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  margin-top: 10px;
`;

export default AddPost;

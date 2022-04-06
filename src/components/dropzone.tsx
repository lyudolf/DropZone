import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
//styled component 말고 다른css 적용방식 사용해볼것 mui
/* 효율적인 화면설계=> 편한스타일 적응x 효율적이고 간결하게 발전해야함 */
import { useDropzone } from "react-dropzone";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./useStyles";
import clsx from "clsx";
//return type void 안됨

//타입지정
interface Props {
  isUploaded: boolean;
  onDrop: (
    acceptedFiles: File[],
    loadingHandler: (value: boolean) => void
  ) => void;
}

const Dropzone = ({ isUploaded, onDrop }: Props) => {
  const classes = useStyles({});
  const [loading, setLoading] = useState(false);
  const handleLoading = (value: boolean) => setLoading(value);
  //usedropzone

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      onDrop(acceptedFiles, handleLoading);
    },
    //파일타입x
    onDropRejected: (rejectedFiles) => {
      console.log(rejectedFiles);
    },
    multiple: false, //요구사항:단일업로드만 가능할것 => 반복문이용
    accept: ".dwg, .dxf, .stp, .step, image/png", //요구사항: 파일타입지정
  });
  console.log(loading);
  //CicularProgress=> material-ui/core spinner
  //zero:heigth160
  //uploaded:height120
  return (
    <div
      {...getRootProps({
        className: clsx(classes.dropZone, {
          zero: !isUploaded,
          uploaded: isUploaded,
        }),
      })}
    >
      <Header>도면 업로드 후 재료와 수량을 입력해주세요</Header>

      <input type="file" {...getInputProps()} />

      {loading && <CircularProgress />}

      {!loading && (
        <div className="information">
          <p className="body1 medium mb-4">
            도면 파일을 이곳에 드래그{" "}
            <span className="body2 normal gray900">또는</span>
          </p>

          <div className="mb-12">
            <button className="text">
              <span className="body1 primary500">내 PC에 첨부</span>
            </button>
            <span className="body1 gray600"> / </span>
            <button className="text">
              <span className="body1 primary500">클라우드에서 첨부</span>
            </button>
          </div>

          <p className="caption">파일 확장자 : .dwg, .dxf, .stp, .step</p>
          <p className="caption gray700">
            (최대 20개 업로드, 1개당 100MB 이하)
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropzone;

const Header = styled.text`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 85.88%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #343a40;
`;
const TextNo = styled.text`
  font-size: 14px;
  line-height: 143%;
  color: #4b88ff;
`;
const DivNoDrawing = styled.div`
  position: absolute;
  width: 139px;
  height: 24px;
  left: calc(50% - 139px / 2 - 5.5px);
  top: 56px;
  background: #ffffff;
`;
const P = styled.p`
  position: static;
  width: 400px;
  height: 100%;
  left: calc(50% - 323px / 2);
  top: calc(50% - 20px / 2);

  /* 14pt - 400 (본문용) */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
  text-align: center;

  /* Gray/600 */

  color: #adb5bd;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;
const DivList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px;

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 45%;

  /* Common/White */

  background: #ffffff;
  /* Gray/400 - Stroke */

  border: 1px solid #dee2e6;
  box-sizing: border-box;
  border-radius: 4px;
`;

const DivBottom = styled.div`
  width: 912px;
  position: absolute;

  left: calc(50% - 912px / 2);
  right: 0%;
  top: 35.29%;
  bottom: 40%;
`;

// const TextSpec = styled.text`
//   position: absolute;
//   width: 179px;
//   height: 20px;
//   left: calc(50% - 179px / 2 + 0.5px);
//   top: calc(50% - 20px / 2 + 22px);
//   /* 12pt - 400 (설명용) */
//   font-family: “Noto Sans KR”;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 90px;
//   /* identical to box height, or 167% */
//   text-align: center;
//   /* Gray/900 */
//   color: #343a40;
// `;
// const Slash = styled.text`
//   position: absolute;
//   width: 7px;
//   height: 24px;
//   left: calc(50% - 7px / 2 - 9.5px);
//   top: calc(50% - 24px / 2 - 12px);
//   /* 16pt - 500 (body1) */
//   font-family: “Noto Sans KR”;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 150%;
//   /* identical to box height, or 24px */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.1px;
//   /* Gray/600 */
//   color: #adb5bd;
// `;
// const TextCloud = styled.text`
//   position: absolute;
//   width: 140px;
//   height: 24px;
//   left: -2px;
//   top: -2px;
//   /* 16pt - 500 (body1) */
//   font-family: “Noto Sans KR”;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 150%;
//   /* identical to box height, or 24px */
//   display: flex;
//   align-items: center;
//   text-align: center;
//   letter-spacing: -0.1px;
//   /* Primary/500 - Main */
//   color: #4b88ff;
//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;
// `;
// const ButtonCloud = styled.button`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   background-color: transparent;
//   border: 0;
//   position: absolute;
//   width: 140px;
//   height: 24px;
//   left: calc(50% - 121px / 2 + 62.5px);
//   top: calc(50% - 24px / 2 - 12px);
// `;
// const TextPc = styled.text`
//   position: absolute;
//   width: 121px;
//   height: 20px;
//   left: -12px;
//   top: 0px;
//   /* 16pt - 500 (body1) */
//   font-family: “Noto Sans KR”;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 150%;
//   /* identical to box height, or 24px */
//   display: flex;
//   align-items: center;
//   text-align: center;
//   letter-spacing: -0.1px;
//   /* Primary/500 - Main */
//   color: #4b88ff;
//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 0px 10px;
// `;
// const ButtonPc = styled.button`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   background-color: transparent;
//   border: 0;
//   position: absolute;
//   width: 101px;
//   height: 24px;
//   left: calc(50% - 101px / 2 - 71.5px);
//   top: calc(50% - 24px / 2 - 12px);
// `;
// const Group4116 = styled.div`
//   position: static;
//   width: 245px;
//   height: 0px;
//   align-items: center;
//   top: 40px;
// `;
// const Text4 = styled.text`
//   position: absolute;
//   width: 204px;
//   height: 20px;
//   left: calc(50% - 193px / 2 + 0.5px);
//   top: calc(50% - 20px / 2 + 42px);
//   /* 12pt - 400 (설명용) */
//   font-family: “Noto Sans KR”;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 20px;
//   /* identical to box height, or 167% */
//   text-align: center;
//   /* Gray/700 */
//   color: #868e96;
// `;
// const Frame4084 = styled.div`
//   position: static;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   align-content: center;
//   padding: 0px;
//   width: 203px;
//   height: 24px;
//   left: calc(50% - 203px / 2 - 0.5px);
//   top: calc(50% - 24px / 2 - 40px);
// `;
// const P1 = styled.p`
//   position: static;
//   width: 200px;
//   height: 24px;
//   left: calc(50% - 200px / 2 - 15px);
//   top: 0px;
//   /* 16pt - 500 */
//   font-family: “Noto Sans KR”;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 24px;
//   /* identical to box height, or 150% */
//   text-align: center;
//   /* Gray/900 */
//   color: #343a40;
//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 0px 4px;
// `;
// const P2 = styled.p`
//   position: static;
//   width: 40px;
//   height: 20px;
//   left: calc(50% - 40px / 2 + 88.5px);
//   top: 2px;
//   /* 14pt - 400 (body2) */
//   font-family: “Noto Sans KR”;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 143%;
//   /* identical to box height, or 20px */
//   text-align: center;
//   letter-spacing: -0.1px;
//   /* Gray/900 */
//   color: #343a40;
//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;
//   margin: 0px 4px;
// `;
// const Group4117 = styled.div`
//   position: static;
//   width: 300px;
//   height: 120px;
//   left: 334px;
//   top: 28px;
// `;
// const DivDrag = styled.div`
//   position: absolute;
//   width: 912px;
//   height: 160px;
//   left: 0%;
//   right: 0%;
//   top: 50%;
//   bottom: 0%;
//   /* Primary/200 */
//   background: #e9f1ff;
//   /* Primary/500 - Main */
//   border: 1px dashed #4b88ff;
//   box-sizing: border-box;
//   font-family: Noto Sans KR;
//   align-content: center;
//   align-items: center;
// `;

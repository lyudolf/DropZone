import React, { useState } from "react";
import styled from "styled-components";
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
    noClick: true,
    multiple: false, //요구사항:단일업로드만 가능할것 => 반복문이용
    accept: ".dwg, .dxf, .stp, .step,", //요구사항: 파일타입지정
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

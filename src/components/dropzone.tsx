import React, { createRef, useState } from "react";
import styled from "styled-components";
//styled component 말고 다른css 적용방식 사용해볼것 mui
/* 효율적인 화면설계=> 편한스타일 적응x 효율적이고 간결하게 발전해야함 */
import { useDropzone } from "react-dropzone";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./useStyles";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//타입지정
interface Props {
  isUploaded: boolean;
  onDrop: (
    acceptedFiles: File[],
    loadingHandler: (value: boolean) => void
  ) => void;
}
// const dropzoneRef: any = createRef();
// const openDialog = () => {
//   if (dropzoneRef.current) dropzoneRef.current.open();
// };

const Dropzone = ({ isUploaded, onDrop }: Props) => {
  const classes = useStyles({});
  const [loading, setLoading] = useState(false);
  const handleLoading = (value: boolean) => setLoading(value);
  //usedropzone

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      onDrop(acceptedFiles, handleLoading);
    },
    //파일타입x
    onDropRejected: (rejectedFiles) => {
      console.log(rejectedFiles);
      window.alert("잘못된 형식의 파일입니다!!!");
    },
    noClick: true,
    multiple: false, //요구사항:단일업로드만 가능할것 => 반복문이용
    accept: ".dwg, .dxf, .stp, .step", //요구사항: 파일타입지정
  });
  console.log(loading);
  //CicularProgress=> material-ui/core spinner
  //zero:heigth160
  //uploaded:height120
  const [modalOpen, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            <button className="text" type="button" onClick={open}>
              <span className="body1 primary500">내 PC에서 첨부</span>
            </button>
            <span className="body1 gray600"> / </span>
            <button className="text" type="button" onClick={handleClickOpen}>
              <span className="body1 primary500">클라우드에서 첨부</span>
            </button>
          </div>
          <div>
            <Dialog
              open={modalOpen}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              className={classes.Modal}
            >
              <DialogTitle id="alert-dialog-title">
                <div>
                  <span>클라우드</span>
                </div>
                <h2>클라우드에서 파일 첨부</h2>
              </DialogTitle>
              <DialogContent>
                <div>
                  <div>내 드라이브</div>
                </div>
                <div>
                  <h3>드라이브에 저장된 파일이 없습니다</h3>
                  <h5>
                    카파 클라우드에 도면을 보관하고 한 곳에서 편하게
                    관리해보세요.
                  </h5>
                  <button>cloud</button>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
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

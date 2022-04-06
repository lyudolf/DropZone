import React, { useState, useCallback } from "react";
import Dropzone from "./dropzone";
import { AxiosResponse } from "axios";
import { fileUploadApi } from "../api";
import { useStyles } from "./useStyles";
import List from "./List/index";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";

export interface UploadedData {
  fileExtension: string | null;
  fileId: string;
  fileMimetype: string | null;
  fileName: string;
  fileSize: string;
  oldFileId: string | null;
}

interface UploadedResult {
  result?: string;
  data: UploadedData;
}
// const textLimit = (string: String, n: number)=>{
//   string.length>0 ? string.substr(0,n) + ""
// }
const fileInfo: {
  fileId: string;
  fileName: string;
}[] = [];
const UploadZone = () => {
  const classes = useStyles({});
  const [uploadedFiles, setUploadedFiles] = useState<UploadedData[]>([]);
  for (let i = 0; i < uploadedFiles.length; i++) {
    fileInfo.push(uploadedFiles[i]);
  }

  const onDrop = useCallback(
    async (acceptedFiles: File[], loadingHandler: (value: boolean) => void) => {
      try {
        loadingHandler(true);
        await onUpload(acceptedFiles);
        loadingHandler(false);
      } catch (err) {
        console.log(err);
      }
    },
    //eslint-disable-next-line
    []
  );

  const onUpload = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 1) {
        const formData = new FormData();

        formData.append("file", acceptedFiles[0], acceptedFiles[0].name);

        const {
          data: { data, result },
        }: AxiosResponse<UploadedResult, any> = await fileUploadApi(formData);

        if (result === "SUCCESS" && data) {
          return setUploadedFiles([...uploadedFiles, data]);
        } else {
          return console.log("upload failed");
        }
      } else {
        const result: AxiosResponse<UploadedResult, any>[] = await Promise.all(
          acceptedFiles.map((file) => {
            const formData = new FormData();
            formData.append(`file`, file, file.name);

            return fileUploadApi(formData);
          })
        );

        const isError = result.some((res) => res.data.result !== "SUCCESS");

        const uploaded = result.map((res) => res.data.data);

        if (isError) {
          return console.log("upload failed");
        } else {
          return setUploadedFiles([...uploadedFiles, ...uploaded]);
        }
      }
    },
    [uploadedFiles]
  );

  const isUploaded = uploadedFiles.length > 0;

  //&& 왼쪽 연산자가 true면 오른쪽 피연산자, false면 해당 리터럴 반환
  return (
    <div>
      <Header>도면 업로드 후 재료와 수량을 입력해주세요</Header>
      {!isUploaded ? (
        <div>
          <DivNoDrawing>
            <FiAlertCircle />
            <TextNo>도면이 없다면?</TextNo>
            <IoIosArrowForward />
          </DivNoDrawing>
          <DivBottom>
            <DivList>
              <P>업로드한 도면이 없습니다. 도면 파일을 업로드 해주세요.</P>
            </DivList>
          </DivBottom>
        </div>
      ) : (
        <Div></Div>
      )}
      <div className={classes.uploadZone}>
        <Uploadezone isUploaded={true}>
          {isUploaded && (
            <div>
              <List.Main>
                {uploadedFiles.map((file, index) => (
                  <List.Item key={file.fileId} index={index} file={file} />
                ))}
              </List.Main>
            </div>
          )}

          <Dropzone isUploaded={isUploaded} onDrop={onDrop} />
        </Uploadezone>
      </div>
    </div>
  );
};

export default UploadZone;
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
const Div = styled.div`
  visibility: hidden;
`;
const Uploadezone = styled.div<{ isUploaded: boolean }>``;
// import React, { useState, useCallback } from "react";
// import Dropzone from "./dropzone";
// import { AxiosResponse } from "axios";
// import { fileUploadApi } from "../api";
// //import { useStyles } from "./useStyles";
// import UnUploaded from "./unUploaded";
// import List from "./List";
// export interface UploadedData {
//   fileExtension: string | null;
//   fileId: string;
//   fileMimetype: string | null;
//   fileName: string;
//   fileSize: string;
//   oldFileId: string | null;
// }
// interface UploadedResult {
//   result?: string;
//   data: UploadedData;
// }
// const UploadZone = () => {
//   //const classes = useStyles({});
//   const [uploadedFiles, setUploadedFiles] = useState<UploadedData[]>([]);
//   const onDrop = useCallback(
//     async (acceptedFiles: File[], loadingHandler: (value: boolean) => void) => {
//       try {
//         loadingHandler(true);
//         await onUpload(acceptedFiles);
//         loadingHandler(false);
//       } catch (err) {
//         console.log(err);
//       }
//     },
//     //eslint-disable-next-line
//     []
//   );
//   const onUpload = useCallback(
//     async (acceptedFiles: File[]) => {
//       if (acceptedFiles.length === 1) {
//         const formData = new FormData();
//         formData.append("file", acceptedFiles[0], acceptedFiles[0].name);
//         const {
//           data: { data, result },
//         }: AxiosResponse<UploadedResult, any> = await fileUploadApi(formData);
//         if (result === "SUCCESS" && data) {
//           return setUploadedFiles([...uploadedFiles, data]);
//         } else {
//           return console.log("upload failed");
//         }
//       } else {
//         const result: AxiosResponse<UploadedResult, any>[] = await Promise.all(
//           acceptedFiles.map((file) => {
//             const formData = new FormData();
//             formData.append(`file`, file, file.name);
//             return fileUploadApi(formData);
//           })
//         );
//         const isError = result.some((res) => res.data.result !== "SUCCESS");
//         const uploaded = result.map((res) => res.data.data);
//         if (isError) {
//           return console.log("upload failed");
//         } else {
//           return setUploadedFiles([...uploadedFiles, ...uploaded]);
//         }
//       }
//     },
//     [uploadedFiles]
//   );
//   const isUploaded = uploadedFiles.length > 0;
//   return (
//     //< className={classes.uploadZone}>

//     <div className={classes.uploadZone}>
//       {isUploaded && (
//         <List.Main>
//           {uploadedFiles.map((file, index) => (
//             <List.Item key={file.fileId} index={index} file={file} />
//           ))}
//         </List.Main>
//       )}
//       <Dropzone isUploaded={isUploaded} onDrop={onDrop} />
//     </div>

//   );
// };
// export default UploadZone;
// <div>{isUploaded ? <List /> : <UnUploaded />}</div>

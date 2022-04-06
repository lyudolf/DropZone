import React from "react";
import useStyles from "./useStyles";

import { Button, IconButton, TextField } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

import { UploadedData } from "../UpLoadZone";

const List: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.listRoot}>
      <div className="header">
        <p className="no body2 gray900 normal">No.</p>
        <p className="fileName body2 gray900 normal">파일명</p>
        <p className="quantity body2 gray900 normal">수량*</p>
        <p className="option body2 gray900 normal">재료옵션*</p>
      </div>
      {children}
    </div>
  );
};

interface ItemProps {
  index: number;
  file: UploadedData;
}

export const Item = ({ file, index }: ItemProps) => {
  const classes = useStyles();

  return (
    <div className={classes.itemRoot}>
      <div className="no">
        <span className="body2 normal gray900">{index + 1}</span>
      </div>
      <div className="fileName">
        <span className="body2 bold gray900">{file.fileName}</span>
      </div>
      <div className="quantity">
        <TextField variant="outlined" size="small" placeholder="수량입력" />
      </div>
      <div className="option">
        <span className="body2 normal gray600">
          선택한 재료 옵션이 없습니다. 재료 옵션을 선택해주세요.
        </span>
      </div>
      <div className="button-group">
        <Button
          classes={{ containedPrimary: "select-btn", label: "body2 normal" }}
          variant="contained"
          color="primary"
        >
          재료 옵션 선택
        </Button>
        <IconButton size="small" className="delete-btn">
          <DeleteOutlined />
        </IconButton>
      </div>
    </div>
  );
};
export default List;

// import React from "react";
// import { TextField, Button, IconButton } from "@material-ui/core";
// import UploadZone from "./upLoadZone";
// import styled from "styled-components";
// //import { DeleteOutlined } from "@mui/icons-material";

// function List() {
//   //   interface ItemProps {
//   //     file: UploadedData;
//   //   }
//   //file 최대 개수를 지정하고 list길이만큼 ex>5개max
//   const menus = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5"];
//   //const menus = [file개수?];
//   //listno, 파일명, 수량, 재료옵션 ,재료옵션 선택버튼, 삭제버튼
//   const menuList = menus.map((menu, index) => (
//     <ul>
//       <li key={index}>
//         {index + 1}
//         {"filename"}
//         <TextField placeholder="수량입력">수량</TextField>
//         <span>선택한 재료 옵션이 없습니다. 재료 옵션을 선택해주세요.</span>
//         <Button variant="contained">재료옵션선택*</Button>
//         <IconButton>{/* <DeleteOutlined /> */} 삭제버튼</IconButton>
//       </li>
//     </ul>
//   ));
//   //store 왜 사용했는가?
//   //기본 상단 옵션 구현 후 밑에 드래그시마다 리스트 호출
//   // isuploaded , acceptedfile.length 가져오면 어차피 다시 uploadzone으로 보여줘야함=> list를 uploadzone에서 호출?
//   return (
//     <div>
//       <div>No 파일명 수량* 재료옵션*</div>
//       {/* <Div>
//           {(isUploaded){for(let i=0; i<acceptedfiles.length; i++)
//             {menuList}}}
//             </Div> */}
//     </div>
//   );
// }
// export default List;

// const Div = styled.div`
//   ul {
//     list-style: none;
//     float: left;
//     outline: 1px dotted red;
//     padding: 10px;
//     margin: 10px;
//     li {
//     }
//   }
// `;

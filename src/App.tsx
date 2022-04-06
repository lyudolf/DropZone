import "./App.css";
import UploadZone from "./components/UpLoadZone";
import { useStyles } from "./useStyles";

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
function App() {
  //header
  //---------------------조건부렌더링-----------------------//
  //uploadzone => Unupload, uploaded => isdrag 삼항연산??
  //---------------------조건부렌더링-----------------------//
  //uploaded no./파일명/ 수량*/ 재료옵션* /재료옵션선택버튼/삭제버튼
  //list {file[]} /{file.name}/ input/ 버튼구현
  //dropzone 클래스화시켜야됨

  return (
    <Layout>
      <UploadZone />
    </Layout>
  );
}
export default App;

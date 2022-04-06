import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "1920px",
      height: "440px",
      minHeight: "100vh",
    },
  };
});

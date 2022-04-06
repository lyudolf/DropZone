import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listRoot: {
    width: "100%",
    maxWidth: 912,
    "& .header": {
      display: "flex",
      backgroundColor: "#E9ECEF",
      padding: "10px 12.5px",
    },
    "& .no": {
      width: 23,
    },
    "& .fileName": {
      width: 175,
      margin: "0px 24px 0px 16px",
    },
    "& .quantity": {
      width: 120,
      marginRight: 16,
    },
    "& .option": {
      width: 323,
      marginRight: 24,
    },
  },
  itemRoot: {
    display: "flex",
    alignItems: "center",
    padding: "20px 16px",
    "& .button-group": {
      display: "flex",
    },
    "& .select-btn": {
      padding: "6px 9px",
      backgroundColor: "#4B88FF",
      borderRadius: 8,
      height: 32,
      width: 120,
    },
    "& .delete-btn": {
      padding: 0,
      marginLeft: 24,
      color: "#DADADA",
    },
  },
}));

export default useStyles;

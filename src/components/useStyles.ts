import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    uploadZone: {
      marginTop: "3%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    },

    dropZone: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      border: "1px dashed #4B88FF",
      backgroundColor: "#E9F1FF",
      maxWidth: 912,
      padding: 28,
      marginTop: "224px",
      transition: "height 0.2s ease-in-out",
      "&.zero": {
        marginTop: "140px",
        width: 912,
        height: 160,
      },
      "&.uploaded": {
        marginTop: "0px",
        width: 912,
        height: 120,
        padding: 8,
      },
      "& .information": {
        width: "912",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        "& .buttons": {
          marginBottom: 12,
        },
      },
    },
  };
});

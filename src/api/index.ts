import { UploadedData } from "./../components/UpLoadZone";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://capa-api-dev.capa.ai",
  headers: {
    Accept: ".step, .dwg",
    "Content-type": "multipart/form-data",
  },
});

const fileUploadApi = async (formData: FormData) => {
  return await instance.post("/file", formData);
};
//
const fileDeleteApi = async () => {
  return await instance.delete("/file");
};

export { fileDeleteApi };

export { fileUploadApi };
//파일 업로드 시에 160=>120

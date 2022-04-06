import axios from "axios";

const instance = axios.create({
  baseURL: "https://capa-api-dev.capa.ai",
  headers: {
    Accept: "*/*",
    "Content-type": "multipart/form-data",
  },
});

const fileUploadApi = async (formData: FormData) => {
  return await instance.post("/file", formData);
};

export { fileUploadApi };
//파일 업로드 시에 160=>120

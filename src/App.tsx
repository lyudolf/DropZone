import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Dropzone from "./components/dropzone";
import DropzoneUploaded from "./components/dropzoneUploaded";

function App() {
  return <Dropzone />;
}

export default App;

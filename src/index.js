import React from "react";
import "./index.css";
import MenuContainer from "./MenuContainer";
import { createRoot } from 'react-dom/client';

const container = document.querySelector("#container");
const root = createRoot(container);
 
root.render(
  <MenuContainer/>
);
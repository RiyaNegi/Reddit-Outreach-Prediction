import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import { ActionProvider } from "./ActionContext"




ReactDOM.render(
  <ActionProvider >
    <App />
  </ActionProvider>,
  document.getElementById('root')
);

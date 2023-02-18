import React from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import {  BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store/store";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "antd/dist/antd.css";

// ReactDOM.render(
//     // <React.StrictMode>
//     <Provider store={store}>
//         <BrowserRouter>
//             <Calc />
//         </BrowserRouter>
//     </Provider>,
//     // </React.StrictMode>
//     document.getElementById('root')
// )




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <Provider store={store}>

    
    <BrowserRouter>

      <App />
    </BrowserRouter>
  </Provider>
);

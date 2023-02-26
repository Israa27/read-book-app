import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import  store from './redux/store';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter >
    <ToastContainer />
   <React.StrictMode>
    <Provider store={store}>
  
      <App />
   
   </Provider>
   </React.StrictMode>
   
  </BrowserRouter>,
 
);


import './App.css';
import React, { Suspense } from 'react';
import routes from './routes';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const location=useLocation()
  return<div className="App">
  
   <Suspense >
   
      <Routes >
         {routes.map((name,key)=>{return(
           <Route 
           key={key}
           exact={name.exact}
           path={name.path}
           element={<name.element/>}
           />
           
         )})}

      </Routes> 
      </Suspense>
      
      </div>
      
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Router } from "react-router-dom";
import './index.css';
import App from './App';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';
import NoPage from './Components/NoPage/NoPage';
import Services from './Components/Services/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='/cloning-abhishek-bhaiya-web'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

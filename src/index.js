import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppThemeProvider from 'themes/AppThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
// eslint-disable-next-line no-undef
//oot.use(express.static(__dirname));

//oot.get("/*", function(req, res) {
  // eslint-disable-next-line no-undef
 // res.sendFile(path.join(__dirname, "index.html"));
//});
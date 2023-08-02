import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Container from "./context/Container"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Container>

    <App />
  
  </Container>  
  
);
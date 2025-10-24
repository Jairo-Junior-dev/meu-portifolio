import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardDetail from './pages/card-details/CardDetail';
import Home from './pages/home/home';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/card/:id" element={<CardDetail />} /> 
      </Routes>
    </BrowserRouter>
    
    </>
  
);
   
}

export default App;

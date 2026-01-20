import './App.css';
import 'animate.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Recipes from './pages/Recipes/Recipes.jsx';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

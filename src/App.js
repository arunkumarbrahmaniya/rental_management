import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard/CategoryCard';
import Home from './pages/Home';
function App() {
  const [categories, setCategories] = useState('');
  const handleMenu = (data) => {
    setCategories(data);
  }
  return (
    <div className="App">
      <Header handleMenu={(e) => handleMenu(e)} />
      <CategoryCard _categories={categories} _handleMenu={handleMenu} />
      {
        categories ? "" : <Home/>
      }
    </div>
  );
}

export default App;

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './Recipes.scss'

export default function Recipes() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  }

  const [ingredients, setIngredients] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      setIngredients([...ingredients, event.target.value.trim()]);
      event.target.value = '';
    } 
  };

  const removeTag = (indexToRemove) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  }

  const findRecipe = () => {
    // Logic to find recipe based on ingredients
    alert(`Finding recipes with: ${ingredients.join(', ')}`);
  }

  return (
    <div className='container search-page'>
      <button className='back-btn' onClick={handleClick}>&larr; Back</button>
      <h1 className='search-page__heading'>What can you cook with what you have?</h1>
      <p className='search-page__subheading'>Tell us what you have. We'll tell you what to make.</p>
      {<div className='search-section'>
        <p className='search-section__label'>What's in your kitchen?</p>
        <input className="search-section__input" type="text" placeholder='Type ingredient and press Enter...' onKeyDown={handleKeyDown}/>
        <div className="search-section__ingredients">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="search-section__ingredient">
              <div className="search-section__ingredient-btn animate " onClick={() => removeTag(index)}>{ingredient}
              <span className="close-btn">x</span>
              </div>
            </div>
          ))}
        </div>
        <p className='search-section__label'>How much time do you have?</p>
        <select className='search-section__select'>
          <option value="10">10 minutes</option>
          <option value="20">20 minutes</option>
          <option value="30">30 minutes</option>
        </select>
        <p className='search-section__label'>Energy level?</p>
        <select className='search-section__select'>
          <option value="low">Low</option>
          <option value="medium">Normal</option>
        </select>
        <p className='search-section__label'>What equipment do you have?</p>
        <select className='search-section__select'>
          <option value="oven">Oven</option>
          <option value="stove">Stove</option>
          <option value="microwave">Microwave</option>
          <option value="pan">Pan</option>
          <option value="pot">Pot</option>
        </select>
        <button className='btn search-section__btn' onClick={findRecipe}>Tell Me What To Cook</button>
      </div>}
    </div>
  )
}

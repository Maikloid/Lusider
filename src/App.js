import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './index.css';
import axios from 'axios';
import lusiderLogo from "./lusiderLogo.png";

function Aplikace() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const API_KEY = 'E7dXdvQ1jlUNl21XrPGMew==NOYRxQLcwxhFkE7W';

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
        headers: {
          'X-Api-Key': API_KEY
        }
      });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="container">
        <nav className="navbar">
          <div className="logo">
          <img src={lusiderLogo} alt="Logo Lusider" style={{ height: "70px" }} />
          </div>

          <div className="button">
            <Button variant="contained" size='small'>Přihlásit se</Button>
          </div>
          <br></br>
          <div className="button-middle-center">
            <div className="button-middle-1">
              <Button variant="outlined">O nás</Button>
            </div>

            <div className="button-middle-1">
              <Button variant="outlined">Prémiové účty</Button>
            </div>

            <div className="button-middle-1">
              <Button variant="outlined">Kontakt</Button>
            </div>
          </div>
        </nav>
        <br />

      <div className="main-text-border">
        <p className="main-text">Zadejte jméno svého vysněného receptu</p>
      </div>
      <br />
      <div className="search-box">
        <TextField
          id="filled-search"
          label="Najdi recept"
          type="search"
          size='small'
          variant="filled"
          style={{ backgroundColor: "white" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outlined" size='large' style={{ backgroundColor: "white" }} onClick={handleSearch}>🔍</Button>
      </div>

      <div>
        {recipes.map(recipe => (
          <div key={recipe.title} className="recipe-border">
            <h3 className="recipe-title">{recipe.title}</h3>
            <p className="recipe-info"><strong>Ingredience:</strong> {recipe.ingredients}</p>
            <p className="recipe-info"><strong>Počet porcí:</strong> {recipe.servings}</p>
            <p className="recipe-info"><strong>Postup:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aplikace;

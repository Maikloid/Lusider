import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './index.css';
import lusiderLogo from "./lusiderLogo.png";
import axios from 'axios';

function Aplikace() {
  const [hledanyText, nastavHledanyText] = useState('');
  /*
    const hledatRecepty = () => {
      // Odeslat hledací dotaz na API
      const dotaz = encodeURIComponent(hledanyText);
      const apiKey = 'E7dXdvQ1jlUNl21XrPGMew==NOYRxQLcwxhFkE7W'; // Nahraďte svým API klíčem
      const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${dotaz}`;
      
      // Přesměrovat na stránku s recepty
      window.location.href = apiUrl;
    };
  */
  const hledatRecepty = () => {
    axios.get('https://api.api-ninjas.com/v1/recipe?query=' + hledanyText, {
      params: {
        'X-Api-Key': 'E7dXdvQ1jlUNl21XrPGMew==NOYRxQLcwxhFkE7W',
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const zmenaVstupu = (udalost) => {
    nastavHledanyText(udalost.target.value);
  };

  return (
    <>
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
          <p className="main-text">Zadejte jednotlivé potraviny oddělené čárkou</p>
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
            value={hledanyText}
            onChange={zmenaVstupu}
          />
          <Button variant="outlined" size='large' style={{ backgroundColor: "white" }} onClick={hledatRecepty}>🔍</Button>
        </div>
      </div>

    </>

  );
}

export default Aplikace;

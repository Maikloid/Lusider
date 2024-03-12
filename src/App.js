import React, { useState } from 'react';
import { upload } from "@testing-library/user-event/dist/upload";
import Button from "@mui/material/Button";
import './index.css';
import { TextField } from '@mui/material';
import { fontGrid } from '@mui/material/styles/cssUtils';
import lusiderLogo from "./lusiderLogo.png"


function App() {

  return (
    <>
      <div class="container">
        <nav class="navbar">
          <div class="logo">
            <img src={lusiderLogo} alt="Logo Lusider"style={{height:"70px"}}/>
          </div>

          <div class="button">
            <Button variant="contained" size='small' >Přihlásit se</Button>
          </div>
          <br></br>
          <div class="button-middle-center">
            <div class="button-middle-1">
              <Button variant="outlined">O nás</Button>
            </div>

            <div class="button-middle-1">
              <Button variant="outlined">Prémiové účty</Button>
            </div>

            <div class="button-middle-1">
              <Button variant="outlined">Kontakt</Button>
            </div>
          </div>
        </nav>
        <br />


        
          <div class="main-text-border">
            <p class="main-text">Zadejte jednolivě potraviny oddělené čárkou</p>
            </div>
            <br />
            <div class="search-box">
            <TextField
              id="filled-search"
              label="Najdi recept"
              type="search"
              size='small'
              variant="filled"
              style={{backgroundColor:"white"}} 
              ></TextField>
          
          <Button variant="outlined" size='large' style={{backgroundColor:"white"}}>🔍</Button> 

        </div>
      </div>

    </>

  );
}

export default App;

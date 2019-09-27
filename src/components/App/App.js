import React from 'react';
import  PrimarySearchAppBar  from "../Navbar/Navbar";
import ImgMediaCard from "../Cards/CardDepartment";
import MusicaCard from "../Cards/Musica";
import Engenharias from "../Cards/Engenharias";
import { Link } from "react-router-dom";
import './App.css'

function App() {
  return (
      <>
        <PrimarySearchAppBar />
        <div class="container" >
          <Link to="/professores" style={{ textDecoration: 'none'}}>
            <ImgMediaCard />
          </Link>
          <MusicaCard />
          <Engenharias />
        </div>
      </>
  );
}

export default App;

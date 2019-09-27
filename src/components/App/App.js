import React from 'react';
import  PrimarySearchAppBar  from "../Navbar/Navbar";
import ImgMediaCard from "../Cards/CardDepartment";
import MusicaCard from "../Cards/Musica";
import Engenharias from "../Cards/Engenharias";
import './App.css'

function App() {
  return (
      <>
        <PrimarySearchAppBar />
        <div class="container" >
          <ImgMediaCard />
          <MusicaCard />
          <Engenharias />
        </div>
      </>
  );
}

export default App;

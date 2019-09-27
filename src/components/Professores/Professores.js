import React from 'react';
import {CardStack, Card }  from 'react-cardstack';
import PrimarySearchAppBar from "../Navbar/Navbar";
import Box from '@material-ui/core/Box';
import Lamar from "../Avatar/Lamar";
import FMoura from "../Avatar/FMoura";
import Caetano from "../Avatar/Caetano";
import Lucero from "../Avatar/Lucero";
import "./Professor.css";

export default function Professores() {
  return (
    <>
      <PrimarySearchAppBar />
      <div class="container">
        <CardStack
          height={500}
          width={600}
          background='#f8f8f8'
          hoverOffset={25}>
          

          <Card background='#2980B9'>
            <Lamar />
          </Card>
          <Card background='#27AE60'>
            <FMoura />
          </Card>
          <Card background="#9b27ae">
            <Caetano />
          </Card>
          <Card background="#e67e22">
            <Lucero />
          </Card>
        </CardStack>
      </div>
    </>
  );
}

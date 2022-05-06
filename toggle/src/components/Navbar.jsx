import React from 'react'
import { Button,Heading ,Div,Rectangularbtn,Round} from './Navbar-styles'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import styled from 'styled-components';

export const Navbarjs = () => {

    const {theme,changetheme} = useContext(ThemeContext)

  return (
    <Div theme={theme}>
       <Heading>My Dashboard</Heading>
       <Button onClick={()=>{
         changetheme()
       }}>Toggle</Button>
       
    <Rectangularbtn />
    <Round onClickCapture={()=>{

       changetheme()
     
    }} />
    </Div>
  )
}

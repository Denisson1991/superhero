import React from 'react'
import Header from './components/header/Header';
import {Root, Back} from "./style"
import background from './assets/background.jpg'
import Home from './pages/homePage/Home'

function App() {
  return (
    <Root>
        <Back src={background}></Back>
        <Header/>
        <Home/>              
    </Root>
  );
}

export default App;

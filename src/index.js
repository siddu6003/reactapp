import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import foot from './foot';
import List from './List';
import Nav from './Nav';
import P1 from './P1';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Header />
    <div className="one">
    <Card name="baludu" branch="ECE" special="Deloitee"/>
    <Card name="macha" branch="CSE" special="Fiserv,Virtusa"/></div>
    <div className="one">
    <Card name="labbe" branch="ECE" special="CapGemini"/>
    <Card name="laagava" branch="ECE" special="CapGemini"/></div>
    <div className="one">
    <Card name="panda" branch="ECE" special="Cognizant"/>
    <Card name="jaya" branch="ECE" special="Cognizant"/>
    </div>
    <div className="one">
    <Card name="auto" branch="ECE" special="Cognizant"/>
    <Card name="Gontla" branch="ECE" special="Cognizant"/>
    </div>
    <div className="one">
    <Card name="Sharma" branch="ECE" special="TCS"/>
    <Card name="Bussu" branch="ECE" special="Cognizant"/>
    </div>
    <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


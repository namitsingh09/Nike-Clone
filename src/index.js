import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Image from './Image';
import Banner from './Banner';
import Card from './Card';
import VideoPlayer from './Video';
import Delivery from './Delivery';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav></Nav>
    <Image></Image>
    <Banner></Banner>
    <Card></Card>
    <VideoPlayer></VideoPlayer>
    <Delivery></Delivery>
   <Footer></Footer>
  
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

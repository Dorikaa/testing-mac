import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageEditor from './components/ImageEditor';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="workspace">
        <ImageEditor />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <h1>Welcome to Pro Shop</h1>
        </Container>  
      </main>
      <Footer />
      
    </div>
  );
}

export default App;

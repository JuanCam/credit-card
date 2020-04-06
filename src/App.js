import React from 'react';
import { CreditCard, CreditCardForm } from './components'; 
import './App.scss';

function App() {
  return (
    <main>
      <header className="header">
      </header>
      <div className="app">
        <CreditCard />
        <CreditCardForm />
      </div>
    </main>
  );
}

export default App;

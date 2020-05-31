import React from 'react';
import NavBar from '../components/navigation';

export default props => (
  <div
    style={{
      width: '100%',
    }}
  >
    <NavBar />
    <div
      style={{
        margin: 10,
        marginTop: 0,
        overflowY: 'scroll',
        height: '100%',
        marginBottom: 70,
      }}
    >
      {props.children}
    </div>
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#3A454F',
        color: 'white',
        height: 60,
      }}
    >
      <div>
        <p>Desafio Cumplo &copy;{new Date().getFullYear()}, Powered by SBIF</p>
      </div>
    </footer>
  </div>
);

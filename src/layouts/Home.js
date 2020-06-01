import React from 'react';
import NavBar from '../components/navigation';

export default props => (
  <>
    <NavBar />
    <div className="content-view">{props.children}</div>
    <footer>
      <div className="footer">
        <p>Desafío Cumplo &copy;{new Date().getFullYear()}, Powered by SBIF</p>
      </div>
    </footer>
  </>
);

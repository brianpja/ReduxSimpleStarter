import React from 'react';
import ReactDOM from 'react-dom';

// Create new component with some html
const App = () => {
  return <div>Brian, you handsome!</div>;
}

// put that html on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCzcy_rEt8HvpFtP-uBHjnExyFHLkW-Yow';

// Create new component with some html
const App = () => {
  return (
    <div>
      <div>Brian, you handsome!</div>
      <SearchBar />
    </div>
  );
}

// put that html on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

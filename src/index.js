import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCzcy_rEt8HvpFtP-uBHjnExyFHLkW-Yow';



// Create new component with some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    })


  }

  render() {
    return (
      <div>
        <div>Brian, you handsome!</div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}



// put that html on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

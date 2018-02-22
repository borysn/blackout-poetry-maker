import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

class MakeBlackoutPoetry extends Component {
  render() {
    return (
      <div id='title-container'>
        <span id='title-text'>make blackout poetry</span>
      </div>
    );
  }
};

ReactDOM.render(
  <MakeBlackoutPoetry/>,
  document.getElementById('blackoutpoetrymaker')
);
